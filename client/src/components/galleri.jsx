import React from 'react'
import chili1 from '../images/Product/Chili-01.jpg'
import chili2 from '../images/Product/Chili-02.jpg'
import chili3 from '../images/Product/Chili-03.jpg'
import chili4 from '../images/Product/Chili-04.jpg'
import chili5 from '../images/Product/Chili-05.jpg'
import chili6 from '../images/Product/Chili-06.jpg'

const Galleri = () => {
  return (
    <section id='gallery'>
      <h3>Galleri</h3>
      <article className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-8'>
        <img src={chili1} alt="Chili" />
        <img src={chili2} alt="Chili" />
        <img src={chili3} alt="Chili" />
        <img src={chili4} alt="Chili" />
        <img src={chili5} alt="Chili" />
        <img src={chili6} alt="Chili" />
      </article>
    </section>
  )
}

export default Galleri
