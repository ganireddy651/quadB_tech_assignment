import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import JobItemDetails from './components/JobItemDetails'
import LogIn from './components/LogIn'
import NotFound from './components/NotFound'
import ApplicationForm from './components/ApplicationForm'
import AppliedJob from './components/AppliedJob'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LogIn} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
      <ProtectedRoute exact path="/apply-job" component={ApplicationForm} />
      <ProtectedRoute exact path="/applied" component={AppliedJob} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
