import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../pages/postsSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
})