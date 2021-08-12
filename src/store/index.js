import { configureStore } from "@reduxjs/toolkit"
import uiReducer from './ui-slice'
import searchReducer from './search-slice'
import productReducer from './product-slice'
import authReducer from './auth-slice'

const store = configureStore({
        reducer: {
                ui: uiReducer,
                search: searchReducer,
                product: productReducer,
                auth: authReducer
        }
})

export default store