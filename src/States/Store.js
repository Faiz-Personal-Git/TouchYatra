import { configureStore, Tuple } from '@reduxjs/toolkit'
import { userReducer,loadingReducer } from "./Slice/index"

const store = configureStore({
    reducer: {
        user: userReducer,
        loading: loadingReducer,
    }
});

export default store;