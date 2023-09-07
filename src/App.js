import logo from './logo.svg';
import './App.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Layout } from './Components/Layout';
import { Home } from './Components/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Air_Marketer } from './Components/Pages/Products/air-marketer/air-marketer';
import { Air_Sales } from './Components/Pages/Products/air-sales/air-sales';
import { Air_Service } from './Components/Pages/Products/air-services/air-service';
import { Air_Operation } from './Components/Pages/Products/air-operations/air-operation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/air-marketer" element={<Layout><Air_Marketer /></Layout>} />
      <Route path="/air-sales" element={<Layout><Air_Sales /></Layout>} />
      <Route path="/air-service" element={<Layout><Air_Service /></Layout>} />
      <Route path="/air-operation" element={<Layout><Air_Operation /></Layout>} />
    </Routes>
  );
}

export default App;