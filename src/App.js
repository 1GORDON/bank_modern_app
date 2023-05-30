import styles from "./style";

import { Clients } from "./components/Clients";
import { CTA } from "./components/CTA";
import { Stats } from "./components/Stats";
import { Footer } from "./components/Footer";
import { Testimonials } from "./components/Testimonials";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { CardDeal } from "./components/CardDeal";
import { Business } from "./components/Business";
import { Billing } from "./components/Billing";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
