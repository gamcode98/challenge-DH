/* eslint-disable no-undef */
const request = require('supertest')

const { app } = require('../src/app')

const EXPECTED_META_PROPERTIES = ['url', 'count', 'statusCode', 'message', 'error']

describe('GET /applicants', () => {
  it('should return 200', async () => {
    const expectedApplicantProperties = ['id', 'dni', 'firstName', 'lastName', 'email', 'cellphone', 'image', 'gender', 'birthdate', 'createdAt', 'updatedAt', 'deletedAt', 'Professions']

    const response = await request(app).get('/api/v1/applicants')

    expect(response.status).toEqual(200)
    expect(response.type).toEqual('application/json')

    expect(response.body).toHaveProperty('data')
    expect(response.body).toHaveProperty('meta')

    EXPECTED_META_PROPERTIES.forEach(property => {
      expect(response.body.meta).toHaveProperty(property)
    })

    response.body.data.forEach(applicant => {
      expectedApplicantProperties.forEach(property => {
        expect(applicant).toHaveProperty(property)
      })
    })

    expect(response.body.data).toBeInstanceOf(Array)
    expect(response.body.data.length).toBeGreaterThan(0)
  })
})

describe('GET /professions', () => {
  it('should return 200', async () => {
    const expectedProfessionProperties = ['id', 'name', 'createdAt', 'updatedAt', 'deletedAt', 'Applicants']
    const response = await request(app).get('/api/v1/professions')

    expect(response.status).toEqual(200)
    expect(response.type).toEqual('application/json')

    expect(response.body).toHaveProperty('data')
    expect(response.body).toHaveProperty('meta')

    EXPECTED_META_PROPERTIES.forEach(property => {
      expect(response.body.meta).toHaveProperty(property)
    })

    response.body.data.forEach(profession => {
      expectedProfessionProperties.forEach(property => {
        expect(profession).toHaveProperty(property)
      })
    })

    expect(response.body.data).toBeInstanceOf(Array)
    expect(response.body.data.length).toBeGreaterThan(0)
  })
})
