const { faker } = require('@faker-js/faker')

const { applicantService } = require('../services/applicant.services')
const { professionsService } = require('../services/professions.services')

const seed = async () => {
  const limit = 10

  const url = `https://randomuser.me/api/1.4/?page=2&results=${limit}&seed=applicants&inc=gender,name,email,cell,picture,dob`

  try {
    const searchedApplicants = await applicantService.findAll()

    if (searchedApplicants.length > 0) {
      console.log('\nSeed already generated')
      return
    }

    console.log('Generating seed...')

    const data = await fetch(url)

    const { results } = await data.json()

    const linkedinUrls = [
      'https://www.linkedin.com/in/micaela-zerpa-1097b0237',
      'https://www.linkedin.com/in/gabriel-alejandro-mamani',
      'https://www.linkedin.com/in/carolina-cortez-9640902b5/'
    ]

    const applicants = results.map((item) => {
      return {
        firstName: item.name.first,
        lastName: item.name.last,
        email: item.email,
        image: item.picture.large,
        gender: item.gender,
        birthdate: item.dob.date,
        cellphone: item.cell,
        dni: faker.number.int({ min: 10000000, max: 99999999 }).toString(),
        linkedinUrl: linkedinUrls[faker.number.int({ min: 0, max: linkedinUrls.length - 1 })]
      }
    })

    const createdApplicants = await applicantService.createMany(applicants)

    const professions = [
      { name: 'Médico' },
      { name: 'Enfermera' },
      { name: 'Ingeniero' },
      { name: 'Arquitecto' },
      { name: 'Abogado' },
      { name: 'Profesor' },
      { name: 'Científico' },
      { name: 'Diseñador' },
      { name: 'Programador' },
      { name: 'Artista' },
      { name: 'Músico' },
      { name: 'Chef' },
      { name: 'Piloto' },
      { name: 'Astronauta' },
      { name: 'Veterinario' },
      { name: 'Psicólogo' },
      { name: 'Actor' },
      { name: 'Escritor' },
      { name: 'Periodista' },
      { name: 'Bombero' },
      { name: 'Policía' },
      { name: 'Paramédico' },
      { name: 'Farmacéutico' },
      { name: 'Fotógrafo' },
      { name: 'Terapeuta' },
      { name: 'Electricista' },
      { name: 'Fontanero' },
      { name: 'Carpintero' },
      { name: 'Fontanero' }
      // Añadir mas de ser necesario
    ]

    const createdProfessions = await professionsService.createMany(professions)

    for (const applicant of createdApplicants) {
      const randomNumber = faker.number.int({ min: 1, max: 3 })

      const index = faker.number.int({ min: 0, max: createdProfessions.length - 4 })

      const randomProfessions = createdProfessions.slice(index, index + randomNumber)

      await applicant.addProfession(randomProfessions)
    }
  } catch (error) {
    console.error(error)
  }

  console.log('Seed generated')
}

seed()
