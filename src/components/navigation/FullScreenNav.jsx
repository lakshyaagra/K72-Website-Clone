import React, { useContext, useRef } from 'react'
import project_image_1 from '../../images/project-1-image.png'
import project_image_2 from '../../images/project-2-image.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { NavbarContext } from '../../context/NavContext'

const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)
    console.log("FullScreenNav navOpen:", navOpen);

    const fullScreenRef = useRef(null)

    
    function gsapAnimation(){  
        const timeline=gsap.timeline()
        timeline.to('.fullscreennav',{
            display:'block',
        })
        timeline.to('.stair',{
            delay:0.2,
            height:'100%',
            stagger:{
                amount:-0.3
            }
        })
        timeline.to('.link',{
            opacity:1,
            rotateX:0,
            stagger:{
                amount: 0.35
            }
        })
        timeline.to('.navLink',{
            opacity:1,
        })
    }
    function gsapAnimationReverse(){  
        const timeline=gsap.timeline()
        timeline.to('.link',{
            opacity:0,
            rotateX:90,
            stagger:{
                amount: 0.1
            }
        })
        timeline.to('.stair',{
            height:0,
            stagger:{
                amount:0.1
            }
        })
        timeline.to('.navLink',{
            opacity:0,
        })
        timeline.to('.fullscreennav',{
            display:'none',
        })
    }
    useGSAP(function(){
        if(navOpen){
            gsapAnimation()
        }
        else{
            gsapAnimationReverse()
        }
    },[navOpen])

    
  return (
    <div id='fullscreennav' ref={fullScreenRef} className=' fullscreennav hidden w-full overflow-hidden text-white h-screen absolute z-50'>
        <div className='h-screen w-full fixed '>
            <div className='h-full w-full flex'>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
            </div>
        </div>
        <div ref={fullNavLinksRef} className='relative'>
            <div className='navLink flex w-full items-start justify-between'>
                <div className="p-2.5">
                    <div className="w-26">
                        <svg
                            className="w-full"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 103 44"
                        >
                            <path
                            fill="white"
                            fillRule="evenodd"
                            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div onClick={()=>{
                    setNavOpen(false)
                }} className="w-22 h-22 lg:m-7 m-2 group cursor-pointer relative">
                    <div className="absolute top-1/2 left-1/2 w-0.5 lg:h-[180%] h-[150%] bg-white -translate-x-1/2 -translate-y-1/2 rotate-45 group-hover:bg-[#d3fd50] transition-all duration-300" />
                    <div className="absolute top-1/2 left-1/2 w-0.5 lg:h-[180%] h-[150%] bg-white -translate-x-1/2 -translate-y-1/2 -rotate-45 group-hover:bg-[#d3fd50] transition-all duration-300" />
                </div>
            </div>
        <div className='-p-3 mt-24 lg:mt-0'>
            <div className='link origin-top border-t border-[#808080] relative'>
                <h1 className='font-[font2] text-[14vw] lg:text-[8vw] pt-1.5 tracking-[0.015] text-center uppercase lg:pt-4 leading-[0.8]'>Projets</h1>
                <div className='moveLink absolute top-0 flex bg-[#d3fd50]'>
                    <div className='moveX flex text-black items-center' >
                        <h2 className='whitespace-nowrap font-[font2] text-[14vw] lg:text-[8vw] tracking-[0.015] text-center uppercase pt-1.5 lg:pt-4 leading-[0.8]'>Pour Tout Voir</h2>
                        <img className='h-10 lg:h-20 lg:w-62 w-33 shrink-0 object-cover rounded-full' src={project_image_1} alt="" />
                        <h2 className='whitespace-nowrap font-[font2] text-[14vw] lg:text-[8vw] tracking-[0.015] text-center uppercase pt-1.5 lg:pt-4 leading-[0.8]'>Pour Tout Voir</h2>
                        <img className='h-10 lg:h-20 lg:w-62 w-33 shrink-0 object-cover rounded-full' src={project_image_2} alt="" />
                    </div>
                    <div className='moveX flex text-black items-center' >
                        <h2 className='whitespace-nowrap font-[font2] text-[14vw] lg:text-[8vw] tracking-[0.015] text-center uppercase pt-1.5 lg:pt-4 leading-[0.8]'>Pour Tout Voir</h2>
                        <img className='h-10 lg:h-20 lg:w-62 w-33 shrink-0 object-cover rounded-full' src={project_image_1} alt="" />
                        <h2 className='whitespace-nowrap font-[font2] text-[14vw] lg:text-[8vw] tracking-[0.015] text-center uppercase pt-1.5 lg:pt-4 leading-[0.8]'>Pour Tout Voir</h2>
                        <img className='h-10 lg:h-20 lg:w-62 w-33 shrink-0 object-cover rounded-full' src={project_image_2} alt="" />
                    </div>
                </div>
            </div>
            <div className='link origin-top border-t border-[#808080] relative'>
                <h1 className='font-[font2] text-[14vw] lg:text-[8vw] pt-1.5 tracking-[0.015] text-center uppercase lg:pt-4 leading-[0.8]'>Agence</h1>
                <div className='moveLink absolute top-0 flex bg-[#d3fd50]'>
                    <div className='moveX flex text-black items-center' >
                        <h2 className='whitespace-nowrap font-[font2] text-[14vw] lg:text-[8vw] tracking-[0.015] text-center uppercase pt-1.5 lg:pt-4 leading-[0.8]'>Pour Tout Savoir</h2>
                        <img className='h-10 lg:h-20 lg:w-62 w-33 shrink-0 object-cover rounded-full' src={project_image_1} alt="" />
                        <h2 className='whitespace-nowrap font-[font2] text-[14vw] lg:text-[8vw] tracking-[0.015] text-center uppercase pt-1.5 lg:pt-4 leading-[0.8]'>Pour Tout Savoir</h2>
                        <img className='h-10 lg:h-20 lg:w-62 w-33 shrink-0 object-cover rounded-full' src={project_image_2} alt="" />
                    </div>
                    <div className='moveX flex text-black items-center' >
                        <h2 className='whitespace-nowrap font-[font2] text-[14vw] lg:text-[8vw] tracking-[0.015] text-center uppercase pt-1.5 lg:pt-4 leading-[0.8]'>Pour Tout Savoir</h2>
                        <img className='h-10 lg:h-20 lg:w-62 w-33 shrink-0 object-cover rounded-full' src={project_image_1} alt="" />
                        <h2 className='whitespace-nowrap font-[font2] text-[14vw] lg:text-[8vw] tracking-[0.015] text-center uppercase pt-1.5 lg:pt-4 leading-[0.8]'>Pour Tout Savoir</h2>
                        <img className='h-10 lg:h-20 lg:w-62 w-33 shrink-0 object-cover rounded-full' src={project_image_2} alt="" />
                    </div>
                </div>
            </div>
            <div className='link origin-top border-t border-[#808080] relative'>
                <h1 className='font-[font2] text-[14vw] lg:text-[8vw] pt-1.5 tracking-[0.015] text-center uppercase lg:pt-4 leading-[0.8]'>Contact</h1>
                <div className='moveLink absolute top-0 flex bg-[#d3fd50]'>
                    <div className='moveX flex text-black items-center' >
                        <h2 className='whitespace-nowrap font-[font2] text-[14vw] lg:text-[8vw] tracking-[0.015] text-center uppercase pt-1.5 lg:pt-4 leading-[0.8]'>Pour Envoyer UN FAX</h2>
                        <img className='h-10 lg:h-20 lg:w-62 w-33 shrink-0 object-cover rounded-full' src={project_image_1} alt="" />
                        <h2 className='whitespace-nowrap font-[font2] text-[14vw] lg:text-[8vw] tracking-[0.015] text-center uppercase pt-1.5 lg:pt-4 leading-[0.8]'>Pour Envoyer UN FAX</h2>
                        <img className='h-10 lg:h-20 lg:w-62 w-33 shrink-0 object-cover rounded-full' src={project_image_2} alt="" />
                    </div>
                    <div className='moveX flex text-black items-center' >
                        <h2 className='whitespace-nowrap font-[font2] text-[14vw] lg:text-[8vw] tracking-[0.015] text-center uppercase pt-1.5 lg:pt-4 leading-[0.8]'>Pour Envoyer UN FAX</h2>
                        <img className='h-10 lg:h-20 lg:w-62 w-33 shrink-0 object-cover rounded-full' src={project_image_1} alt="" />
                        <h2 className='whitespace-nowrap font-[font2] text-[14vw] lg:text-[8vw] tracking-[0.015] text-center uppercase pt-1.5 lg:pt-4 leading-[0.8]'>Pour Envoyer UN FAX</h2>
                        <img className='h-10 lg:h-20 lg:w-62 w-33 shrink-0 object-cover rounded-full' src={project_image_2} alt="" />
                    </div>
                </div>
            </div>
            <div className='link origin-top border-y border-[#808080] relative'>
                <h1 className='font-[font2] text-[14vw] lg:text-[8vw] pt-1.5 tracking-[0.015] text-center uppercase lg:pt-4 leading-[0.8]'>Blogue</h1>
                <div className='moveLink absolute top-0 flex bg-[#d3fd50]'>
                    <div className='moveX flex text-black items-center' >
                        <h2 className='whitespace-nowrap font-[font2] text-[14vw] lg:text-[8vw] tracking-[0.015] text-center uppercase pt-1.5 lg:pt-4 leading-[0.8]'>LIRE less Articles</h2>
                        <img className='h-10 lg:h-20 lg:w-62 w-33 shrink-0 object-cover rounded-full' src={project_image_1} alt="" />
                        <h2 className='whitespace-nowrap font-[font2] text-[14vw] lg:text-[8vw] tracking-[0.015] text-center uppercase pt-1.5 lg:pt-4 leading-[0.8]'>LIRE less Articles</h2>
                        <img className='h-10 lg:h-20 lg:w-62 w-33 shrink-0 object-cover rounded-full' src={project_image_2} alt="" />
                    </div>
                    <div className='moveX flex text-black items-center' >
                        <h2 className='whitespace-nowrap font-[font2] text-[14vw] lg:text-[8vw] tracking-[0.015] text-center uppercase pt-1.5 lg:pt-4 leading-[0.8]'>LIRE less Articles</h2>
                        <img className='h-10 lg:h-20 lg:w-62 w-33 shrink-0 object-cover rounded-full' src={project_image_1} alt="" />
                        <h2 className='whitespace-nowrap font-[font2] text-[14vw] lg:text-[8vw] tracking-[0.015] text-center uppercase pt-1.5 lg:pt-4 leading-[0.8]'>LIRE less Articles</h2>
                        <img className='h-10 lg:h-20 lg:w-62 w-33 shrink-0 object-cover rounded-full' src={project_image_2} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FullScreenNav