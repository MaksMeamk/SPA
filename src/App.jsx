import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Authorization from './pages/Authorization';
import Registration from './pages/Registration';
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/authorization" element={<Authorization />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
