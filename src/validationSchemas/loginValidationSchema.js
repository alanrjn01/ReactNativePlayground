import * as yup from 'yup'

//hago un esquema de validacion para el formulario con yup
const loginValidationSchema = yup.object().shape({
  username:yup
  .string()
  .required('el nombre de usuario es requerido'),
  password:yup
  .string()
  .max(20,'too long!')
  .required('se requiere contraseña')
})

export default loginValidationSchema