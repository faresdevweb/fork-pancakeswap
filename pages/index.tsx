import React, { useState } from 'react';
import Filter from '@/components/Filter';
import Item from '@/components/Item';
import { fakeData } from "../mockData"
import ItemCard from '@/components/ItemCard';
import { useAccount } from 'wagmi';
import AddLiquidityModal from '@/components/AddLiquidityModal';

const Index: React.FC = () => {

  const [ changeDisplay, setChangeDisplay ] = useState<string>('Item')
  const [ openModal, setOpenModal ] = useState<boolean>(false);
  const { isConnected } = useAccount();

  console.log(isConnected);
  

  return (
    <div>
        <Filter
          changeDisplay={changeDisplay}
          setChangeDisplay={setChangeDisplay}
        />
      <div >
        {
            changeDisplay === "ItemCard" ?  (
              <div className='border-2 border-gray-500 rounded-lg mb-5 mx-auto max-w-7xl xs:w-[300px] sm-2:w-[450px] md:w-[700px] lg:w-[950px] mt-5'>
                  { fakeData && fakeData.map((card, index) => (
                      <Item
                        key={index}
                        cryptoName={card.cryptoName}
                        percentage={card.percentage}
                        earned={card.Earned}
                        APR={card.APR}
                        staked_liquidity={card.staked_liquidity}
                        multiplier={card.multiplier}
                        available={card.available}
                        staked={card.staked}
                        isConnected={isConnected}
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                      />
                    ))
                  }
                </div>
            ) : (
                  <div className="2xl:w-[80%]  xl:w-[90%] lg:w-[70%] md:w-[100%] mx-auto grid gap-2 xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-start justify-items-center">
                    {fakeData && fakeData.map((card, index) => (
                      <ItemCard
                        key={index}
                        cryptoName={card.cryptoName}
                        percentage={card.percentage}
                        APR={card.APR}
                        staked_liquidity={card.staked_liquidity}
                        multiplier={card.multiplier}
                        isConnected={isConnected}
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                      />
                    ))}
                  </div>
                )
          }
          {
            openModal ? (
              <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-gray-500 bg-opacity-50">
                <div className="relative bg-white p-4 rounded-lg ">
                  <AddLiquidityModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                </div>
              </div>
            ) : (
              <></>
            )
          }
      </div>
    </div>
  )
}

export default Index;



  