import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this item feedback 1',
      rating: 9
    },
    {
      id: 2,
      text: 'this item feedback 2',
      rating: 10
    },
    {
      id: 3,
      text: 'this item feedback 3',
      rating: 8
    }
  ])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (item) => {
    item.id = uuidv4()

    setFeedback([item, ...feedback])
  }

  const handleEdit = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        addFeedback,
        handleEdit,
        feedbackEdit
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
