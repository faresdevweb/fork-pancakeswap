import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { BsArrowDownShort } from "react-icons/bs";
import { ItemProps as ItemCardProps } from '@/models/model';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { BsBoxArrowUpRight } from "react-icons/bs"

const ItemCard: React.FC<ItemCardProps> = ({
    cryptoName,
    percentage,
    APR,
    staked_liquidity,
    multiplier,
    isConnected,
    openModal,
    setOpenModal
}) => {

  const [ active, setActive ] = useState<boolean>(false);  

  return (
    <div className='border-2 sm-2:w-[350px] sm-2:mx-auto md:m-0 md:max-w-[350px]  p-3 rounded-xl w-full max-w-[350px]'>
      <div className="flex justify-between">
        <Image src='/logo-card.png' width={75} height={75} alt='image card' />
        <div>
          <h2 className='font-bold text-center'>{cryptoName}</h2>
          <div className="flex items-center gap-2">
            <p className='border border-[#7645D9] text-[#7645D9] font-bold p-[5px] rounded-full text-[14px]'>{percentage}</p>
            <p className='bg-[#7645D9] p-[5px] rounded-full text-white font-bold text-[14px]'>{multiplier}</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <p className='text-[#280D5F]'>APR: </p>
        <p className='text-[#280D5F]'>{APR}</p>
      </div>
      <div className="flex justify-between">
        <p className='text-[#280D5F]'>Earn: </p>
        <p className='text-[#280D5F]'>CAKE + Fees</p>
      </div>
      <div className=' mt-3'>
      {
        isConnected ? (
            <div>
                <button 
                  className='bg-cyan-500 w-full py-3 px-2 rounded-full text-white font-bold'
                  onClick={() => setOpenModal(!openModal)}
                > 
                  Add Liquidity
                </button>
            </div>
        ) : (
            <ConnectButton/>
        )
      }
      </div>
      <div className='mt-3 cursor-pointer flex items-center justify-center' >
        <button  onClick={() => setActive(!active)} className='flex items-center gap-1 text-cyan-500 font-semibold'>{active ? "Hide" : "Details"} <BsArrowDownShort/></button>
      </div>
      {
        active ? (
            <div className='dropdown mt-3'>
              <div className="flex justify-between">
                <p className='text-[#280D5F]'>Staked Liquidity: </p>
                <p className='text-[#280D5F]'>{staked_liquidity}</p>
              </div>
              <div className="mt-1">
                <Link href=''>
                  <p className='text-cyan-500 font-bold flex justify-end  gap-2'>ADD USDT-BNB LP</p>
                  <p className='text-cyan-500 font-bold flex justify-end items-center gap-2'>See Pair Info <BsBoxArrowUpRight/></p>
                  <p className='text-cyan-500 font-bold flex justify-end gap-2'>View Contract</p>
                </Link>
              </div>
            </div>
          ) : (
          <></>
        )
      }
    </div>
  )
}

export default ItemCard

