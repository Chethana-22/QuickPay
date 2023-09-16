
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useState, useEffect } from 'react'
import Action from '../components/header/Action'
import NavMenu from '../components/header/NavMenu'
import Profile from '../components/header/Profile'
import SearchBar from '../components/home/SearchBar'
import NewTransactionModal from '../components/transaction/NewTransactionModal'
import TransactionsList from '../components/transaction/TransactionsList'
import { useWallet } from '@solana/wallet-adapter-react'
import TransactionQRModal from '../components/transaction/TransactionQRModal'
// import { transactions } from '../data/transactions'
import { getAvatarUrl } from "../functions/getAvatarUrl"
import { useCashApp } from '../hooks/CashApp'


const Home = () => {
    const { connected, publicKey, avatar, userAddress, transactions, newTransactionModalOpen, setNewTransactionModalOpen } = useCashApp();
    const [transactionQRModalOpen, setTransactionQRModalOpen] = useState(false);
    const [qrCode,setQrCode]=useState(false);
    // const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false);   
    // console.log(connected, "WE ARE CONNECTED", publicKey.toString());


    return (
        <div className="App">
        <div className="relative bg-[#13131a] sm:-8 p-4 flex flex-row min-h-screen  ">
      <div className="sm:flex hidden mr-10 relative text-white">
        <SideBar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        </div>
        </div>
        </div>
    )
}

export default Home
