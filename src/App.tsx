import { Route, Routes } from 'react-router-dom';

import './App.scss';
import './styles/main.scss';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage/HomePage';

const App = () => (
  <div className="content">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<HomePage />} />
        <Route path=":category" element={<CategoryPage />} />
      </Route>
    </Routes>
  </div>
);

export default App;
