import logo from './logo.svg';
import './App.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Layout } from './Components/Layout';
import { Home } from './Components/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Air_Marketer } from './Components/Pages/Products/air-marketer/air-marketer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/air-marketer" element={<Layout><Air_Marketer /></Layout>} />
    </Routes>
  );
}

export default App;