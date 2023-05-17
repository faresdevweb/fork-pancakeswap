import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowDownShort } from "react-icons/bs";
import { ItemProps } from '@/models/model';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import AddLiquidityModal from './AddLiquidityModal';

const Item: React.FC<ItemProps> = ({
    cryptoName,
    percentage,
    earned,
    APR,
    staked_liquidity,
    multiplier,
    available,
    staked,
    isConnected,
    openModal,
    setOpenModal
}): JSX.Element => {

    const [ active, setActive  ] = useState<boolean>(false);

    const variants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
        exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    };

  return (
    <div>
        <div className='sm-2:flex sm-2: justify-evenly border-b border-b-gray-500 
        mx-auto p-5 relative'>
            <div className='flex justify-between items-center gap-4'>
                <h3 className='font-bold w-[150px]'> {cryptoName} </h3>
                <p className='text-[12px] rounded-full px-2 py-1 border border-[#7a6eaa]'>{percentage}</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-8'>
                    <div>
                        <p className='text-[#A79FC7]'>Earned</p>
                        <p className={`${earned === 0 ? "text-[#CACECF]" : "text-[#280D5F]"} font-bold`}> {earned} </p>
                    </div>
                    <div>
                        <p className='text-[#A79FC7]'>APR</p>
                        <p className='text-[#280D5F]'>{APR}</p>
                    </div>
                </div>
                <div className='ml-5 flex gap-8 xs:hidden lg:flex'>
                    <div>
                        <p className='text-[#A79FC7]'>Staked Liquidity</p>
                        <p className='text-[#280D5F]'>{staked_liquidity}</p>
                    </div>
                    <div>
                        <p className='text-[#A79FC7]'>Multiplier</p>
                        <p className='text-[#280D5F]'>{multiplier}</p>
                    </div>
                    <div>
                        <p className='text-[#A79FC7]'>Available</p>
                        <p className='text-[#280D5F]'>{available}</p>
                    </div>
                    <div>
                        <p className='text-[#A79FC7]'>Staked</p>
                        <p className='text-[#280D5F]'>{staked}</p>
                    </div>

                </div>
                <BsArrowDownShort 
                    className='absolute bottom-[37px] right-[36px]  text-cyan-500 cursor-pointer'
                    onClick={() => setActive(!active)}
                />
            </div>
        </div>
        <AnimatePresence>
            {
                active ? (
                    <motion.div 
                        className='lg:flex-row-reverse bg-[#F6F6F6] p-5'
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className='flex flex-col justify-center p-4 border-2 rounded-lg w-[80%] mx-auto'>
                            <h3 className='text-[12px] mb-2 text-[#7A6EAA] font-bold'>START FARMING</h3>
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
                        <div className='xs:flex lg:hidden flex-col w-[90%] mx-auto mt-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-[#A79FC7]'>APR</p>
                                <p className='text-[#280D5F]'>{APR}</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-[#A79FC7]'>Multiplier</p>
                                <p className='text-[#280D5F]'>{multiplier}</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-[#A79FC7]'>Staked Liquidity</p>
                                <p className='text-[#280D5F]'>{staked_liquidity}</p>
                            </div>
                        </div>
                        <div className='flex-col w-[90%] mx-auto mt-5 mb-5'>
                            <p className='text-cyan-500 font-bold flex justify-end  gap-2'>Add USDT-BNB LP</p>
                            <p className='text-cyan-500 font-bold flex justify-end  gap-2'>See Pair Info</p>
                            <p className='text-cyan-500 font-bold flex justify-end  gap-2'>View Contract</p>
                        </div>
                    </motion.div> 
                ) : (
                    <></>
                )
            }
        </AnimatePresence>
    </div>
  )
}

export default Item

