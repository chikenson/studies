const client = require('../client/client')
const profile = require('../data/testData')

beforeAll(async () => {
    await client.addProfile(profile)
})

test('Delete profile', async () => {

    const response = await client.deleteProfile(profile.name)

    expect(response.status).toBe(200)
})  


test('Delete not existing profile', async () => {

    const response = await client.deleteProfile(profile.name)

    expect(response.status).toBe(410)
    expect(response.data).toBe("User not found")
})


