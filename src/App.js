import React from 'react';
import './App.css';

import Header from "./components/header/headerContainer";
import { Footer} from "./components/footer";
import { AppRoutes} from "./Configs";



function App() {

    return (<>
        <Header/>
          <AppRoutes/>
        <Footer/></>);
}

export default App;
