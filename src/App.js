import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


import Nav from './view/layout/nav'
import AppRouters from './view/layout/appRoutes'


const App = () => {
    return (
    <BrowserRouter basename="/react-github-page">
        <Nav />
        <main>
            <AppRouters />
        </main>
    </BrowserRouter>
    )
}

export default App;
