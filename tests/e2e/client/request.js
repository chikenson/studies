axios = require('axios');

class Request{

     
  axiosInstance = axios.create({
      baseURL: 'http://127.0.0.1:3000',
      timeout: 1000,
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      }
  }); 

  call(params){
    return this.axiosInstance(params)
  }

}

module.exports = {Request}