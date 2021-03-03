// Core
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Image from "next/image";

// Actions
import { catsActions } from './actions';

// Selectors
import {
  selectCatsEntries,
  selectCatsIsLoading
} from './selectors';

// Styles
import styles from './styles.module.scss';

export const Cats = () => {
  const entries = useSelector(selectCatsEntries);

  const entriesJSX = entries && entries.map(({ _id, text }) => (
    <p key={_id}>
      {text}
    </p>
  ));

  return (
    <section className={styles.cats}>
      <h1>Cats</h1>
      <div className={styles.poster}>
        <Image
          src="/images/cat.jpg"
          alt="alt text"
          layout='fill'
          objectFit='cover'
        />
        <Image
          src="/images/cat.jpg"
          alt="some cat"
          layout='responsive'
          width={400}
          height={120}
        />
        <Image
          src="/images/cat.jpg"
          alt="some cat"
          layout='responsive'
          objectFit="cover"
          width={400}
          height={120}
        />
        <Image
          src="/images/cat.jpg"
          alt="some cat"
          layout='responsive'
          objectFit="cover"
          quality={1}
          width={800}
          height={420}
        />
      </div>
      <div className={styles.list}>
        {entriesJSX}
      </div>
    </section>
  )
}