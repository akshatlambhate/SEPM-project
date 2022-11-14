import logo from './logo.svg';
import Reac from 'react';
import './App.css';
import Authentication from './components/Authentication';
import SelectEvent from '../src/components/SelectEvent';
import ChooseCurrent from './components/ChooseCurrent';
import ManageCurrent from './components/ManageCurrent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './components/Layout/Layout';
import About from './components/About';
import background from './components/background.json'
import dancing from './components/dancing.json'
import Lottie from 'lottie-react'
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
  // <BrowserRouter>
  // <Layout>
  //   <Routes>
  //     <Route path="/" element={<Authentication />}>
  //       <Route index element={< Authentication/>} />
  //       <Route path="about" element={<About />} />
  //       <Route path="selectEvent" element={<SelectEvent />} />
  //       <Route path="chooseCurrent" element={<ChooseCurrent />} />
  //       <Route path="manageCurrent" element={<ManageCurrent />} />
  //       <Route path="about" element={<About />} />
  //       <Route path="*" element={<Authentication />} />
  //     </Route>
  //   </Routes>
  //   </Layout>
  // </BrowserRouter>
    <div className="App">
      <Layout>
        {/* <Authentication /> */}
   {/* <SelectEvent /> */}
   {/* <ChooseCurrent />  */}
     <About />
     {/* <ManageCurrent /> */}
      </Layout>
    
       
    </div>
  );
}

export default App;
