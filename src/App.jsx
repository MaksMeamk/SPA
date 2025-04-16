import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Authorization from './pages/Authorization';
import Registration from './pages/Registration';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Authorization />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          {/*  <PrivateRoute isAuth={true}>
            <Route path="/startSearch" element={<StartSearch />}></Route>
            <Route path="/resultSearch" element={<ResultSearch />}></Route>
          </PrivateRoute> */}
          <Route path="*" element={<p>Страница не найдена</p>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
