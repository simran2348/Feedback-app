import Card from './Shared/Card'
import { useState, useEffect } from 'react'
import Button from './Shared/Button'
import RatingSelect from './RatingSelect'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackForm() {
  const { addFeedback, feedbackEdit } = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit) {
      const { item } = feedbackEdit
      setBtnDisabled(false)
      setText(item.text)
      setRating(item.rating)
    }
  }, [feedbackEdit])

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [rating, setRating] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (event) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Text must be atleast 10 characters')
    } else {
      setMessage('')
      setBtnDisabled(false)
    }
    setText(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating
      }

      addFeedback(newFeedback)
      setText('')
      setBtnDisabled(true)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type={'text'}
            placeholder='Write a review'
            value={text}
            onChange={(e) => handleTextChange(e)}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
