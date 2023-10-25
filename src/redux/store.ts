import { configureStore } from '@reduxjs/toolkit'
import drawer from './slices/drawer'

export const store = configureStore({
  reducer: {
    drawer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch