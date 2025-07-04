import { Navbar } from "./navbar";

export function Hero(){
    return <div className="grid grid-cols-12 mt-5 mb-10">
        <div className="ml-25 md:ml-1 col-span-10 md:col-span-5 md:flex">
        <div className=" ml-25 md:ml-5" >
                <img src="/src/images/logo.jpg" className="h-20 md:origin-left"/>
        </div>
        <div className="mt-auto text-[#000f3a] origin-center text-4xl font-bold md:ml-2.5"><div className="grid grid-cols-1">
            <div className="col-span-1">Shri Mata Vaishno</div>
            <div className="col-span-1">Devi University</div></div></div>
            </div>
        <div className="col-span-2 md:col-span-7"><Navbar/></div>
    </div>
}