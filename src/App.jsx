import React from 'react'
import YoutubeForm from './components/YoutubeForm'
import FormContainer from './components/reusableFormik/FormContainer'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import EnrollmentForm from './components/EnrollmentForm'

const App = () => {
  return (
    <div>

      {/* starter Formik */}
      {/* <YoutubeForm/> */}

      {/* reusable formik */}
      {/* <FormContainer/> */}

      {/* Formik Login Form */}
      {/* <LoginForm /> */}

      {/* Registration Form */}
      {/* <RegistrationForm /> */}

      {/* Enrollment Form */}
      <EnrollmentForm/>
    </div>
  )
}

export default App