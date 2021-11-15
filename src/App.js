import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter, Route, Switch} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { CartScreen } from './components/CartScreen/CartScreen';
import { UIProvider } from './context/UIContext';
import { Checkout } from './components/Checkout/Checkout';
import { PaginaNoEncontrada } from "./components/PaginaNoEncontrada/PaginaNoEncontrada";

function App() {
  

  return (
    <div className="App">
        
          
        <>
        <UIProvider>
        <CartProvider>
      <BrowserRouter>
        <Layout>
        <Switch>
          <Route exact path="/">
              <ItemListContainer />
          </Route>

          <Route exact path="/category/:categoryId">
              <ItemListContainer  />
          </Route>

          <Route exact path="/item/:itemId">
              <ItemDetailContainer />
          </Route>

          
          <Route exact path="/cart">
              <CartScreen/>
          </Route>

          <Route exact path="/checkout">
              <Checkout/>
          </Route>

          <Route path="*">
              <PaginaNoEncontrada/>
          </Route>
          
        </Switch>
        </Layout>
      </BrowserRouter>
      </CartProvider>
      </UIProvider>
    </>
            
        

    </div>
  );
}

export default App;
