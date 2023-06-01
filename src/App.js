import {Routes, Route, Link, Navigate} from 'react-router-dom';

import './App.css';
import './index.css'
import HomePage from './HomePage';
import Layout from './Layout';
import QGBird from './QGBird';
import QGCat from './QGCat';
import QGDog from './QGDog';

function App() {

  return (
    <Routes>
      <Route path='WEBAPP/React/build' element={<Layout/>}>
        <Route path="homepage" element={<HomePage/>} />
        <Route path="second" element={<QGBird/>} />
        <Route path="third" element={<QGCat/>} />
        <Route path="fourth" element={<QGDog/>} />
        <Route path='' element={<Navigate to='homepage'/>}/>
      </Route>
      <Route path='/' element={<Navigate to='/WEBAPP/React/build/homepage'/>}/>
    </Routes>
  );
}

export default App;

function Second(){
  return(
    <Link to='/'>第二頁</Link>
  );
}

