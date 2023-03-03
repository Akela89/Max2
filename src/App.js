import './App.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Info from './components/Info';
import Contacts from './components/Contacts';
import {Routes, Route, Link} from 'react-router-dom';
import HomePage from './components/HomePage';

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

function NotFoundPage() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App;
