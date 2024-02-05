import React from 'react';
import Link from 'next/link';
import styles from './home.module.css';
import Image from 'next/image';
import Features from '../components/landing_page/feature_section/Features';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        {/* Hero section */}
        <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.backgroundImage}>
          <Image src="/hero_background.jpg" alt="Hero Background" layout="fill" objectFit="cover" quality={100} />
        </div>
        <div className={styles.overlay}></div>
        <h1 className={styles.title}>Welcome to Your Digital Bullet Journal</h1>
        <p className={styles.description}>
          Capture your tasks, notes, and events all in one beautifully organized place.
        </p>
        <div className={styles.ctaSection}>
  <p className={styles.ctaText}>Ready to take your journaling to the next level?</p>
  <Link  className={styles.ctaButton} href="/journal">Get Started For Free</Link>
</div>
      </div>
    </div>
      {/* Features section */}
      
        <section className={styles.features}>
          <h2>Features</h2>
          <Features />
        </section>
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Digital Bullet Journal. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
