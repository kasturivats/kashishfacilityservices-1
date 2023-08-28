import './App.css';
import About from './components/About';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Separator from './components/Separator';
import Service from './components/Services';

function App() {
  return (
    <>
    <Header/>
    <About/>
    <Separator/>
    <Service/>
    <Separator/>
    {/* <Service/> */}

    {/* <Gallery/> */}
    <Gallery/>

  
    </>
  );
}

export default App;
