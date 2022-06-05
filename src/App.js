import React from 'react';
import './App.css';

import Header from "./components/Header/headerContainer";
import { Footer} from "./components/Footer";
import { AppRoutes} from "./Configs";



function App() {

    return (<>
        <Header/>
          <AppRoutes/>
        <Footer/></>);
}

export default App;
