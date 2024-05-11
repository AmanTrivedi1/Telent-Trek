import Link from "next/link"

import { Header } from "./header"
import  {
  Card,
  CardFooter ,
  CardHeader
} from "@/components/ui/card"
const ErrorCard = () => {
  return (
    <div>
       
        <Card className="sm:w-[400px]  bg-base border-primary_dark w-[350px] ">
             <CardHeader>
               <Header label="Oops! Something went wrong"/>      
             </CardHeader>
              <CardFooter>
                  <Link href="/auth/login" className="hover:underline">back to login</Link>
             </CardFooter>
        </Card>
       
    </div>
  )
}

export default ErrorCard
