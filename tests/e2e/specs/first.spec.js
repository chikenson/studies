const axios = require('axios');
const { response } = require('express');

const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 1000,
  }); 

  const helpers = require('../helpers/helpers')
  const profile =  {

    name: helpers.randomString(5),
    number: helpers.randomNumber() 
}


test('User create test', async () => {

    const params = {

        data: profile,

        url: '/profile',

        method: 'POST',
    }

    const response = await instance(params)

    expect(response.status).toBe(200)
})



test('User search test', async () => {

    const params = {

        url:`/user/${profile.name}`,

        method: 'GET',
    }
    
    const response = await instance(params)

    expect(response.data).toStrictEqual(profile)
    })


    test('User delete status', async () => {

        const params = {

            url:`/delete/${profile.name}`,
            method: 'DELETE',
        }

        const response = await instance(params)

        expect(response.status).toBe(200)
    })  

    
    test('User presence', async () => {

        const params = {

            url:'/list',
            method: 'GET',
        }

        const response = await instance(params)

        expect(response.data).not.toContainEqual(profile)
    })

    test('Request from a remote user', async () => {

        const params = {

            url:`/delete/Egor`,
            method: 'DELETE',
        }

        const response = await instance(params)

        expect(response.data).toBe("User not found")
    })




