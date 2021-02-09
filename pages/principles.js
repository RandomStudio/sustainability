import styles from './principles.module.css';
import Accordion from '../components/Accordion/Accordion';
import Tile from '../components/Tile/Tile';
import Hero from '../components/Hero/Hero';

const Principles = () => {
  return (
    <>
      <Hero image="blank" isReversed>
        <p>If we can prove to decision makers how sustainable futures could look and feel like by prototyping* them, we can lower the perceived threshold for change, and ultimately bring about real systemic change to various industries.</p>
        <p>Random Studio aims to create work which connects people, and connects them to their environment. The studio consists of an international team of 30+ visual artists, designers, producers, creative technologists, producers and software engineers, enabling Random to control the entire design process from ideation to production and installation. It is this capacity; the ability to dream, design and build small pieces of the future— that positions the studio uniquely well, showing our clients what could be and encouraging them to take the next step.</p>
      </Hero>
      <Accordion id="goals" title="Goals">
        <Tile copy="Increase the demand for sustainable design of interactive spaces." />
        <Tile copy="Our first step in becoming sustainable is transparency. We are honest in the depiction of ourselves, and where we are on the scale. We are accountable to facts, and acknowledge that we are responsible for the impact we have in this transitioning world." title="Be accountable" />
      </Accordion>
      <Accordion id="principles" title="Principles" />
      <Accordion id="statement" title="Mission Statement">
        <div className={styles.twoCol}></div>
      </Accordion>
      <Accordion id="impact" title="Impact Reports" />
    </>
  )
}

export default Principles;