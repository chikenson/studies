const client = require('../client/client')

test('User create test', async () => {

    const response = await client.addProfile(client.profile)

    expect(response.status).toBe(201)
})







    




