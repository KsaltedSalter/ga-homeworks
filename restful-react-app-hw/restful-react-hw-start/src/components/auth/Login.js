import React from 'react'
import { useHistory } from 'react-router-dom'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'


const Login = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      email: '',
      password: ''
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await loginUser(state.formData)
      if (res.status === 200) {
        setToken(res.data.token)
        history.push('/wines')
      }
    } catch (err) {
      console.error('error login user', err)
    }
  }

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value
    }

    setState({ formData })
  }

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <form onSubmit={handleSubmit} className='column is-half is-offset-one-quarter'>
            <div className='field'>
              <label className='label'>Email:</label>
              <div className='control has-icons-right'>
                <input className='input is-danger' placeholder='Email' name='email' value={state.formData.email} onChange={handleChange} />
                <span className='icon is-small is-right'>
                  <i className='fas fa-envelope'></i>
                </span>
              </div>
              
            </div>
            <div className='field'>
              <label className='label'>Password:</label>
              <div className='control'>
                <input className='input is-danger' placeholder='Password' name='password' type='password' value={state.formData.password} onChange={handleChange} />
              </div>
            </div>
            <div className='field'>
              <input className='button is-fullwidth is-danger' type='submit' value='Login' />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login