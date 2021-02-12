import styles from './Principles.module.css';
import Accordion from '../components/Accordion/Accordion';
import Tile from '../components/Tile/Tile';
import Hero from '../components/Hero/Hero';

const Principles = () => {
  return (
    <>
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
          <p>With our work we aim to create a context where we evoke feelings of curiosity and wonder. A play field that invites people to create and open new worlds.</p>
          <h4>Intrinsic Motivation of the studio</h4>
          <p>Creating. That is what we are wholehearted about. Our studio is an environment that invites creativity and exploration. We don’t work with frameworks, blueprints, or an agency signature; We work with our intuition. Embracing the unexpected. Allowing our clients and ourselves to grow.</p>
          <h4>Vision - Inter - mediality</h4>
          <p>The use of digital techniques allows us to create spaces that transcend space and time, the virtual and the real and so create new spaces. Within these spaces, we call them interactive spaces, we create experiences that connect people with themselves, others and the world around them. We believe that when people are in connection, we can live without fear. And without fear we feel alive, we can dance, create and so inspire ourselves and others.</p>
        </div>
        <div className={styles.twoCol}>
          <h3>Sustainability</h3>
          <p>With our work we aspire to show decision makers how sustainable futures could look and feel like by prototyping them, in order to lower the perceived threshold for change, and ultimately bring about real systemic change to various industries.</p>
          <p>As a studio we are committed to continuously educate ourselves on sustainable practises, so we can bring experience and expertise in sustainable design to the core of our studio. With this practise, we aim to become a resource and collaborative partner for our clients and the design community in the conversion to sustainable design.</p>
          <p>We continuously lower our carbon footprint in-house, by changing how we travel and what we consume.</p>
          <p>We serve organic and vegan meals, supporting local businesses, and aim to have a plastic free kitchen in the near future.</p>
          <p>Furthermore, we challenge and educate all employees on topics surrounding circularity, to encourage everyone to implement sustainable choices at home.</p>
          <p>Lastly, we take responsibility for our emissions that could not be mitigated, by means of carbon offsetting.</p>
          <ul>
            <li>15.338 trees planted on our behalf (some of which we planted with our own hands) and counting</li>
            <li>We financially compensated for ten times the amount of carbon we generated as a company, resulting in an offset of ~1000 tonnes</li>
          </ul>
          <h3>Planet over Profit</h3>
          <p>We have made a commitment to utilise our profits to support initiatives that are in line with a sustainable future, therefore we donate at least 20% of our profits to (local) sustainable initiatives, climate activist organisations, or Gold Standard certified* charities each year.</p>
          <h3>What we want to do for clients</h3>
          <p>Random is a strategy and experience design studio that pa rtners with conscious and ambitious brands to pioneer, craft and orchestrate bespoke digital experiences that foster meaningful relationships with their audiences.</p>
          <p>To exceed our client’s expectations, we will always…</p>
          <p>Make them wonder, surprise them, invite them so:</p>
          <ul>
            <li>Share meaningful and honest insights, clarity of thought</li>
            <li>Challenge, inspire, reinvent (re-imagine) and stay ahead of the curve</li>
            <li>Collaborate and invite clients to learn with - or from - us</li>
            <li>Deliver world-class execution, technologically advanced</li>
            <li>Make a positive impact</li>
          </ul>
          <h3>What we want to do for the people here</h3>
          <p>Random Studio is a family of devoted craftsman, enabling you to further grow yourself.</p>
          <p>What we want to offer you...</p>
          <ul>
            <li>Encourage autonomy, authenticity (give trust and creative freedom)</li>
            <li>Stimulate personal growth, challenge people</li>
            <li>Ensure an inspirational environment (team, projects, events)</li>
            <li>Safeguard a humane studio (healthy lunch, light and open space, plants)</li>
            <li>Empower and take good care of the team (hardware, software, education budget, compensation)</li>
          </ul>
          <p>Our Values:</p>
          <ul>
            <li>Empathetic (human, personal, mindful, honest) but not sympathetic</li>
            <li>Curious (inquisitive, eager, profound) Don't judge, be vulnerable open.</li>
            <li>Humble, but not shy</li>
            <li>Be Vulnerable, open, so you invite to make a connection with others</li>
            <li>Ambitious, get it all out!</li>
            <li>Serious but not when it concerns ourselves</li>
            <li>Courageous From the latin word  "cor meum" means heart. So not brave, strong, but vulnerable, wholehearted.</li>
            <li>Mysterious, but not vague</li>
            <li>Challenging (critical, daring, provoking)</li>
            <li>Inspiring (motivating, stimulating, sensory)</li>
            <li>Adaptive (agile, lean, reinventing)</li>
          </ul>
        </div>
      </Accordion>
    </>
  )
}

export default Principles;