"use client";
import "../projects.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";
import { spacesData } from "../spaces.js";

const Page = () => {
  // Get next project (excluding current one)
  const currentRoute = "/projects/mlfa";
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
              src="/featured-projects/mlfa.jpg"
              alt="Muslim Legal Fund of America Campaign"
            />
          </div>
          <div className="projects-hero-overlay"></div>
          <div className="container">
            <div className="projects-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>Muslim Legal Fund of America (MLFA)</h1>
              </Copy>
            </div>
            <div className="projects-content">
              <div className="projects-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>Brand + Digital Strategy</p>
                </Copy>
              </div>
              <div className="projects-col">
                <div className="projects-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    <h3>
                      MLFA brought us on to revive their brand, modernize their
                      presence, and reestablish their relevance in the Muslim
                      civil rights space. They needed to streamline
                      communications, elevate their digital strategy, and engage
                      supporters more deeply through content and events.
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
                        <p>Digital Campaigns</p>
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
                        <p>MLFA Team</p>
                      </Copy>
                    </div>
                    <div className="projects-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Photography</p>
                        <p>Campaign Media</p>
                        <p>Brand Assets</p>
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
                  MLFA faced low brand awareness, outdated visuals, and
                  fragmented messaging that made it hard to connect with donors.
                  In a crowded advocacy space, they needed a clear brand
                  identity, a strong digital strategy, and campaigns that
                  inspired both trust and action.
                </h3>
              </Copy>
              <div className="projects-details-img">
                <img src="/projects/projects-1.jpg" alt="MLFA challenge" />
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
                  We rebuilt MLFA’s brand from the ground up — from refining
                  their story and visual identity to overhauling their digital
                  strategy. Our campaigns emphasized authentic storytelling,
                  cultural fluency, and clear messaging that positioned MLFA as
                  a trusted leader in the civil rights space.
                </h3>
              </Copy>
              <div className="projects-details-img">
                <img
                  src="/projects/projects-2.jpg"
                  alt="MLFA brand and digital strategy"
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
                  MLFA saw a surge in engagement and donations, including over
                  1000% ROI on SEM campaigns during key fundraising seasons. Our
                  work helped them carve out a distinctive voice, leading to
                  multiple million-dollar fundraising seasons powered by
                  cohesive campaigns and authentic storytelling.
                </h3>
                <h3>
                  Today, MLFA has reestablished itself as a leading force in the
                  Muslim civil rights space, building lasting trust and loyalty
                  among its supporters.
                </h3>
              </Copy>
              <div className="projects-details-img">
                <img
                  src="/projects/projects-2.jpg"
                  alt="MLFA impact and results"
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