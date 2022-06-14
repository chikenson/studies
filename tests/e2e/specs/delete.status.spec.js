const client = require('../client/client')

test('User delete status', async () => {

    await client.addProfile(client.profile)

    const response = await client.deleteProfile(client.profile.name)

    expect(response.status).toBe(200)
})  




