import Image from 'next/image'
import React from 'react'
import { BsBoxArrowUpRight,BsArrowRight } from "react-icons/bs"
import Link from 'next/link'

const Banner: React.FC = () => 
  (
   <div className='bg-[#E6FCFF] border-t shadow-lg p-5 '>
        <div 
            className="bg-gradient-to-r from-purple-600 to-blue-400 mt-10 p-5 
            mx-auto rounded-xl text-white 
            font-bold flex items-center justify-between w-[90%]"
        >
            <div className='xs:w-[70%]'>
                <h2 className='mb-2 xs:text-[12px] md:text-[24px]'>PacakeSwap v3 Migration</h2>
                <p className='xs:text-[10px] md:text-[16px]'>Migrate to continues farming CAKE rewards and earning trading fees.</p>
                <div className="flex items-center gap-2 mt-3">
                    <button
                        className='bg-cyan-500 py-1 px-4 rounded-xl'
                    >
                        Proceed
                    </button>
                    <button
                        className='bg-white rounded-xl text-cyan-500 py-1 px-4 flex items-center gap-2'
                    >
                        Guide
                        <BsBoxArrowUpRight/>
                    </button>
                </div>
            </div>
            <div className=''>
                <Image 
                    src='/farmBunny.png' 
                    width={200} 
                    height={200} 
                    alt='Bunny image'
                    className='max-w-[200px] max-h-full xs:w-[100px] xs:h-[100px] md:w-[130px] md:h-[130px]'
                />
            </div>
        </div>
        <div className='p-2 mt-5 w-[90%] mx-auto'>
            <h2 className='text-[#7645D9] xs:mb-[8px] xs:text-[32px] md:text-[64px] font-bold'>Farms</h2>
            <p className='xs:text-[16px] xs:mb-[8px] md:mb-[18px] md:text-[24px] '>Stake LP tokens to earn.</p>
            <Link href='/'>
                <p className='text-[#66D8E3] text-[16px] font-bold flex items-center gap-2'>Community Auctions <BsArrowRight className='mt-1'/> </p>
            </Link>
        </div>
   </div>
  )


export default Banner
