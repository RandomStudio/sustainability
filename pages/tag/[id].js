import styles from './Tag.module.css';
import Actions from '../../components/Actions/Actions'
import Links from '../../components/Links/Links'
import Head from 'next/head';
import { createTagId } from '../../utils/createTagId';

export default function Tag({ actions, name, links }) {
  return (
    <>
      <Head>
        <title>Lookup | Sustainability Toolkit</title>
      </Head>
      <section className={styles.section}>
        <div className={`${styles.column} isWithinNavigation`}>
          <Actions actions={actions} hasSubmit={false} title={name} />
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
      id: createTagId(tag),
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

    const matchingActions = actions.filter(({ tags }) => tags?.map(tag => createTagId(tag)).includes(id) ?? false);
    const matchingLinks = links.filter(({ tags }) => tags?.map(tag => createTagId(tag)).includes(id) ?? false);

    return {
      actions: [...result.actions, ...matchingActions],
      links: [...result.links, ...matchingLinks],
    };
  }, { actions: [], links: []});

  const tags = yaml.load(fs.readFileSync(`./content/tags.yaml`, 'utf8')).reduce((all, current) => [...all, ...current.tags], []);

  const displayName = tags.find(tag => createTagId(tag) === id);

  return { 
    props: {
      ...matchingContent,
      name: displayName
    }
  }
}
