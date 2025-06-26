import { Navbar } from "./navbar";

export function Hero(){
    return <div className="grid grid-cols-12 mt-5 mb-10">
        <div className="col-span-1 max-w-xs justify-self-center" >
                <img src="/src/images/logo.jpg" className="h-20 origin-left"/>
        </div>
        <div className="col-span-4 mt-auto text-[#000f3a] text-4xl font-bold"><div className="grid grid-cols-1">
            <div className="col-span-1">Shri Mata Vaishno</div>
            <div className="col-span-1">Devi University</div></div></div>
        <div className="col-span-7"><Navbar/></div>
    </div>
}