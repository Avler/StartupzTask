import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/home';
import styled from 'styled-components';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}
export default App;
