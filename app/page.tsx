import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
const font = Poppins({
  subsets:["latin"],
  weight:["600"]
})

export default  function Home() {
  return (
   <>
      <main className="flex h-full flex-col items-center justify-center bg-base">
           <div className="space-y-2 flex items-center justify-center flex-col">
             <h1 className="text-white text-6xl font-semibold ">Wellcome to <span className={cn("text-primary_dark" , 
              font.className
             )}>Maze</span></h1>
             <p className="text-white text-sm  font-semibold   p-2">Where you trade your art</p>
                <div>
                   <LoginButton >
                      <Button   size="lg" className="bg-primary_dark  text-black hover:bg-primary_dark text-base">Explore the Nfts</Button>
                   </LoginButton>
                </div>
           </div>
      </main>
   </>
  );
}
 