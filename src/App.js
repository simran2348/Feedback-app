import React, { Fragment } from 'react'
import Header from './Components/Header'
import FeedbackList from './Components/FeedbackList'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'
import AboutPage from './Pages/AboutPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutIconLink from './Components/AboutIconLink'
import { FeedbackProvider } from './Context/FeedbackContext'

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <Fragment>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </Fragment>
              }
            />
            <Route exact path='/about' element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  )
}

export default App
