"use client";
import "../projects.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";
import { spacesData } from "../spaces.js";

const Page = () => {
  // Get next project (excluding current one)
  const currentRoute = "/projects/seen-tv";
  const otherProjects = spacesData.filter(space => space.route !== currentRoute);
  const nextProject = otherProjects[0] || spacesData[0];
  return (
    <>
      <Nav />
      <div className="page projects">
        {/* Hero */}
        <section className="projects-hero">
          <div className="projects-hero-img">
            <img
              src="/featured-projects/seenp.webp"
              alt="Seen TV / Seen Palestine Film Tour"
            />
          </div>
          <div className="projects-hero-overlay"></div>
          <div className="container">
            <div className="projects-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>Seen TV / Seen Palestine</h1>
              </Copy>
            </div>
            <div className="projects-content">
              <div className="projects-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>U.S. Film Tour + Engagement Strategy</p>
                </Copy>
              </div>
              <div className="projects-col">
                <div className="projects-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    <h3>
                      Seen TV turned to us to lead their first-ever U.S. film
                      tour for <em>Ahmad Alive</em> and <em>Bisan</em>. With no
                      existing U.S. team, we took their stories from Gaza
                      coast-to-coast, building audiences, partnerships, and
                      funding along the way.
                    </h3>
                  </Copy>
                </div>
                {/* Meta row for project details */}
                <div className="projects-content-wrapper projects-meta">
                  <div className="projects-hero-row">
                    <div className="projects-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Date Completed</p>
                        <p>2024</p>
                      </Copy>
                    </div>
                    <div className="projects-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Project Type</p>
                        <p>Film Tour</p>
                        <p>Audience Engagement</p>
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
                        <p>Seen TV Team</p>
                      </Copy>
                    </div>
                    <div className="projects-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Photography</p>
                        <p>Campaign Media</p>
                        <p>Tour Assets</p>
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
                  The stories of Gaza are often silenced or misrepresented in
                  mainstream media. Seen TV needed an audience experience that
                  could open hearts, shift perceptions, and build long-term
                  support, all without a U.S.-based infrastructure.
                </h3>
              </Copy>
              <div className="projects-details-img">
                <img src="/projects/projects-1.jpg" alt="Seen TV challenge" />
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
                  We treated the tour like a movement, not just a screening
                  series. Every stop was designed to spark conversation,
                  cultivate empathy, and build networks of long-term supporters
                  for Palestinian storytelling and advocacy.
                </h3>
              </Copy>
              <div className="projects-details-img">
                <img
                  src="/projects/projects-2.jpg"
                  alt="Seen TV approach"
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
                  The tour was a breakthrough moment, selling out venues,
                  sparking nationwide conversations, and bringing Gaza’s most
                  untold stories to the forefront of the American consciousness.
                </h3>
                <h3>
                  We also brokered an exclusive Canadian screening agreement
                  with a major humanitarian organization, opening new pathways
                  for donor cultivation and engagement.
                </h3>
                <h3>
                  Our work raised funds for future storytelling, deepened donor
                  engagement, and continues to fuel Seen TV’s ability to shift
                  hearts, minds, and narratives toward ending the occupation of
                  the Palestinian people.
                </h3>
              </Copy>
              <div className="projects-details-img">
                <img
                  src="/projects/projects-2.jpg"
                  alt="Seen TV impact"
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