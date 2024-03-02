import * as yup from 'yup'
import { isValidFileType } from './helpers'

export const schema = yup.object({
  firstName: yup.string()
    .required('El nombre es requerido')
    .matches(/^[a-zA-Z\s]*$/, 'Ingresa solo letras')
    .min(3, 'El nombre es muy corto')
    .max(50, 'El nombre es muy largo'),
  lastName: yup.string()
    .required('El apellido es requerido')
    .matches(/^[a-zA-Z\s]*$/, 'Ingresa solo letras')
    .min(3, 'El apellido es muy corto')
    .max(50, 'El apellido es muy largo'),
  email: yup.string().email('Ingresa un correo valido').required('El correo es requerido'),
  cellphone: yup.string().required('El celular es requerido')
    .matches(/^[0-9]+$/, 'Ingresa solo numeros')
    .min(10, 'El celular debe tener 10 digitos')
    .max(10, 'El celular debe tener 10 digitos'),
  dni: yup.string()
    .required('El DNI es requerido')
    .matches(/^[0-9]+$/, 'Ingresa solo numeros')
    .min(8, 'El DNI solo debe tener 8 digitos')
    .max(8, 'El DNI solo debe tener 8 digitos'),
  gender: yup.string().required('El genero es requerido')
    .oneOf(['mujer', 'hombre'], 'El genero no es valido'),
  dob: yup.string().required('La fecha de nacimiento es requerida')
    .typeError('La fecha de nacimiento es requerida')
    .matches(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/, 'Fecha inválida'),
  image: yup
    .mixed()
    .required('Required')
    .test('is-valid-type', 'Formato de imagen inválido',
      value => isValidFileType(value && value.name.toLowerCase(), 'image'))
}).required()
