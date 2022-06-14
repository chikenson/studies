const client = require('../client/client')
const profile = require('../profile/profileData')

beforeAll(() => {
     client.addProfile(profile)
})

test('User delete status', async () => {

    await client.addProfile(profile)

    const response = await client.deleteProfile(profile.name)

    expect(response.status).toBe(200)
})  


test('Deleting a deleted profile', async () => {

    const response = await client.deleteProfile(profile.name)

    expect(response.status).toBe(410)
    expect(response.data).toBe("User not found")
})


