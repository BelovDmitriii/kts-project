import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import ProductPage from '../../pages/ProductPage';
import './App.modules.scss';
import Header from '../Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} >
        </Route>
        <Route path='/elem' element={<ProductPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
