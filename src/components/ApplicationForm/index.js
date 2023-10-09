/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import {useState} from 'react'
import {connect} from 'react-redux'
import submitForm from '../../Action'
import Header from '../Header'
import './index.css'

const ApplicationForm = props => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [coverLetter, setCoverLetter] = useState('')
  const [resume, setResume] = useState(null)

  console.log(name, email, coverLetter, resume)

  const onSubmitHandler = e => {
    e.preventDefault()

    const formData = {
      name,
      email,
      coverLetter,
      resume,
    }

    const {submitForm} = props

    submitForm(formData)

    const {history} = props
    history.replace('/applied')

    setName('')
    setEmail('')
    setCoverLetter('')
    setResume(null)
  }
  return (
    <>
      <Header />
      <div className="application-container">
        <form className="application-form" onSubmit={onSubmitHandler}>
          <div className="name-container">
            <label htmlFor="name" className="application-label">
              Name
            </label>
            <br />
            <input
              type="text"
              id="name"
              className="name-input"
              placeholder="Name"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="name-container">
            <label htmlFor="email" className="application-label">
              Email
            </label>
            <br />
            <input
              type="text"
              id="email"
              className="name-input"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="name-container">
            <label htmlFor="coverLetter" className="application-label">
              Cover Letter Note
            </label>
            <br />
            <input
              type="text"
              id="coverLetter"
              className="name-input"
              placeholder="Cover Letter Note"
              onChange={e => setCoverLetter(e.target.value)}
              value={coverLetter}
            />
          </div>
          <div className="name-container">
            <label htmlFor="resume" className="application-label">
              Resume or Cover Letter
            </label>
            <br />
            <input
              type="file"
              id="resume"
              className="name-input"
              placeholder="Resume or Cover Letter"
              onChange={e => e.target.files[0]}
            />
          </div>
          <div className="submit-button-container">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

const mapDispatchToProps = {
  submitForm,
}

export default connect(null, mapDispatchToProps)(ApplicationForm)
