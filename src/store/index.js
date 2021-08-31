import { configureStore } from "@reduxjs/toolkit"
import uiReducer from './ui-slice'
import searchReducer from './search-slice'
import productReducer from './product-slice'
import authReducer from './auth-slice'
import cartReducer from './cart-slice'
import checkoutReducer from './checkout-slice'
import accountReducer from './account-slice'

const store = configureStore({
        reducer: {
                ui: uiReducer,
                search: searchReducer,
                product: productReducer,
                auth: authReducer,
                cart: cartReducer,
                checkout: checkoutReducer,
                account: accountReducer
        }
})

export default store