const FormData = require('form-data');
const fs = require('fs')
const Client = require('./axios')


class CloudFlare extends Client {


    static instance; 

    constructor() {
        super();
    }


    static getInstance(){
        if(!CloudFlare.instance){
            CloudFlare.instance = new CloudFlare(); 
        }
        return CloudFlare.instance; 
    }


    getImageUrl(imageId, variant) {
        const HASH_ACCOUNT = '_m5zreLMIn0a6pp61RJsvw'; 
        return `https://imagedelivery.net/${HASH_ACCOUNT}/${imageId}/${variant}`;
    }


     async uploadImage(path) {
        const formData = new FormData();
        formData.append('file', fs.createReadStream(path)); 
        
        const response = await this.client.post(
            '/accounts/ff072a9d6a634b99d23a78be0846961c/images/v1',
            formData,
            {
                headers: formData.getHeaders() 
            }
        );

        return response.data.result; 
    }

    async listImages() {
        const response = await this.client.get(
            '/accounts/ff072a9d6a634b99d23a78be0846961c/images/v1' 
        );
        return response.data.result.images; 
    }
    
    deleteImage(imageId){
      return  this.client.delete(
            `/accounts/ff072a9d6a634b99d23a78be0846961c/images/v1/${imageId}`
        )
    }
}

module.exports = CloudFlare

