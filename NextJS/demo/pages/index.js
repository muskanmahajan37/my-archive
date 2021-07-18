import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Project | Home</title>
      <meta name="keywords" content="nextjs" />
    </Head>
    <div>
      <h2 className={styles.title}>Hello</h2>
      <p className={styles.text}>Lorem Hey gang</p>
      <Link href="/project">
        <a className={styles.btn}>Next JS test</a>
      </Link>
    </div>
    </>
  )
}
