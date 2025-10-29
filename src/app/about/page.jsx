"use client";
import "./about.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import Spotlight from "@/components/Spotlight/Spotlight";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page about">
        <section className="about-hero">
          <div className="container">
            <div className="about-hero-col">
              <Copy delay={0.85}>
                <p>
                Our nuanced approach is essential. For far too long, Muslim and communities of color have been misunderstood and underestimated. We change that narrative, leveraging deep cultural fluency and strategic insights that speak directly and genuinely to your audience.
                </p>
              </Copy>
            </div>
            <div className="about-hero-col">
              <Copy delay={0.85}>
                <h2>
                Influence Brand Agency is authentically redefining how brands connect with Muslim donors and consumers. 
                </h2>
              </Copy>
              <div className="about-hero-hero-img">
                <img src="/studio/about-hero.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="more-facts">
          <div className="container">
            <div className="more-facts-items">
              <div className="fact">
                <Copy delay={0.1}>
                  <p>Raised Through Our Campaigns</p>
                  <h2>$10M+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.2}>
                  <p>Average ROI on SEM Campaigns</p>
                  <h2>1000%</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.3}>
                  <p>Muslim Market We Activated</p>
                  <h2>$2.8T+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.4}>
                  <p>Muslim Donors Engaged</p>
                  <h2>100kk+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.5}>
                  <p>Client Retention Rate</p>
                  <h2>98%</h2>
                </Copy>
              </div>
            </div>
          </div>
        </section>
        <section className="how-we-work-container">
          <div className="container">
            <HowWeWork />
          </div>
        </section>
        {/* <CTAWindow
          img="/featured-projects/11466463.jpeg"
          header="Our Impact"
          callout="Campaigns that drive results"
          description="Explore how we've helped brands connect authentically with Muslim audiences and build movements that matter."/> */}
        <Spotlight />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
