
import HomePage from '../home/homePage'
import ProductsIndexPage from '../products/productsIndexPage'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const Routes = () => {
    return (<>
     <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/products" exact>
                <ProductsIndexPage />
            </Route>
           
        </Switch>
    </>)
}

export default Routes;