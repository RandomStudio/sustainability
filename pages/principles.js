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
      <Hero image="/images/featured/gp_intro" alt="A heavily stylised virtual catwalk model">
        <p>Random Studio aims to create work which connects people, and connects them to their environment.</p>
        <p>The studio consists of an international team of 30+ visual artists, designers, producers, creative technologists, producers and software engineers, enabling Random to control the entire design process from ideation to production and installation. It is this capacity; the ability to dream, design and build small pieces of the future— that positions the studio so uniquely, showing our clients what ‘could be’ and encouraging them to take the next step.</p>
      </Hero>
      <div className={styles.accordions}>
        <Accordion id="goals" title="Goals">
          <div className={styles.halfCol}>
            <p>
              Random Studio wants to have a positive impact on the world, helping both decision makers of the industries we service, and our design peers, bridge the gap from status quo to new, sustainable ways of doing things. 
            </p>
            <p>
              Our own intrinsic impulse is to create. Our studio is an environment that invites creativity and exploration. A place where we work with our intuition to find unexpected solutions. Futures that allow our clients and ourselves to grow.
            </p>
          </div>
          <div className={styles.tiles}>
            <Tile copy="If we can show how sustainable futures could work, look and feel by creating examples through our client projects, we lower the threshold for change, and can ultimately bring about real systemic change to the industry." isOutline />
            <Tile copy="If we commit to educate ourselves on sustainable practices we will bring experience and expertise to the core of our studio, and ultimately become a resource and partner for clients & design peers, accelerating their sustainability journey." isOutline />
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
        <Accordion id="statement" title="What we do">
          <div className={styles.halfCol}>
            <p>In our studio, we continuously work on lowering our carbon footprint in-house by changing how we work, travel and what we consume. We serve organic and vegan meals, supporting local businesses, and aim to have a plastic free kitchen in the near future.</p>
            <p>We challenge and educate all employees on topics surrounding circularity, to encourage everyone to implement sustainable choices at home. And finally, we take responsibility for the emissions that could not be mitigated by planting trees and carbon offsetting our footprint tenfold. </p>
            <p>Alongside bringing sustainability into our regular projects, we have also made a commitment to dedicate 5% or more of our time each year to non-profits, climate activist organisations, or local initiatives.</p>
          </div>
        </Accordion>
      </div>
    </>
  )
}

export default Principles;
