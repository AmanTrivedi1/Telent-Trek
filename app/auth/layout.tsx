
export default   function  AuthLayout ({
    children
}: {
    children : React.ReactNode
}){
    return (
        <div className="h-full text-white bg-base  flex items-center justify-center ">
            {children}
        </div>
    )
}

