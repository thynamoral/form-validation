import { useState } from 'react';
import './App.css'
import FormInput from './components/FormInput'

function App() {

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const inputs = [
    {
      id: 0,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
      errorMessage: `Username should be 6-16 characters and shouldn't include special characters!`,
      pattern: '[a-zA-Z0-9]{6,16}',
      required: true
    },
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
      errorMessage: 'This is not a valid email format!',
      required: true
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      errorMessage: 'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character.',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*.?])[a-zA-Z0-9!@#$%^&*.?]{8,20}$`,
      required: true
    },
    {
      id: 3,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
      errorMessage: `Password doesn't match!`,
      pattern: values[`password`],
      required: true
    },
  ]

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const udpateValues = (event) => {
    setValues(previousValues => {
      return {
        ...previousValues,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        {inputs.map(input => {
          return (
            <FormInput 
              key={input.id} 
              {...input}
              values={values[input.name]}
              udpateValues={udpateValues}
            />
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
