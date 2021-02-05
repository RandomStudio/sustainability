import Head from 'next/head'
import Accordion from '../components/Accordion/Accordion'
import Tile from '../components/Tile/Tile'
import styles from './Principles.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Accordion id="goals" title="Goals">
          <Tile copy="Increase the demand for sustainable design of interactive spaces." />
          <Tile copy="Our first step in becoming sustainable is transparency. We are honest in the depiction of ourselves, and where we are on the scale. We are accountable to facts, and acknowledge that we are responsible for the impact we have in this transitioning world." title="Be accountable" />
        </Accordion>
        <Accordion id="principles" title="Principles" />
        <Accordion id="statement" title="Mission Statement" />
        <Accordion id="impact" title="Impact Reports" />
      </main>
    </div>
  )
}
