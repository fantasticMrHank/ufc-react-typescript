import { RootState } from './store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fighterInterface } from '../components/AddFighter'
const weightClassURL = process.env.REACT_APP_WEIGHTCLASS_API!
const fighterURL = process.env.REACT_APP_FIGHTER_API!

export const getWeightClasses = createAsyncThunk('fighters/getWeightClasses', async () => {
  return fetch(weightClassURL).then((res) => res.json())
})
export const addWeightClass = createAsyncThunk(
  'fighters/addWeightClass',
  async (weight: string, { dispatch }) => {
    return fetch(weightClassURL, {
      method: 'POST',
      body: JSON.stringify({ name: weight }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      res.json().then((data) => {
        dispatch(toggleNeedState(data))
      })
    })
  }
)

export const deleteWeightClass = createAsyncThunk(
  'fighters/deleteWeightClasses',
  async (id: string, { dispatch }) => {
    return fetch(weightClassURL + '/' + id, {
      method: 'delete',
    })
      .then((res) => {
        if (res.status == 404) {
          Promise.reject({ err: res.status })
        }
        res.json()
      })
      .then(() => {
        dispatch(removeWeightClass(id))
      })
  }
)
export const getFightersByWeightClass = createAsyncThunk(
  'fighters/getFightersByWeightClass',
  async (id: string, thunkAPI) => {
    return fetch(`${fighterURL}?weightclass=${id}`).then((res) => res.json())
  }
)
export const addFighter = createAsyncThunk(
  'fighters/addFighter',
  async (fighter: fighterInterface, { dispatch }) => {
    return fetch(fighterURL, {
      method: 'POST',
      body: JSON.stringify(fighter),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(() => dispatch(checkWeightClass(fighter.weightclass)))
  }
)
export const deleteFighter = createAsyncThunk(
  'fighters/deleteFighter',
  async (id: string, { dispatch }) => {
    return fetch(fighterURL + id, {
      method: 'delete',
    })
      .then((res) => res.json())
      .then(() => {
        dispatch(removeThisFighter(id))
      })
  }
)

type fighterState = {
  weightclasses: {
    name: string
    id: number
  }[]
  currentWeightClass: {
    name: string
    id: number
  }
  currentFighterGroup: {
    id: number
    name: string
    weightclass: string
    record: string
    champion: boolean
    ranking: number
    pic: string
  }[]
  needNewWeightClass: boolean
  newWeightClass: string
}

const initialState: fighterState = {
  weightclasses: [],
  currentFighterGroup: [],
  needNewWeightClass: false,
  newWeightClass: '',
  currentWeightClass: { id: 0, name: '' },
}

export const fighterSlice = createSlice({
  name: 'fighterSlice',
  initialState,
  reducers: {
    removeThisFighter: (state, { payload }) => {
      const newID = parseInt(payload)
      state.currentFighterGroup = state.currentFighterGroup.filter((f) => f.id !== newID)
    },
    setCurrentWeightClassId: (state, { payload }) => {
      state.weightclasses.map((w) => {
        if (w.name == payload) {
          state.currentWeightClass = w
        }
      })
    },
    checkWeightClass: (state, { payload }) => {
      let newWeightClass = ''

      state.weightclasses.filter((w) => {
        if (w.name === payload) {
          newWeightClass = payload
        }
      })

      if (newWeightClass == '') {
        state.newWeightClass = payload
        state.needNewWeightClass = true
      } else {
        state.newWeightClass = ''
        state.needNewWeightClass = false
      }

      window.location.replace(`/weightclasses/${payload}`)
    },
    toggleNeedState: (state, { payload }) => {
      state.newWeightClass = ''
      state.needNewWeightClass = false
      state.weightclasses.push(payload)
    },
    removeWeightClass: (state, { payload }) => {
      state.weightclasses = state.weightclasses.filter((w) => w.id !== parseInt(payload))

      window.location.replace(`/add`)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeightClasses.fulfilled, (state, { payload }) => {
        state.weightclasses = payload
      })
      .addCase(getFightersByWeightClass.fulfilled, (state, { payload }) => {
        console.log('did this get reset??')
        state.currentFighterGroup = payload
        console.log('finish setting the group members')
      })
  },
})

export const {
  removeThisFighter,
  checkWeightClass,
  toggleNeedState,
  setCurrentWeightClassId,
  removeWeightClass,
} = fighterSlice.actions
export const currentWeightClasses = (state: RootState) => state.fighterReducer.weightclasses
export const currentGroup = (state: RootState) => state.fighterReducer.currentFighterGroup
export const needNewWeightClass = (state: RootState) => state.fighterReducer.needNewWeightClass
export const newWeightClass = (state: RootState) => state.fighterReducer.newWeightClass
export const currentWeightClass = (state: RootState) => state.fighterReducer.currentWeightClass
export default fighterSlice.reducer
