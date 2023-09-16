import React from 'react'
import search from "../Assets/search.svg"
import CustomButton from './CustomButton';
// import { useWallet } from '@solana/wallet-adapter-react';
const Navbar = () => {

    // const {connected,connect,disconnect,}=useWallet();
    // function for connecting/disconneting to the wallet 
    // const connectWallet=async ()=>{
    //     try{
    //         await connect();
    //     }
    //     catch(e)
    //     {
    //         console.log(e);
    //     }
    // }
    // const disconnectWallet=async ()=>{
    //     try{
    //         await disconnect();
    //     }
    //     catch(e)
    //     {
    //         console.log(e);
    //     }
    // }
    const disconnectWallet=async ()=>{
        console.log("clicked");
    }
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
    <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
    <input
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
    />
    <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
        <img
            src={search}
            alt="search"
            className="w-[15px] h-[15px] object-contain"
          />
    </div>
    </div>
    <CustomButton
        className="flex"
        btnType="button"
        title= "Connect"
        styles= "bg-[#ff1a1a]"
        handleClick={disconnectWallet}
        />
    {/* {
        connected?
        <CustomButton
        className="flex"
        btnType="button"
        title= "Connect"
        styles= "bg-[#4acd8d]"
        handleClick={connectWallet}
        />:
        <CustomButton
        className="flex"
        btnType="button"
        title= "Connect"
        styles= "bg-[#ff1a1a]"
        handleClick={disconnectWallet}
        />
    } */}

    </div>
  )
}

export default Navbar