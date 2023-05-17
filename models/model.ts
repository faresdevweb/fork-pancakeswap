export interface ItemProps {
    cryptoName: string,
    percentage: string,
    earned?: number,
    APR: string,
    staked_liquidity: string,
    multiplier: string,
    available?: string,
    staked?: string,
    isConnected: boolean
    openModal: boolean,
    setOpenModal:  React.Dispatch<React.SetStateAction<boolean>>
}