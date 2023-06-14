import React from 'react'
import background from './images/Background.jpg';
import { Header, Navbar, Spicy, Galleri, Favorit, Footer } from "./components";

const App = () => (
  <div>
    <div className='relative h-[80vh] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${background})` }}>
      <Header />
    </div>
    <Navbar />
    <div className='max-w-[1000px] m-auto p-2'>
      <Spicy />
      <Galleri />
      <Favorit />
    </div>
    <Footer />
  </div>
)  

export default App