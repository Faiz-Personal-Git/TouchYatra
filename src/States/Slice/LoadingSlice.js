import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    refresh: false
}

const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading(state, { payload }) {
            state.loading = payload;
        },
        setRefresh(state, { payload }) {
            state.refresh = !state.refresh;
        }
    }
});

export const { setLoading, setRefresh } = loadingSlice.actions;
export default loadingSlice.reducer;