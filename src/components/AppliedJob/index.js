/* eslint-disable arrow-body-style */
/* eslint-disable import/no-extraneous-dependencies */
import {connect} from 'react-redux'
import Header from '../Header'
import './index.css'

const AppliedJob = ({formData}) => (
  <>
    <Header />
    <div className="applied-container">
      <h2 style={{color: '#ffffff'}}>Applied Job Details</h2>
      <p style={{color: '#ffffff'}}>Name: {formData.name}</p>
      <p style={{color: '#ffffff'}}>Email: {formData.email}</p>
      <p style={{color: '#ffffff'}}>
        Cover Letter Note: {formData.coverLetter}
      </p>
      <p style={{color: '#ffffff'}}>
        Resume or Cover Letter: {formData.resume ? formData.resume.name : 'N/A'}
      </p>
    </div>
  </>
)

const mapStateToProps = state => {
  return {
    formData: state,
  }
}

export default connect(mapStateToProps)(AppliedJob)
