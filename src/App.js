import { Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import  Authorization  from './Components/Authorization';
import { Search } from './Components/Search';

function App() {
  return (
  
    <Routes>
      <Route index element={<Authorization />} />
      <Route path='/search' element={<Search />} />
    </Routes>
  
  )
}

export default App;
