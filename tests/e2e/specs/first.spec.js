  const client = require('../client/client')

  const helpers = require('../helpers/helpers')
  const profile =  {

    name: helpers.randomString(5),
    number: helpers.randomNumber() 
}


test('User create test', async () => {

    const response = await client.addProfile(profile)

    expect(response.status).toBe(201)
})



test('User search test', async () => {

    const response = await client.getProfile(profile.name)

    expect(response.data).toStrictEqual(profile)
    })


    test('User delete status', async () => {

        const response = await client.deleteProfile(profile.name)

        expect(response.status).toBe(200)
    })  

    
    test('User presence', async () => {

        const response = await client.list()

        expect(response.data).not.toContainEqual(profile)
    })

    test('Delete removed user', async () => {

        const response = await client.deleteProfile(profile.name)

        expect(response.status).toBe(410)
        expect(response.data).toBe("User not found")
    })

    




