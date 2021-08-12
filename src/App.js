import { createTheme, ThemeProvider } from '@material-ui/core';
import { green, grey } from '@material-ui/core/colors';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ProductsPage from './pages/Products/ProductsPage';
import ProductDetailsPage from './pages/ProductDetails/ProductDetailsPage';
import Checkout from './pages/Checkout/CheckoutPage';
import { IntlProvider } from 'react-intl';
import { CHECKOUT_URL, HOMEPAGE_URL, PRODUCTS_DETAILS_URL, PRODUCTS_URL } from './constants';
import firebase from './firebase/firebase';
import { useDispatch } from 'react-redux';
import { fetchUser } from './store/auth-actions';
import { uiActions } from './store/ui-slice';

const theme = createTheme({
  palette: {
    primary: { main: grey[900] },
    secondary: green
  }
})

function App() {
  const dispatch = useDispatch()

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
            <Route path={PRODUCTS_URL} render={() => <ProductDetailsPage />} />
            <Route path={PRODUCTS_DETAILS_URL} render={() => <ProductsPage />} />
            <Route path={CHECKOUT_URL} render={() => <Checkout />} />
            <Route path={HOMEPAGE_URL} render={() => <Homepage />} />
          </Switch>
        </div>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
