

import { auth, signOut } from '@/auth';
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default  async function Home() {
   const session = await auth();
   const onClick = () =>{
    signOut();
   }
  return (
   <>
      <div className="h-screen">
          <>
           <div className=" flex bg-base h-screen  items-center">
              <div className="md:block hidden max-w-2xl "> 
                  <div>
                     <img  src="/slideFive.png" className="h-screen object-cover"/>
                  </div>
             </div>
             <div className="max-w-3xl flex-col m-auto p-2   flex items-start justify-center">
                <h1 className="text-5xl font-semibold text-primary_dark">Own a piece of digital history with our unique NFT collectibles!</h1>
                <p className="text-white/60 mt-4 text-base">Welcome to our NFT marketplace, where innovation meets creativity.
                   Dive into a world where digital art comes to life, each piece a 
                   unique token of expression. Explore our curated collection and
                    embark on a journey of ownership in the digital realm. Join us
                     in redefining the future of art and collectibles through blockchain
                      technology.</p>
                      {
                        session ? (
                             <Link href="https://maze-nft.vercel.app/">
                                <Button  size="lg" className="mt-8 bg-primary_dark hover:bg-primary_dark text-black">Explore More</Button>
                             </Link>
                        ) : (
                           <LoginButton>
                              <Button  size="lg" className="mt-8 bg-primary_dark hover:bg-primary_dark text-black">Please Login</Button>
                           </LoginButton>
                        )
                      }
              </div>
            </div>
          </>

    </div>
 
   </>
  );
}
 