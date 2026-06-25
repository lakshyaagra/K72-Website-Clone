import React from "react";

const Projectcard = (props) => {
  return (
    <>
        <div className="lg:w-1/2 w-full transition-all rounded-none group duration-150 relative hover:rounded-[50px] overflow-hidden h-full">
            <img
            className="h-full w-full object-cover"
            src={props.image1}
            
            alt=""
            />
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-75 absolute top-0 left-0 bg-black/5 h-full w-full flex items-center justify-center">
            <h2 className="font-[font2] px-5 border-2 rounded-full uppercase pt-2 tracking-wide text-5xl p-0.5 text-white ">
                Vior le projet
            </h2>
            </div>
        </div>
        <div className="lg:w-1/2 w-full transition-all rounded-none group duration-150 relative hover:rounded-[50px] overflow-hidden h-full">
            <img
            className="h-full w-full object-cover"
            src={props.image2}
            
            alt=""
            />
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-75 absolute top-0 left-0 bg-black/5 h-full w-full flex items-center justify-center">
            <h2 className="font-[font2] px-5 border-2 rounded-full uppercase pt-2 tracking-wide text-5xl p-0.5 text-white ">
                Vior le projet
            </h2>
            </div>
        </div>
    </>
  );
};

export default Projectcard;
