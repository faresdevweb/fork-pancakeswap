import React from 'react'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header: React.FC = () => {
  return (
    <div className='p-5 flex justify-between'>
        <div className='flex items-center gap-2'>
            <Image src='/logo.png' width={35} height={35} alt='logo'/>
            <h1 className="font-bold xs:hidden lg:block">Pancake Swap</h1>
        </div>
        <div className="flex items-center text-white font-bold ">
            <ConnectButton/>
        </div>
    </div>
  )
}

export default Header