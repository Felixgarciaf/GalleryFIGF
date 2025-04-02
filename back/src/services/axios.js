const axios = require('axios');

class Client {
    client;
    
    constructor() {
        this.client = axios.create({
            baseURL: 'https://api.cloudflare.com/client/v4',
            headers: {
                'Authorization': 'Bearer nmNGa0ozF9KYs0BtWePtO9s32wc3yOm6LPYSFEMK'
            }
        });
    }
}

module.exports = Client;
