import React from "react";
import HeroSection from "./heroSection";
import Invite from "./invite";
import Hanging from "./hanging";
import Fandom from "./fandom";
import Reliable from "./reliable";
import Footer from "./footer";
import FooterData from "./footerLinks.json";

const LandingPage = () => {
  return (
    <section>
      <HeroSection
        buttons={["Download", "Nitro", "Safety", "Support", "Blog", "Careers"]}
      />
      <Invite />
      <Hanging />
      <Fandom />
      <Reliable />
      <Footer links={FooterData} />
    </section>
  );
};

export default LandingPage;
