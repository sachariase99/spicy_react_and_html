import React from 'react'
import fb from '../images/Some-Facebook.png'
import tw from '../images/SoMe-Twitter.png'
import yt from '../images/SoMe-Youtube.png'

const Footer = () => {
    return (
        <footer className='bg-background pb-5 mt-8'>
            <section className='max-w-[1000px] m-auto grid md:grid-cols-2'>
                <article>
                    <h3 className='text-blue'>Kontakt Spicy:</h3>
                    <p className='text-[#dddddd] text-[1.7rem]'>SPICY <span className='text-lightred'>Hot</span>Company</p>
                    <p className='text-[#dddddd] text-[1.7rem]'>Boulevarden 39</p>
                    <p className='text-[#dddddd] text-[1.7rem]'>9000 Aalborg</p>
                    <p className='text-darkblue text-[1.7rem]'>Send os en mail:</p>
                    <p className='text-darkblue text-[1.7rem]'>Ring til os:</p>
                    <div className='flex'>
                        <img className='w-[10%] mr-3' src={fb} alt="" />
                        <img className='w-[10%] mr-3' src={tw} alt="" />
                        <img className='w-[10%]' src={yt} alt="" />
                    </div>
                </article>
                <article>
                    <h3 className='text-blue'>Google Maps:</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2170.4592382643536!2d9.913872460159405!3d57.04367940569943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464932f3bcda26e3%3A0xcd44aae1c87a63c5!2sBoulevarden%2039%2C%209000%20Aalborg!5e0!3m2!1sda!2sdk!4v1686641313271!5m2!1sda!2sdk" title='map' width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='p-5 pb-0'></iframe>
                </article>
            </section>
        </footer>
    )
}

export default Footer
