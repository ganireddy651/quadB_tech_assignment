/* eslint-disable arrow-body-style */
/* eslint-disable import/no-extraneous-dependencies */
import {connect} from 'react-redux'
import Header from '../Header'
import './index.css'

const AppliedJob = ({formData, jobItemDetails}) => {
  console.log(formData, jobItemDetails)
  return (
    <>
      <Header />
      <div className="applied-container">
        <div className="applied-job-card">
          <h2 style={{color: '#ffffff'}}>Applied Job Details</h2>
          <p style={{color: '#ffffff'}}>Applied For: {jobItemDetails}</p>
          <p style={{color: '#ffffff'}}>Name: {formData.name}</p>
          <p style={{color: '#ffffff'}}>Email: {formData.email}</p>
          <p style={{color: '#ffffff'}}>
            Cover Letter Note: {formData.coverLetter}
          </p>
          {/* <p>
        Resume or Cover Letter:{' '}
        {formData && formData.resume ? formData.resume.name : 'N/A'}
      </p> */}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  formData: state.formData,
  jobItemDetails: state.appliedJob,
})

export default connect(mapStateToProps)(AppliedJob)
