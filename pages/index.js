import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container mx-auto mt-4'>
      <Head>
        <title>BWAMICRO</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <main>
        <h1>Saya halaman utama</h1>
      </main>
    </div>
  )
}
