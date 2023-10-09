import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import Skills from '../Skills'
import Header from '../Header'
import './index.css'

class JobItemDetails extends Component {
  state = {jobItemDetails: {}, skills: [], isLoading: false}

  componentDidMount() {
    this.getJobItemDetailsAndSimilarJobsData()
  }

  getJobItemDetailsAndSimilarJobsData = async () => {
    this.setState({isLoading: true})
    const token = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedJobDetails = {
        id: data.job_details.id,
        companyLogoUrl: data.job_details.company_logo_url,
        companyWebsiteUrl: data.job_details.company_website_url,
        employmentType: data.job_details.employment_type,
        jobDescription: data.job_details.job_description,
        packagePerAnnum: data.job_details.package_per_annum,
        location: data.job_details.location,
        rating: data.job_details.rating,
        title: data.job_details.title,
        description: data.job_details.life_at_company.description,
        imageUrl: data.job_details.life_at_company.image_url,
      }

      const updatedSkills = data.job_details.skills.map(eachSkill => ({
        name: eachSkill.name,
        imageUrl: eachSkill.image_url,
      }))

      this.setState({
        jobItemDetails: updatedJobDetails,
        skills: updatedSkills,
        isLoading: false,
      })
    }
  }

  handlerOnApplyJob = () => {
    const {history} = this.props
    history.replace('/apply-job')
  }

  render() {
    const {jobItemDetails, skills, isLoading} = this.state

    return (
      <>
        <Header />
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </div>
        ) : (
          <div className="job-details-container">
            <div className="job-details-card">
              <div className="company-profile-container">
                <img
                  className="company-logo"
                  src={jobItemDetails.companyLogoUrl}
                  alt="company logo"
                />
                <div className="position-rating-container">
                  <h1 className="job-title">{jobItemDetails.title}</h1>
                  <div className="rating-container">
                    <AiFillStar className="star" />
                    <p className="job-rating">{jobItemDetails.rating}</p>
                  </div>
                </div>
              </div>
              <div className="location-emp-type-package-container">
                <div className="location-type-container">
                  <div className="location-container">
                    <MdLocationOn className="location-icon" />
                    <p className="location">{jobItemDetails.location}</p>
                  </div>
                  <div className="employment-type-container">
                    <BsFillBriefcaseFill className="job-type-icon" />
                    <p className="emp-type">{jobItemDetails.employmentType}</p>
                  </div>
                </div>
                <p className="package">{jobItemDetails.packagePerAnnum}</p>
              </div>
              <hr className="line" />
              <div className="description-container">
                <h1 className="description-heading">Description</h1>
              </div>
              <p className="description">{jobItemDetails.jobDescription}</p>
              <h1 className="description-heading">Skills</h1>
              <ul className="skills-list-container">
                {skills.map(eachItem => (
                  <Skills eachItem={eachItem} key={eachItem.name} />
                ))}
              </ul>
              <div className="apply-button-container">
                <button
                  type="button"
                  className="apply-button"
                  onClick={this.handlerOnApplyJob}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default JobItemDetails
