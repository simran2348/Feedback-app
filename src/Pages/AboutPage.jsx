import { Link } from 'react-router-dom'
import Card from '../Components/Shared/Card'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>This is a Ract app to leave feedback for a product or service</p>
        <p>version: 1.0.0</p>
        <p>
          <Link to={'/'}>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
