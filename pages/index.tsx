import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Newcomp from '../components/newcomp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Newcomp />
    <h1>o to baro hi hai fair</h1>  
    </>
  )
}
