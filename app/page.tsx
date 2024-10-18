import Header from '../app/componets/Header';
import Footer from '../app/componets/Footer';
import Hero from '../app/componets/Hero';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;