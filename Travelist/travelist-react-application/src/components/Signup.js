import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupFormActions"
import { signup } from "../actions/currentUserActions"


const Signup = ({ signupFormData, updateSignupForm, signup }) => {

  const handleUserInfoInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="email" value={signupFormData.email} name="email" type="text" onChange={handleUserInfoInputChange} />
      <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleUserInfoInputChange} />
      <input type="submit" value="Sign Up" />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)
