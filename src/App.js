import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componenets/Pages/Home/Home';
import Footer from './Componenets/Pages/Shared/Footer/Footer';
import Header from './Componenets/Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
