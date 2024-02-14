const { faker } = require('@faker-js/faker')

const { applicantService } = require('../services/applicant.services')
const { professionsService } = require('../services/professions.services')

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
    await professionsService.createMany(professions)
  } catch (error) {
    console.error(error)
  }

  console.log('Applicants and professions generated')
}

seed()
