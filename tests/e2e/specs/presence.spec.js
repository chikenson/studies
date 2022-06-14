const client = require('../client/client')

test('User presence', async () => {

    const response = await client.list()

    expect(response.data).not.toContainEqual(client.profile)
})