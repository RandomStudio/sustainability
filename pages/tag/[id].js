import styles from './Tag.module.css';
import Actions from '../../components/Actions/Actions'
import Hero from '../../components/Hero/Hero'
import Links from '../../components/Links/Links'
import Title from '../../components/Title/Title'
import Head from 'next/head';

export default function Tag({ actions, id, links }) {
  return (
    <>
      <Head>
        <title>Lookup | Sustainability Toolkit</title>
      </Head>
      <section className={styles.section}>
        <div className={`${styles.column} isWithinNavigation`}>
          <Actions actions={actions} hasSubmit={false} title={id} />
          {links && links.length > 0 && <Links links={links} title="Additional Resources" />}
        </div>
      </section>
    </>
  )
}

export function getStaticPaths () {
  const yaml = require('js-yaml');
  const fs = require('fs');
  const tagGroups = yaml.load(fs.readFileSync(`./content/tags.yaml`, 'utf8'));
  const tagIDs = tagGroups.reduce((all, current) => [...all, ...current.tags], []).map(tag => ({
    params: {
      id: encodeURIComponent(tag),
    }
  }));

  return {
    fallback: false,
    paths: tagIDs,
  };
}

export async function getStaticProps({ params }) {
  const yaml = require('js-yaml');
  const fs = require('fs');

  const { id } = params;

  const matchingContent = fs.readdirSync('./content/process').reduce((result, filename) => {
    const {
      actions,
      links
    } = yaml.load(fs.readFileSync(`./content/process/${filename}`, 'utf8'));

    const matchingActions = actions.filter(({ tags }) => tags?.map(tag => encodeURIComponent(tag)).includes(id) ?? false);
    const matchingLinks = links.filter(({ tags }) => tags?.map(tag => encodeURIComponent(tag)).includes(id) ?? false);

    return {
      actions: [...result.actions, ...matchingActions],
      links: [...result.links, ...matchingLinks],
    };
  }, { actions: [], links: []});

  return { 
    props: {
      ...matchingContent,
      id: decodeURIComponent(id),
    }
  }
}
