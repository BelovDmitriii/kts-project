import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import ProductPage from '../../pages/ProductPage';
import './App.modules.scss';
import Header from '../Header';
import NotFoundPage from '../../pages/NotFoundPage';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/:id' element={<ProductPage />}/>
        <Route path='*' element={<NotFoundPage type='page' />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
