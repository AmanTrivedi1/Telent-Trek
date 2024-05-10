"use client"

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
    href:string;
    label:string;
}


export const BackButton = ({href , label}:BackButtonProps) => {
  return (
    <div>
      <Button 
      variant="link"
      className="font-normal text-white w-full"
      size="sm"
      asChild
      >
        <Link href={href}>
           {label}
        </Link>
      </Button>
    </div>
  )
}

export default BackButton;
