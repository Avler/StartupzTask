import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/home';
import styled from 'styled-components';
import Footer from './components/Footer/Footer';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
export default App;
