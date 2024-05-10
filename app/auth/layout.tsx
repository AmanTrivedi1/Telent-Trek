"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default   function  AuthLayout ({
    children
}: {
    children : React.ReactNode
}){
    return (
        <div className="  flex h-screen  items-center  ">
             <div className="md:block hidden max-w-2xl "> 
             <Carousel 
              autoPlay
              showStatus={false}
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
              stopOnHover={true}
              infiniteLoop
             >
                 <div>
                     <img  src="/slideOne.png" className="h-screen object-cover  "/>
                 </div>
                <div>
                   <img  src="/slideTwo.png" className="h-screen object-cover"/>
                </div>
                <div>
                   <img  src="/slideThree.jpg" className="h-screen object-cover "/>
                </div>
                <div>
                   <img  src="/slideFour.png" className="h-screen object-cover "/>
                </div>
                <div>
                   <img  src="/slideFive.png" className="h-screen object-cover"/>
                </div>
            </Carousel>
             </div>
             <div className="w-full pt-4 md:pt-0  md:mt-0 bg-base h-full  flex items-center justify-center">{children}</div>
        </div>
    )
}

