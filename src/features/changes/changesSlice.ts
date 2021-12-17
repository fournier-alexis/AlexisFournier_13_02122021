import { createSlice } from '@reduxjs/toolkit'

export const changesSlice = createSlice({
    name: 'changes',
    initialState: {
        changes: undefined,
    },
    reducers: {
        setChanges: (state, action) => {
            state.changes = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setChanges } = changesSlice.actions

export default changesSlice.reducer