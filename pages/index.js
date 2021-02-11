import styles from './index.module.css';
import Actions from '../components/Actions/Actions'
import Articles from '../components/Articles/Articles'
import Hero from '../components/Hero/Hero'
import Title from '../components/Title/Title'

export default function Home() {
  return (
    <>
      <div className={styles.intro}>
        <Title className={styles.fauxTitle} id="index" title="Sustainability Toolkit" />
        <Hero>
          <p>This toolkit includes an overview of practical application methods and tools that help us put sustainable principles into practice and covers topics such as material selection and design strategies, but also describes how to measure success.</p>
        </Hero>
      </div>
      <section className={styles.section}>
        <Title id="design" title="Design" />
        <div className={`${styles.column} isWithinNavigation`}>
          <Hero hasNavigation isReversed>
            <p>Sustainable design begins with the right idea</p>
            <p>Apart from very few exceptions, most of our concepts will not be about sustainability itself but instead are aiming to achieve goals in terms of eliciting emotions in the context of various brands and products; using either spectacle or convention-breaking designs to attract and focus attention.</p>
            <p>Yet when sustainability is considered at the earliest stages, it can help guide the design away from unsustainable solutions that rely on heavy power usage, non-renewable materials or are inefficient to manufacture and hard to re-use. For example, considering shipping logistics early in the design process could reduce or even prevent environmental impact in later stages of production.</p>
          </Hero>
          <Actions />
          <Articles />
        </div>
      </section>
      <section className={styles.section}>
        <Title id="development" title="Development" />
        <div className={styles.column}>
          <Hero hasNavigation isReversed>
            <p>Consider The Real-World Impact Of Digital Computing.</p>
            <p>Apart from a few exceptions, most of our concepts will not be about sustainability itself but instead are aiming to achieve goals in terms of eliciting emotions in the context of various brands and products; using either spectacle or convention-breaking designs to attract and focus attention.</p>
            <p>Yet when sustainability is considered at the earliest stages, it can help guide the design away from unsustainable solutions that rely on heavy power usage, non-renewable materials or are inefficient to manufacture and hard to re-use. Considering shipping logistics early in the design process could reduce or even prevent environmental impact in later stages of production.</p>
          </Hero>
        </div>
      </section>
    </>
  )
}
