import './App.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Info from './components/Info';
import Contacts from './components/Contacts';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import Forms from './components/Forms';
import EditableList from './components/EditebleList';
import ApiList from './components/ApiList';
import { StateProvider } from "./components/StateContext";




function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Info' element={<Info/>}/>
          <Route path='/Contacts' element={<Contacts/>}/>
          <Route path='/Forms' element={
            <StateProvider>
              <Forms />
            </StateProvider>  
          }/>
          <Route path='/EditableList' element={<EditableList/>}/>
          <Route path='/ApiList' element={<ApiList/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
      </Routes> 
    </div>
  );
}


export default App;
