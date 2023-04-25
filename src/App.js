import {Routes, Route, useLocation} from 'react-router-dom';
import {TransitionGroup,  CSSTransition } from 'react-transition-group';

import './App.css';
import './index.css'
import HomePage from './HomePage';

function App() {
  const location = useLocation();

  return (
      <TransitionGroup component={null}>
        <CSSTransition
          timeout={2000}
          classNames='fade'
          key={location.key}
        >
          <Routes location={location}>
            {/* <Route element={<AnimatedLayout/>}> */}
              <Route path="/" element={<HomePage/>} />
              <Route path="/second" element={<h2>第二頁</h2>} />
            {/* </Route> */}
          </Routes>
        </CSSTransition>  
      </TransitionGroup>
  );
}

export default App;
