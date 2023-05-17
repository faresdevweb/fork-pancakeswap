import React, { useEffect } from 'react'
import { IoMdClose } from "react-icons/io"


interface AddLiquidityModalProps {
    openModal: boolean,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AddLiquidityModal: React.FC<AddLiquidityModalProps> = ({ openModal, setOpenModal }) => {

    useEffect(() => {
        if (openModal) {
          document.body.classList.add('overflow-hidden');
        } else {
          document.body.classList.remove('overflow-hidden');
        }
    
        return () => {
          document.body.classList.remove('overflow-hidden');
        };
      }, [openModal])


  return (
    <div className='w-full p-5 flex flex-col items-center justify-center gap-4 relative'>
        <input type="number" className='p-3 rounded-lg border-2 w-full mt-5 bg-gray-300'/> 
        <button className='w-full py-3 px-2 rounded-lg bg-cyan-500 text-bold text-white'>Add Liquidity</button>
        <div 
            className='absolute top-[7px] right-[13px]'
        >
            <IoMdClose 
                className='cursor-pointer bg-gray-300 rounded-full p-1 text-2xl hover:scale-[1.1]'
                onClick={() => setOpenModal(!openModal)}
            />
        </div>
    </div>
  )
}

export default AddLiquidityModal;