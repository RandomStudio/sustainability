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
        <p>Random Studio creates work which connects people to each other and to their environment.</p>
        <p>The studio consists of an international team of 30+ visual artists, designers, producers, creative technologists, producers and software engineers, enabling Random to control the entire design process from ideation to production and installation.</p>
        <p>It is this capacity - the ability to dream, design and build small pieces of the future - that positions the studio to inspire our clients with "what could be" and empower them to take the practical steps needed to get there.</p>
      </Hero>
      <div className={styles.accordions}>
        <Accordion id="goals" title="Goals">
          <div className={styles.halfCol}>
            <p>Random Studio wants to have a positive impact on the world. This requires active engagement - with both decision makers of the industries we serve, and our design peers - to push beyond the status quo and find better, more sustainable ways of creating.</p>
            <p>Our studio is an environment that invites creativity and exploration. This is a place where a diverse group of people are free to follow their intuitions to find unexpected solutions. We are co-creators with our clients in building a future where we can all grow and thrive.</p>
          </div>
          <div className={styles.tiles}>
            <Tile copy="We have the power to imagine how sustainable futures could work, look and feel. By creating examples through our client projects, we lower the threshold for change.  This is how we do our part in bringing about real systemic change in the industry." isOutline />
            <Tile copy="If we commit to educate ourselves on sustainable practices we will bring experience and expertise to the core of our studio. Equipped with this knowledge, we become a resource and partner for our clients and design peers, accelerating their sustainability journey." isOutline />
          </div>
        </Accordion>
        <Accordion id="principles" title="Principles">
          <div className={styles.tiles}>
            <Tile
              copy="Our first step in becoming sustainable is becoming more transparent. The world is in transition, and so are we. We have to be honest in how we depict our progress on these issues. We are accountable to the facts about our impact in the world, and the systems and processes in which we are implicated."
              title="Be accountable"
            />
            <Tile
              copy="We are realistic that right now we are not 100% sustainable, but we are dedicated to finding opportunities to improve. We review our environmental impacts regularly and continually work to improve them."
              title="Always aim up"
            />
            <Tile
              copy="With every project, we ask how the brief can be fulfilled in the most sustainable way, and we present these options to our clients."
              title="Green is the default"
            />
            <Tile
              copy="We try to select materials based on project duration. A durable material is a more sustainable option for long-term projects; compostable or rented structures make more sense for shorter timelines."
              title="Optimise for duration"
            />
            <Tile
              copy="We take the life-after-the-project into account when designing and engineering the experience. How will the materials, code and designs be reused or at least recycled?"
              title="Design for post-use"
            />
            <Tile
              copy="The impact of transport should never be underestimated. We prefer local materials wherever possible. A modular design is more easily shipped, allows components to be replaced, and the design to be disassembled for post-use."
              title="Go modular and local"
            />
          </div>
        </Accordion>
        <Accordion id="statement" title="What we do">
          <div className={styles.halfCol}>
            <p>In our own studio, we continuously work on lowering our carbon footprint in-house by critically evaluating how we work, how we travel and what we consume. We serve organic and vegan meals, supporting local businesses, and aim to have a plastic-free kitchen in the near future.</p>
            <p>We challenge and educate all employees on topics surrounding circularity, to encourage everyone to implement sustainable choices at home. And finally, we take responsibility for the emissions that could not be mitigated by planting trees and carbon offsetting our footprint tenfold.
Alongside bringing sustainability into our regular projects, we have also made a commitment to dedicate 5% or more of our time each year to non-profits, climate activist organisations, or local initiatives.</p>
          </div>
        </Accordion>
      </div>
    </>
  )
}

export default Principles;
