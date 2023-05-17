import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiTable } from "react-icons/bi";
import { FaThList } from "react-icons/fa";
import { IOSSwitch } from './Switch';


interface FilterProps{
    changeDisplay?: string,
    setChangeDisplay?: React.Dispatch<React.SetStateAction<string>>
}

const Filter: React.FC<FilterProps> = ({ changeDisplay, setChangeDisplay }) => {

    const [ open, setOpen ] = useState<boolean>(false)

    const router = useRouter();

    const styles = router.pathname === "/" ? "bg-[#A29AC4]" : ""

    const toggleMenu = () => {
        setOpen(!open)
    }

    const selectVariants = {
        open: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
        closed: { borderBottomLeftRadius: '0.375rem', borderBottomRightRadius: '0.375rem' },
    };
 
  return (
    <div className='flex'>
        <div className='flex flex-wrap xs:justify-center md:justify-between items-center xs:gap-6  p-5 xs:w-full md:w-[80%] mx-auto mt-5'>
            <div className='flex flex-wrap xs:justify-center md:justify-start items-center xs:gap-6'>
                <div className='flex items-center gap-4'>
                    <BiTable  
                        className={`${ changeDisplay === "Item" ? "text-cyan-500" : ""}text-gray-500 cursor-pointer hover:opacity-75 hover:text-cyan-500`}
                        onClick={() => setChangeDisplay && setChangeDisplay("Item")}
                    />
                    <FaThList 
                        className={`${ changeDisplay !== "Item" ? "text-cyan-500" : ""}text-gray-500 cursor-pointer hover:opacity-75 hover:text-cyan-500`}
                        onClick={() => setChangeDisplay && setChangeDisplay("ItemCard")}
                    />
                </div>
                <div className='relative'>
                    <p className='absolute top-[-19px] left-0 text-[12px] font-bold text-[#988FBD]'>FILTER BY</p>
                    <div className='border border-gray-500 w-fit rounded-full flex items-center gap-2 bg-[#EEEAF4]'>
                        <Link href='/'>
                            <button className={`${router.pathname === "/" ? "bg-[#7a6eaa] text-white" : "text-[#7a6eaa]"} font-bold rounded-full h-[100%] px-2`}>Live</button>
                        </Link>
                        <Link href='/finished'>
                            <button className={`${router.pathname === "/finished" ? "bg-[#7a6eaa] text-white" : "text-[#7a6eaa]"} font-bold rounded-full h-[100%] px-2`}>Finished</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <button className='border border-gray-500 w-fit rounded-full flex items-center gap-4 bg-[#EEEAF4] px-2'>Farm Types</button>
                </div>
                <div className='flex flex-row-reverse gap-2 items-center'>
                    <p>Staked only</p>
                    <IOSSwitch/>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="relative">
                    <p className="absolute top-[-17px] left-[2px] text-[12px] font-bold text-[#988FBD]">SORT BY</p>
                    <motion.select
                      className="px-4 py-2 border-2 border-gray-500 rounded-md"
                      onClick={toggleMenu}
                      variants={selectVariants}
                      initial="closed"
                      animate={open ? 'open' : 'closed'}
                      transition={{ duration: 0.3 }}
                    >
                      <option value="multiplier">Multiplier</option>
                      <option value="hot">Hot</option>
                      <option value="apr">APR</option>
                      <option value="earned">Earned</option>
                      <option value="liquidity">Liquidity</option>
                      <option value="latest">Latest</option>
                    </motion.select>
                </div>
                <div className='relative'>
                    <p className="absolute top-[-19px] left-[8px] text-[12px] font-bold text-[#988FBD]">SEARCH</p>
                    <input 
                        type="search" 
                        className='p-2 rounded-2xl border-2 border-gray-500' 
                        placeholder='Search Farms'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter
