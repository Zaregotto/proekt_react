import React from 'react';
import './App.css';
import './resources/bg.jpg'
import Header from "./components/header/HeaderContainer";
import { Footer} from "./components/footer/Footer";
import { AppRoutes} from "./configs/Routes";

function App() {
    return (<>
        <Header/>
          <AppRoutes/>
        <Footer/></>);
}

export default App;
