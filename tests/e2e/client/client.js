const {Request} = require('./request')
const helpers = require('../helpers/helpers')

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

     profile =  {
        name: helpers.randomString(5),
        number: helpers.randomNumber() 
    }
}

module.exports = new Client()