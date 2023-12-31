import React, { useState } from 'react';
import Navlinks from "../NavIcons/Icons";
// import {  useNavigate } from 'react-router-dom';
import Link from 'next/link';
import logo from "../Assets/logo.svg"
import Icon from './Icon';
import { useRouter } from 'next/router';


const SideBar = () => {
    // const navigate=useNavigate();
    const router=useRouter();
    const [isActive,setIsActive]=useState("dashboard");
    console.log(Navlinks);
  return (
      <div className="flex flex-col justify-between items-center sticky top-5 h-[93vh]">
        <Link href="/">
          <Icon className="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
        </Link>
        <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
          <div className="flex flex-col justify-center items-center gap-3">
            {Navlinks.map((link) => (

              <Icon
                key={link.name}
                {...link}
                isActive={isActive}
                handleClick={() => {
                  if (!link.disabled) {
                    setIsActive(link.name);
                    router.push(link.link);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
  )
}

export default SideBar;