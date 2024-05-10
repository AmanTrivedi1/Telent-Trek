"use client"

import { Card , CardContent , CardFooter , CardHeader} from "../ui/card";
import BackButton from "./back-button";
import { Header } from "./header";
import { Social } from "./social";


interface CardWrapperProps {
    children:React.ReactNode;
    headerLabel:string;
    backButtonLabel:string;
    backButtonHref:string;
    showSocial?:boolean
}


const CardWrapper = ({
   children,
   headerLabel,
   backButtonLabel,
   backButtonHref,
   showSocial
}:CardWrapperProps) => {
  return (
    <Card className="sm:w-[400px] w-[350px] bg-base text-white border border-primary_dark">
        <CardHeader>
            <Header  label={headerLabel} />
        </CardHeader>
        <CardContent>
           {children}
        </CardContent>
         {showSocial && (
            <CardFooter>
                <Social/>
            </CardFooter>
         )}
         <CardFooter className="">
            <BackButton   label={backButtonLabel} href={backButtonHref}/>
         </CardFooter>
    </Card>
  )
}

export default CardWrapper
