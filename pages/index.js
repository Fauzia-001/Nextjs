// pages/index.js
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <section className={`hero ${styles.hero}`}>
          <h1>Welcome to My Portfolio</h1>
          <p>My name is Fauzia Nyale, Hold on i see a bug!..Oh it' not a bug it's a feature</p>
          <div>
            <Image
              src="/images/kanyau.jpg"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-circle"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
