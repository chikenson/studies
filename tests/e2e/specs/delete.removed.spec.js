const client = require('../client/client')

test('Delete removed user', async () => {

    const response = await client.deleteProfile(client.profile.name)

    expect(response.status).toBe(410)
    expect(response.data).toBe("User not found")
})