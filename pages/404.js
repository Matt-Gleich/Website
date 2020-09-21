import styles from '../styles/404.module.css'
import Head from 'next/head'

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>
          ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        </title>
      </Head>
      <main className={styles.body}>
        <img
          className={styles.lostGif}
          src="https://media.giphy.com/media/Bp3dFfoqpCKFyXuSzP/giphy.gif"
          alt="Seth Meyers lost"
        />
        <h1>❗️ 404 Error ❗️</h1>
        <h1 className={styles.title}>Whoa there partner!</h1>
        <div className={styles.subtitle}>
          <h2>You left the system</h2>
        </div>
      </main>
    </div>
  )
}
