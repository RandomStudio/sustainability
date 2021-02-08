import Actions from '../components/Actions/Actions'
import Articles from '../components/Articles/Articles'
import Hero from '../components/Hero/Hero'
import Section from '../components/WithNavigation/Section/Section'
import WithNavigation from '../components/WithNavigation/WithNavigation'

export default function Home() {
  return (
    <>
      <Hero>
        <p>This toolkit includes an overview of practical application methods and tools that help us put sustainable principles into practice and covers topics such as material selection and design strategies, but also describes how to measure success.</p>
      </Hero>
      <WithNavigation>
        <Section title="Design">
          <Hero isReversed>
            <p>This toolkit includes an overview of practical application methods and tools that help us put sustainable principles into practice and covers topics such as material selection and design strategies, but also describes how to measure success.</p>
          </Hero>
          <Actions />
          <Articles />
        </Section>
        <Section title="Development">
          <Hero>
            <p>This toolkit includes an overview of practical application methods and tools that help us put sustainable principles into practice and covers topics such as material selection and design strategies, but also describes how to measure success.</p>
          </Hero>
        </Section>
      </WithNavigation>
    </>
  )
}
