const client = require('../client/client')
const profile = require('../profile/profileData')

beforeAll(() => {
     client.addProfile(profile)
})

test('User search', async () => {

    const response = await client.getProfile(profile.name)

    expect(response.data).toStrictEqual(profile)
    })

afterAll(() => {
    client.deleteProfile(profile.name)
})