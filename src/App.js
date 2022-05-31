import 'swiper/swiper.min.css'
import './resources/bg.jpg'
import './App.css';

import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {AppRoutes} from "./configs";


function App() {
  return (
      <div className='background'>
          <Header/>
      <AppRoutes/>
          <Footer/>
      </div>
  );
}

export default App;
