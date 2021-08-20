import { createTheme, ThemeProvider } from '@material-ui/core';
import { green, grey } from '@material-ui/core/colors';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ProductsPage from './pages/Products/ProductsPage';

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
          <Route path='/products' render={() => <ProductsPage />} />
          <Route path='/' render={() => <Homepage />} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
