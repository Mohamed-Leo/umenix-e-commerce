import Hero from "./components/home pages/Hero";
import Layout from "./components/layouts/Layout";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { useEffect } from "react";


function App() {
  useEffect(()=>{
    AOS.init(
     {
       offset:100,
       duraton:800,
       easing:"ease-in-sine",
       delay:100,
     }
    )
    AOS.refresh();
   },[]);
  return (
    <>
      <Layout />
      <Hero/>
    </>
  )
}

export default App;
