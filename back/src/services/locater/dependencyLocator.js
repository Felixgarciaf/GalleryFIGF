class DependenciLocater{
    factories = new Map();
    LazySingletons = new Map();

    static instance;

    constructor(){}

    bindFactory(token, fn){
        this.factories.set(token, {type: 'factory', fn});
    }

    bindLazySingleton(token, fn){
        this.factories.set(token, {type: 'LazySingleton', fn});
    }

    static getInstance(){
        if(!DependenciLocater.instance){
            DependenciLocater.instance = new DependenciLocater();
        }

        return DependenciLocater.instance;
    }

    get(token){
        const factory = this.factories.get(token);

        if(!factory){
            throw new Error('Dependency $(token) is not registered');
        }

        if(factory.type === 'LazySingleton'){
            const singleton = this.LazySingletons.get(token)|| factory.fn();
            this.LazySingletons.set(token, singleton);

            return singleton;
        }else {
            return factory.fn();
        }
    }

    clear(){
        this.factories.clear();
        this.LazySingletons.clear();
    }
}

module.exports = DependenciLocater;