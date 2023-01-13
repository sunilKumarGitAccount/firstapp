import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Newcomp from '../components/newcomp'
import UnifiedSearch from '../components/UnifiedSearch/UnifiedSearch'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <UnifiedSearch/>
    <h1>main</h1>
    </>
  )
}
