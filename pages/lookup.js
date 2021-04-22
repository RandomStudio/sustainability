import styles from './Lookup.module.css';
import { groupBy } from 'lodash';
import Head from 'next/head';
import Link from 'next/link';

const getLinkJSX = (id, title, count) => {
  if (count < 1) {
    return <div className={styles.disabled}>{title}</div>
  }
  return <Link href={`/tag/${id}`}>{title}</Link>
}

const Lookup = ({ groups }) => (
  <>
    <Head>
      <title>Lookup | Sustainability Toolkit</title>
    </Head>
    <div className={styles.wrapper}>
      <div className={styles.columns}>
        {groups.map(({ title, tags }) => (
          <ul className={styles.group}>
            <h3 className={styles.title}>{title}</h3>
            {tags.map(({ id, count, title }) => (
              <li className={styles.tag}>
                {getLinkJSX(id, title, count)}
                <span className={styles.count}>{count}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  </>
);

export async function getStaticProps() {
  const yaml = require('js-yaml');
  const fs = require('fs');
  const TAG_FILE = 'tags.yaml';
  const tagGroups = yaml.load(fs.readFileSync(`./content/${TAG_FILE}`, 'utf8'));
  const tagsInUse = fs.readdirSync('./content/process').map(filename => {
    const {
      actions,
      links
    } = yaml.load(fs.readFileSync(`./content/process/${filename}`, 'utf8'));
    
    const tags = [...actions, ...links].reduce((result, { tags }) => [...result, ...(tags ?? [])], []);

    return tags;
  });

  const allTagsInUse = tagsInUse.reduce((total, current) => [...total, ...current], []);
  const allTagsGrouped = groupBy(allTagsInUse);

  const groupedTagsWithCounts = tagGroups.map(details => {
    const { tags } = details;
  
    const tagsWithCounts = tags.map(tag => ({
      id: encodeURIComponent(tag),
      title: tag,
      count: allTagsGrouped[tag]?.length ?? 0,
    }));
 
    return {
      ...details,
      tags: tagsWithCounts
    };
  });

  return {
    props: {
      groups: groupedTagsWithCounts
    },
  }
}

export default Lookup;