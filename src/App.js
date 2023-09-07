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
import { Air_Calendar } from './Components/Pages/Products/air-calendar/air-calendar';
import { Air_Flat_Sign } from './Components/Pages/Products/air-flat-sign/air-flat-sign';
import { Air_Stenogofer } from './Components/Pages/Products/air-stenogofer/air-stenogofer';
import { Air_Mlm } from './Components/Pages/Products/air-mlm/air-mlm';
import { Air_Grammer_Tok } from './Components/Pages/Products/air-grammer-tok/air-grammer-tok';
import { Contact_Us } from './Components/Pages/ContactUs/contact-us';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/air-marketer" element={<Layout><Air_Marketer /></Layout>} />
      <Route path="/air-sales" element={<Layout><Air_Sales /></Layout>} />
      <Route path="/air-service" element={<Layout><Air_Service /></Layout>} />
      <Route path="/air-operation" element={<Layout><Air_Operation /></Layout>} />
      
      <Route path="/air-calander" element={<Layout><Air_Calendar /></Layout>} />
      <Route path="/air-flat-sign" element={<Layout><Air_Flat_Sign /></Layout>} />
      <Route path="/air-stenogofer" element={<Layout><Air_Stenogofer /></Layout>} />
      <Route path="/air-mlm" element={<Layout><Air_Mlm /></Layout>} />
      <Route path="/air-grammer-tok" element={<Layout><Air_Grammer_Tok /></Layout>} />
      <Route path="/contact-us" element={<Layout><Contact_Us /></Layout>} />
    </Routes>
  );
}

export default App;