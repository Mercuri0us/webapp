import {Routes, Route, Link, Navigate} from 'react-router-dom';

import './App.css';
import './index.css'
import HomePage from './HomePage';
import Layout from './Layout';
import QGBird from './QGBird';

function App() {

  return (
    <Routes>
      <Route path='WEBAPP/React/build' element={<Layout/>}>
        <Route path="homepage" element={<HomePage/>} />
        <Route path="quickguide" element={<QGBird/>} />
        <Route path='' element={<Navigate to='homepage'/>}/>
      </Route>
      <Route path='/' element={<Navigate to='/WEBAPP/React/build/homepage'/>}/>
    </Routes>
  );
}

export default App;


