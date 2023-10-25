import { createSlice } from '@reduxjs/toolkit'

export interface State {
    open: boolean
}

const initialState: State = {
    open: false,
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        toggle: (state) => {
            state.open = !state.open
        }
    },
})

export const { toggle } = drawerSlice.actions

export default drawerSlice.reducer