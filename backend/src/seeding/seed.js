const { faker } = require('@faker-js/faker')

const { applicantService } = require('../services/applicant.services')

const seed = async () => {
  console.log('Generating applicants...')

  const limit = 10

  const url = `https://randomuser.me/api/1.4/?page=2&results=${limit}&seed=applicants&inc=gender,name,email,cell,picture,dob`

  try {
    const data = await fetch(url)

    const { results } = await data.json()

    const applicants = results.map((item) => {
      return {
        firstName: item.name.first,
        lastName: item.name.last,
        email: item.email,
        image: item.picture.large,
        gender: item.gender,
        birthdate: item.dob.date,
        cellphone: item.cell,
        dni: faker.number.int({ min: 10000000, max: 99999999 }).toString()
      }
    })

    await applicantService.createMany(applicants)
  } catch (error) {
    console.error(error)
  }

  console.log('Applicants generated')
}

seed()
