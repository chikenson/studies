const client = require('../client/client')

test('User search test', async () => {

    await client.addProfile(client.profile)

    const response = await client.getProfile(client.profile.name)

    expect(response.data).toStrictEqual(client.profile)
    })
