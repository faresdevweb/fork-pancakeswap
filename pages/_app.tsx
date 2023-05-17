import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
 
const { chains, publicClient, webSocketPublicClient  } = configureChains(
  [mainnet],
  [infuraProvider({ apiKey: 'dc25ed0fdf724eb39a4bb0fc0d82c7ad' })]
);


const { connectors } = getDefaultWallets({
  appName: "Pancake App",
  chains,
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});



export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Header/>
          <Banner/>
          <Component {...pageProps} />
         </Layout>
     </RainbowKitProvider>
    </WagmiConfig>  
  )
}
