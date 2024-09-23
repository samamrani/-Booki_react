import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState:{
        selectedFilter: null,
    },
    reducers: {
        setFilter:(state, action) => {
            state.selectedFilter = action.payload;
        }
    }
})

export const { setFilter} = filterSlice.actions;
export default filterSlice.reducer;