const client = require('../client/client')
const profile = require('../profile/profileData')

test('Valid user create', async () => {

    const response = await client.addProfile(profile)

    expect(response.status).toBe(201)
})

afterAll(() => {
    client.deleteProfile(profile.name)
})