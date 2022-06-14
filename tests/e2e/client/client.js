const {Request} = require('./request')

class Client {

    request = new Request()

    addProfile(profile){

       return this.request.call({ 
            data: profile,
            url: '/profile',
            method: 'POST',
        })

    }

    deleteProfile(name){

       return this.request.call({ 
            url:`/delete/${name}`,
            method: 'DELETE',
            })

    }

    list(){

       return this.request.call({ 
              url:'/list',
              method: 'GET',
            })

    }

    getProfile(name){
        return this.request.call({
             url:`/user/${name}`,
             method: 'GET'
            })

    }
}

module.exports = new Client()