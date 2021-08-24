import { createTheme, ThemeProvider } from '@material-ui/core';
import { green, grey } from '@material-ui/core/colors';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ProductsPage from './pages/Products/ProductsPage';
import ProductDetailsPage from './pages/ProductDetails/ProductDetailsPage';
import Checkout from './pages/Checkout/CheckoutPage';

const theme = createTheme({
  palette: {
    primary: { main: grey[900] },
    secondary: green
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route path='/products/:id' render={() => <ProductDetailsPage />} />
          <Route path='/products' render={() => <ProductsPage />} />
          <Route path='/checkout' render={() => <Checkout />} />
          <Route path='/' render={() => <Homepage />} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
