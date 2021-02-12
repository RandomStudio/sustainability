import styles from './Home.module.css';
import Actions from '../components/Actions/Actions'
import Hero from '../components/Hero/Hero'
import Links from '../components/Links/Links'
import Title from '../components/Title/Title'

export default function Home({ files }) {
  return (
    <>
      <section className={styles.intro}>
        <Title className={styles.introTitle} id="index" title="Sustainability Toolkit" />
        <Hero image="/images/featured/1_HEADER_toolkit_intro.jpg">
          <p>This toolkit includes an overview of practical application methods and tools that help us put sustainable principles into practice and covers topics such as material selection and design strategies, but also describes how to measure success.</p>
        </Hero>
      </section>
      {
        files.map(({ actions, description, headline, id, image, links, title }) => (
          <section className={styles.section}>
            <Title id={id} title={title} />
            <div className={`${styles.column} isWithinNavigation`}>
              <Hero hasNavigation image={`/images/${image}`} isReversed>
                <p>{headline}</p>
                {description.map(paragraph => <p>{paragraph}</p>)}
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

export async function getServerSideProps(context) {
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
