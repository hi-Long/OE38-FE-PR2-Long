import { configureStore } from "@reduxjs/toolkit"
import uiReducer from './ui-slice'
import searchReducer from './search-slice'
import productReducer from './product-slice'

const store = configureStore({
        reducer: {
                ui: uiReducer,
                search: searchReducer,
                product: productReducer
        }
})

export default store