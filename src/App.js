import './App.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Info from './components/Info';
import Contacts from './components/Contacts';
import {Routes, Route, Link} from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';


function App() {
  return (
    <div className="App">
   <Header/>

    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Info' element={<Info/>}/>
        <Route path='/Contacts' element={<Contacts/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes> 
    </div>
 
  );

}


export default App;
