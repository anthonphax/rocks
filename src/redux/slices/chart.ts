import { createSlice } from '@reduxjs/toolkit'

export interface State {
    data: object[]
}

const initialState: State = {
    data: []
}

export const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {
        setData(state, { payload }) {
            state.data = payload
        },
        pushData(state, { payload }) {
            state.data.push(payload)
        }
    },
})

export const { pushData, setData } = chartSlice.actions

export default chartSlice.reducer