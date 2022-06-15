const client = require('../client/client')
const profile = require('../data/testData')

beforeAll(async () => {
    await client.addProfile(profile)
})

afterAll(async () => {
    await client.deleteProfile(profile.name)
})

test('User search', async () => {

    const response = await client.getProfile(profile.name)

    expect(response.data).toStrictEqual(profile)
    })

