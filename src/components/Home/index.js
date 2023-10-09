import {useState} from 'react'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import JobsList from '../JobsList'
import './index.css'

const Home = () => {
  const [searchInput, setSearchInput] = useState('')
  const [jobs, setJobs] = useState([])

  const handleSearch = e => {
    setSearchInput(e.target.value)
  }

  const onSearchJob = async () => {
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/jobs?search=${searchInput}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    setSearchInput('')

    if (response.ok === true) {
      const updatedData = data.jobs.map(eachJob => ({
        id: eachJob.id,
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        jobDescription: eachJob.job_description,
        packagePerAnnum: eachJob.package_per_annum,
        location: eachJob.location,
        rating: eachJob.rating,
        title: eachJob.title,
      }))
      setJobs(updatedData)
    }
  }

  return (
    <>
      <Header />
      <div className="app-home">
        <h3 className="home-heading">Search For Jobs</h3>
        <div className="search-container">
          <input
            type="search"
            placeholder="Search"
            className="search-input"
            onChange={handleSearch}
            value={searchInput}
          />
          <button type="button" className="search-button" onClick={onSearchJob}>
            <BsSearch className="search-icon" />
          </button>
        </div>
        <ul className="jobs-list-container">
          {jobs.map(eachJobDetails => (
            <JobsList eachJobDetails={eachJobDetails} key={eachJobDetails.id} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home
