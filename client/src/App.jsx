import { useEffect, useState } from "react";
import { getContent } from "./api.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Tape from "./components/Tape.jsx";
import About from "./components/About.jsx";
import Programmes from "./components/Programmes.jsx";
import Why from "./components/Why.jsx";
import How from "./components/How.jsx";
import Achievements from "./components/Achievements.jsx";
import Summer from "./components/Summer.jsx";
import Online from "./components/Online.jsx";
import Wall from "./components/Wall.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Festival from "./components/Festival.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [c, setC] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getContent().then(setC).catch(() => setError(true));
  }, []);

  if (error)
    return (
      <div className="grid min-h-screen place-items-center p-8 text-center">
        <div className="card max-w-md">
          <h3 className="text-2xl">Can’t reach the server</h3>
          <p className="mt-2 text-mut">Make sure the backend is running (<code>npm run dev</code>) and refresh.</p>
        </div>
      </div>
    );

  if (!c) return <div className="grid min-h-screen place-items-center text-xl font-extrabold text-teal">Loading…</div>;

  return (
    <>
      <Navbar links={c.nav} />
      <Hero photos={c.heroPhotos} tagline={c.brand.tagline} />
      <Tape items={c.tape} />
      <About about={c.about} />
      <Programmes items={c.programmes} />
      <Why items={c.why} />
      <How steps={c.steps} />
      <Achievements stats={c.stats} gallery={c.gallery} />
      <Summer data={c.summer} />
      <Online data={c.online} />
      <Wall items={c.innovators} />
      <Testimonials items={c.testimonials} />
      <Festival items={c.festival} />
      <Contact info={c.contact} />
      <Footer links={c.footerLinks} tagline={c.brand.tagline} />
    </>
  );
}
