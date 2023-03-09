

import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/styles.css';
import Home from './component/Home';
import ItemList from './component/ItemList';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<ItemList />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
