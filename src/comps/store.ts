import { createContext } from 'react'

const initState = {
  first: 'Jack',
  last: 'Jones',
}

export type UserState = typeof initState

const context = createContext<UserState>(initState)

export default context
