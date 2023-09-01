import logo from './logo.svg';
import './App.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Layout } from './Components/Layout';
import { Home } from './Components/Pages/Home/Home';

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
