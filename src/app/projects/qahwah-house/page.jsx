"use client";
import "../projects.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";
import { spacesData } from "../spaces.js";

const Page = () => {
  // Get next project (excluding current one)
  const currentRoute = "/projects/qahwah-house";
  const currentIndex = spacesData.findIndex(space => space.route === currentRoute);
  // Get the next project in sequence, wrapping around
  let nextIndex = currentIndex >= 0 ? (currentIndex + 1) % spacesData.length : 0;
  // If the next project is the current one (shouldn't happen, but safety check), get first other project
  if (spacesData[nextIndex]?.route === currentRoute) {
    nextIndex = spacesData.findIndex(space => space.route !== currentRoute);
  }
  const nextProject = spacesData[nextIndex] || spacesData[0];
  return (
    <>
      <Nav />
      <div className="page projects">
        {/* Hero */}
        <section className="projects-hero">
          <div className="projects-hero-img">
            <img
              src="/featured-projects/qahwah-house-5.jpeg"
              alt="Qahwah House Coffee"
            />
          </div>
          <div className="projects-hero-overlay"></div>
          <div className="container">
            <div className="projects-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>Qahwah House</h1>
              </Copy>
            </div>
            <div className="projects-content">
              <div className="projects-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>Brand Platform + Activation</p>
                </Copy>
              </div>
              <div className="projects-col">
                <div className="projects-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    <h3>
                      Qahwah House came to us ready to take premium Yemeni coffee
                      from a hidden gem to a national obsession. They wanted a
                      brand that could scale, without losing its soul.
                    </h3>
                  </Copy>
                </div>
                {/* Meta row for project details */}
                <div className="projects-content-wrapper projects-meta">
                  <div className="projects-hero-row">
                    <div className="projects-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Date Completed</p>
                        <p>2023</p>
                      </Copy>
                    </div>
                    <div className="projects-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Project Type</p>
                        <p>Brand Strategy</p>
                        <p>Experiential Activation</p>
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="projects-content-wrapper projects-meta">
                  <div className="projects-hero-row">
                    <div className="projects-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Collaborators</p>
                        <p>Influence Brand Agency</p>
                        <p>Qahwah House Team</p>
                      </Copy>
                    </div>
                    <div className="projects-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Photography</p>
                        <p>Campaign Media</p>
                        <p>Activation Assets</p>
                      </Copy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="projects-details projects-details-1">
          <div className="container">
            <div className="projects-col">
              <Copy delay={0.1}>
                <p>Challenge</p>
              </Copy>
            </div>
            <div className="projects-col">
              <Copy delay={0.1}>
                <h3>
                  The coffee was premium. The story was powerful. But in a
                  market suddenly filling with copycat brands, Qahwah House
                  needed to reclaim its place as the first, the most innovative,
                  and the most premium coffee in the game. They needed a brand
                  platform to cut through the noise and remind the world who
                  started it all.
                </h3>
              </Copy>
              <div className="projects-details-img">
                <img src="/featured-projects/qahwah-house-3.jpeg" alt="Qahwah House challenge" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="projects-details projects-details-1">
          <div className="container">
            <div className="projects-col">
              <Copy delay={0.1}>
                <p>Our Approach</p>
              </Copy>
            </div>
            <div className="projects-col">
              <Copy delay={0.1}>
                <h3>
                  We built a brand platform as bold as their brew. We staged a
                  NYC takeover with a branded pop-up activation, introduced a
                  new product innovation to align with the platform, launched a
                  social-first strategy to grow their national footprint, and
                  married every campaign and experience to Qahwah House’s premium
                  positioning.
                </h3>
              </Copy>
              <div className="projects-details-img">
                <img
                  src="/featured-projects/qahwah-house-6.webp"
                  alt="Qahwah House approach"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="projects-details projects-details-1">
          <div className="container">
            <div className="projects-col">
              <Copy delay={0.1}>
                <p>Our Impact</p>
              </Copy>
            </div>
            <div className="projects-col">
              <Copy delay={0.1}>
                <h3>
                  Qahwah House now shows up like the category-defining brand
                  they are. Their story is louder, their coffee is positioned as
                  the premium standard, and their innovation reclaims their
                  place as the original premium Yemeni coffee.
                </h3>
                <h3>
                  The result? A brand that commands attention, drives new
                  revenue, and builds loyalty that keeps customers coming back
                  for more.
                </h3>
              </Copy>
              <div className="projects-details-img">
                <img
                  src="/featured-projects/qahwah-house-7.jpeg"
                  alt="Qahwah House impact"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTAWindow
          img={nextProject.image}
          header="Next Project"
          callout={nextProject.name}
          description={nextProject.location}
          route={nextProject.route}
        />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default Page;