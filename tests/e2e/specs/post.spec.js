const client = require('../client/client')
const profile = require('../data/testData')

test('Valid user create', async () => {

    const response = await client.addProfile(profile)

    expect(response.status).toBe(201)
})

afterAll(async () => {
    await client.deleteProfile(profile.name)
})