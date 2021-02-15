import styles from './Principles.module.css';
import Head from 'next/head';
import Accordion from '../components/Accordion/Accordion';
import Tile from '../components/Tile/Tile';
import Hero from '../components/Hero/Hero';

const Principles = () => {
  return (
    <>
      <Head>
        <title>Goals & Principles | Sustainability Toolkit</title>
      </Head>
      <Hero image="/images/featured/GOALS_PAGE_HEADER_goals.png" isReversed>
        <p>If we can prove to decision makers how sustainable futures could look and feel like by prototyping* them, we can lower the perceived threshold for change, and ultimately bring about real systemic change to various industries.</p>
        <p>Random Studio aims to create work which connects people, and connects them to their environment. The studio consists of an international team of 30+ visual artists, designers, producers, creative technologists, producers and software engineers, enabling Random to control the entire design process from ideation to production and installation. It is this capacity; the ability to dream, design and build small pieces of the future— that positions the studio uniquely well, showing our clients what could be and encouraging them to take the next step.</p>
      </Hero>
      <Accordion id="goals" title="Goals">
        <div className={styles.tiles}>
          <Tile copy="Increase the demand for sustainable design of interactive spaces." />
          <Tile copy="Become a resource and collaborative partner for our clients and design peers in the conversion to sustainable design." />
        </div>
      </Accordion>
      <Accordion id="principles" title="Principles">
        <div className={styles.tiles}>
          <Tile
            copy="Our first step in becoming sustainable is transparency. We are honest in the depiction of ourselves, and where we are on the scale. We are accountable to facts, and acknowledge that we are responsible for the impact we have in this transitioning world."
            title="Be accountable"
          />
          <Tile
            copy="As a general rule, we take the life after the project into account when designing and engineering the experience. How will the materials, code and designs be reused or at least recycled?"
            title="Design for post-use"
          />
          <Tile
            copy="We are realistic that right now we are not 100% sustainable, but we are dedicated to finding opportunities to improve. We review our environmental impacts regularly and continually work to reduce it."
            title="Always aim up"
          />
          <Tile
            copy="Transport has a great impact. We prefer local materials wherever possible. A modular design is more easily shipped, allows components to be replaced, and the design to be disassembled for post-use. Also applies to software."
            title="Go modular and local"
          />
          <Tile
            copy="With every project, we ask how the brief can be fulfilled in the most sustainable way, and we present this option to our clients."
            title="Green is the default"
          />
          <Tile
            copy="Select materials based on project duration. A durable material is a more sustainable option for long-term projects, where compostable or rented structures for shorter timelines."
            title="Optimise for duration"
          />
        </div>
      </Accordion>
      <Accordion id="statement" title="Mission Statement">
        <div className={styles.halfCol}>
          <p>
            With our work we aspire to show decision makers how sustainable futures could look and feel like by prototyping them, in order to lower the perceived threshold for change, and ultimately bring about real systemic change to various industries.
          </p>
          <p>
            As a studio we are committed to continuously educate ourselves on sustainable practises, so we can bring experience and expertise in sustainable design to the core of our studio. With this practise, we aim to become a resource and collaborative partner for our clients and the design community in the conversion to sustainable design.
          </p>
          <p>
            Alongside bringing sustainability into our regular projects, we have also made a commitment to dedicate 5% or more of our time each year to non-profits, climate activist organisations, or local initiatives.
          </p>
          <p>
            In our studio, we continuously work on lowering our carbon footprint in-house, by changing how we travel and what we consume.
          </p>
          <p>
            We serve organic and vegan meals, supporting local businesses, and aim to have a plastic free kitchen in the near future.
          </p>
          <p>
            Furthermore, we challenge and educate all employees on topics surrounding circularity, to encourage everyone to implement sustainable choices at home.
          </p>
          <p>
            Lastly, we take responsibility for our emissions that could not be mitigated, by means of carbon offsetting. All our studio’s emissions, we offset tenfold.
          </p>
        </div>
      </Accordion>
    </>
  )
}

export default Principles;