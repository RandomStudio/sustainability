import styles from './Home.module.css';
import Actions from '../components/Actions/Actions'
import Hero from '../components/Hero/Hero'
import Links from '../components/Links/Links'
import Title from '../components/Title/Title'

export default function Home({ files }) {
  return (
    <>
      <section className={styles.intro} id="index">
        <Title className={styles.introTitle} id="index" isTop title="Sustainability Toolkit" />
        <Hero image="/images/featured/toolkit_intro" alt="A green office full of plants">
          <p>This toolkit includes an overview of practical application methods and tools that help us put sustainable principles into practice and covers topics such as material selection and design strategies, but also describes how to measure success.</p>
        </Hero>
      </section>
      {
        files.map(({ actions, description, headline, id, image, alt, links, title }) => (
          <section className={styles.section} key={id} id={id}>
            <Title id={id} title={title} />
            <div className={`${styles.column} isWithinNavigation`}>
              <Hero hasNavigation image={`/images/${image}`} alt={alt} isReversed>
                <p>{headline}</p>
                {description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </Hero>
              <Actions actions={actions} />
              <Links links={links} />
            </div>
          </section>
        ))
      }
    </>
  )
}

export async function getStaticProps(context) {
  const yaml = require('js-yaml');
  const fs = require('fs');
  const files = fs.readdirSync('./content').map(filename => {
    const data = yaml.load(fs.readFileSync(`./content/${filename}`, 'utf8'));
    return data;
  });
  return {
    props: {
      files
    },
  }
}
