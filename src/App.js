import { createTheme, ThemeProvider } from '@material-ui/core';
import { green, grey } from '@material-ui/core/colors';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ProductsPage from './pages/Products/ProductsPage';
import ProductDetailsPage from './pages/ProductDetails/ProductDetailsPage';
import Checkout from './pages/Checkout/CheckoutPage';
import { IntlProvider } from 'react-intl';
import { ACCOUNT_URL, CHECKOUT_URL, HOMEPAGE_URL, PRODUCTS_DETAILS_URL, PRODUCTS_URL } from './constants';
import firebase from './firebase/firebase';
import AccountPage from './pages/Account/AccountPage';
import { useDispatch } from 'react-redux';
import { fetchUser } from './store/auth-actions';
import { uiActions } from './store/ui-slice';
import useLocalStorage from './hooks/useLocalStorage';

const theme = createTheme({
  palette: {
    primary: { main: grey[900] },
    secondary: green
  }
})

function App() {
  const dispatch = useDispatch()
  const [localStorageCart, setLocalStorageCart] = useLocalStorage('cart', { products: [], total: 0 })

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(fetchUser(user.uid))
    } else {
      dispatch(uiActions.setUserFetching(false))
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale="vi" defaultLocale="vi">
        <div className="App">
          <Switch>
            <Route path={PRODUCTS_DETAILS_URL} render={() =>
              <ProductDetailsPage
                localStorageCart={localStorageCart}
                setLocalStorageCart={setLocalStorageCart}
              />} />

            <Route path={PRODUCTS_URL} render={() =>
              <ProductsPage
                localStorageCart={localStorageCart}
                setLocalStorageCart={setLocalStorageCart}
              />} />

            <Route path={CHECKOUT_URL} render={() =>
              <Checkout
                localStorageCart={localStorageCart}
                setLocalStorageCart={setLocalStorageCart} />} />

            <Route path={ACCOUNT_URL} render={() => <AccountPage />} />

            <Route path={HOMEPAGE_URL} render={() => <Homepage
              localStorageCart={localStorageCart}
              setLocalStorageCart={setLocalStorageCart} />} />
          </Switch>
        </div>
      </IntlProvider>
    </ThemeProvider >
  );
}

export default App;
