import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
export function Flyout_content({children,href,Flying_content}){
    const Navigate=useNavigate();
    const[dropdown,setDropdown]=useState(false);
    return<div
    onMouseEnter={()=>setDropdown(true)}
    onMouseLeave={()=>setDropdown(false)}
     className="relative relative h-fit w-fit">
        <div className="relative text-xl hover:text-orange-600 cursor-pointer" onClick={()=>{href?Navigate(href):null}}>
        {children}
        <span
        style={{
            transform: dropdown ? "scaleX(1)" : "scaleX(0)",
        }}
        className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-[#000f3a] transition-transform duration-300 ease-out"/>
        </div>
        {dropdown && <div className="absolute left-1/2 top-12 -translate-x-1/2 text-black z-1">
        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"/>
        <div className="absolute left-1/2 top-0 h-2 w-4 -translate-x-1/2 -translate-1/2 rotate-45 bg-white"/>
            <Flying_content/>
            </div>}
    </div>
}
export function Navbar(){
    const Navigate=useNavigate();
    return<div className="flex flex justify-end-safe justify-evenly mt-4 mb-5">
       <Flyout_content href="/" Flying_content={Null} >Kumar Lab</Flyout_content>
        <Flyout_content href="/" Flying_content={People_dropdown_menu}>People</Flyout_content>
        <Flyout_content href="/project" Flying_content={Null}>Project</Flyout_content>
        <Flyout_content href="/" Flying_content={Null}>Publication</Flyout_content>
        <Flyout_content href="/resources" Flying_content={Null}>Resources</Flyout_content>
        <Flyout_content href="/" Flying_content={Null}>Beyond The Bench</Flyout_content>
    </div>
}
function Null(){
    return 
}
function People_dropdown_menu(){
    return<div className="h-23 w-40 bg-zinc-200 shadow-xl">
        <div className="grid grid-cols-1">
        <div className="col-span-12 justify-self-center mt-3 text-lg hover:text-orange-600 cursor-pointer">Lab Members</div>
        <div className="col-span-12 h-1 bg-white"/>
            <div className="col-span-12 justify-self-center mt-3 text-lg hover:text-orange-600 cursor-pointer">Alumni</div>
        </div>
    </div>
}