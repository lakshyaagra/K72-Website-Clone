import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
            <Video/>
        </div>
        <div className='h-screen w-screen relative overflow-hidden pb-5 flex flex-col justify-between'>
            <HomeHeroText/>
            <p className='absolute lg:right-0 right-3 bottom-12 text-white text-left lg:bottom-30 font-semibold lg:text-sm text-[13px] m-4 lg:leading-normal leading-[1.45em] lg:mb-9'>
              <span className='flex justify-end -mb-5.5'>K72 est une agence qui pense</span>
              <br /> chaque action pour nourrir la marque.
              <br /> Demain, dans 5 mois et dans 5 ans. On 
              <br /> cherche la friction qui crée l’étincelle 
              <br /> pour générer de l’émotion. Pour assurer <br />
              une relation honnête, on est sans filtre, <br />
              on dit ce qui doit être dit, on fait ce qui <br /> doit être fait.</p>
            <HomeBottomText/>
        </div>
    </div>
  )
}

export default Home