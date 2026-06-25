import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stair = (props) => {

    const currentPath=useLocation().pathname

    const stairParentRef = useRef(null)
    const pageRef=useRef(null)

    useGSAP(function(){
        const timeline=gsap.timeline()

        timeline.to(stairParentRef.current,{
            display:'block'
        })
        timeline.from('.stair',{
            height:0,
            stagger:{
                amount:-0.25
            }
        })
        timeline.to('.stair',{
            y:'100%',
            stagger:{
                amount:-0.25
            }
        })
        timeline.to(stairParentRef.current,{
            display:'none',
        })
        timeline.to('.stair',{
            y:'0%',
        })


        gsap.from(pageRef.current,{
            opacity:0 ,
            delay:1.3,
            scale:1.2
        })
    },[currentPath])

  return (
   <div>
        <div ref={stairParentRef} className='h-screen w-full fixed top-0 z-20'>
            <div className='h-full w-full flex'>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
            </div>
        </div>
        <div ref={pageRef}>
            {props.children}
        </div>
   </div>
  )
}

export default Stair