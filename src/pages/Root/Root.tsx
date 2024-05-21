import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage';
import ProductPage from '../ProductPage';
import Header from '../../components/Header';
import NotFoundPage from '../NotFoundPage';
import { ROUTES } from 'config/routes';
import './Root.modules.scss';

const Root:React.FC = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.root} element={<MainPage />} />
        <Route path={ROUTES.product} element={<ProductPage />}/>
        <Route path={ROUTES.notFound} element={<NotFoundPage type="page" />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Root;
