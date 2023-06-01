import {Routes, Route, Navigate} from 'react-router-dom';

import './App.css';
import './index.css'
import HomePage, {QuickGuide} from './HomePage';
import Layout from './Layout';
import QGBird from './QGBird';
import QGCat from './QGCat';
import QGDog from './QGDog';

function App() {

  return (
    <Routes>
      <Route path='WEBAPP/React/build' element={<Layout/>}>
        <Route path="homepage" element={<HomePage/>} />
        <Route path="quickguide">
          <Route index element={<QuickGuide/>}/>
          <Route path="bird" element={<QGBird/>} />
          <Route path="cat" element={<QGCat/>} />
          <Route path="dog" element={<QGDog/>} />
        </Route>
        <Route path='' element={<Navigate to='homepage'/>}/>
      </Route>
      <Route path='/' element={<Navigate to='/WEBAPP/React/build/homepage'/>}/>
    </Routes>
  );
}

export default App;
