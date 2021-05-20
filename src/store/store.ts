import { configureStore } from '@reduxjs/toolkit'
import fighterReducer from './fighterSlice'
const store = configureStore({
  reducer: {
    fighterReducer: fighterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
