import CAMILLE from "../images/CAMILLE.jpg";
import Carl from "../images/Carl.jpg";
import Chantal from "../images/Chantal.jpg";
import Isa from "../images/Isa.jpg";
import joel from "../images/joel.jpg";
import MEGGIE from "../images/MEGGIE.jpg";
import MEL from "../images/MEL.jpg";
import Michele from "../images/Michele.jpg";
import Olivier from "../images/Olivier.jpg";
import PLP from "../images/PLP.jpg";
import React, { useRef } from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {

  const imageDivRef = useRef(null) //iski current value image wale div m h
  const imageRef=useRef(null)

  const imageArray = [
    Carl,
    Olivier,
    CAMILLE,
    Chantal,
    Isa,
    joel,
    MEGGIE,
    MEL,
    Michele,   
    Michele,
  ];
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function(){
    gsap.to(imageDivRef.current,{             //image wala div jo hai neeche wo target ho gya hai pura
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:'top -10%',
        end:'top -208%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub:1, //smooth scrubing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh:true,

        onUpdate:(elem)=>{
          let imageIdx
          if(elem.progress<1){
            imageIdx=Math.floor(elem.progress*imageArray.length);
          }
          else{
            imageIdx=imageArray.length-1
          }
          imageRef.current.src=imageArray[imageIdx]
        }
      }
    })           
  })

  return (
    <div className="parent">
      <div id="page1" className="py-1">
        <div ref={imageDivRef} className="absolute lg:top-36 top-23 lg:left-[30.5vw] left-[30.5vw] overflow-hidden lg:rounded-[21px] rounded-xl lg:h-[20vw] h-[28vw] lg:w-[14.8vw] w-[20vw] ">
          <img ref={imageRef} className="h-full w-full object-cover" loading="lazy" src={Carl} alt="" />
        </div>
        <div className="relative font-[font2]">
          <div className="lg:mt-[55vh] mt-[28vh]">
            <h1 className="lg:text-[19.5vw] text-[18vw] text-center uppercase leading-[17vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="lg:pl-[39.8%] pl-2 mt-10 lg:mt-0">
            <p className="lg:text-[57px] pt-14 lg:pt-0 text-[21px] leading-[1.05] lg:leading-14">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            Notre curiosité <br />
            nourrit notre créativité. On <br />
            reste humbles et on dit non aux <br />
            gros egos, même le vôtre. Une <br />
            marque est vivante. Elle a des <br />
            valeurs, une personnalité, une <br />
            histoire. Si on oublie ça, on <br />
            peut faire de bons chiffres à <br />
            court terme, mais on la tue à <br />
            long terme. C’est pour ça qu’on <br />
            s’engage à donner de la <br />
            perspective, pour bâtir des <br />
            marques influentes.</p>
          </div>
        </div>
      </div>
      <div id="page2" className="h-screen">

      </div>
    </div>
  );
};

export default Agence;
