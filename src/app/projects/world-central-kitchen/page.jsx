"use client";
import "../projects.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";
import { spacesData } from "../spaces.js";

const Page = () => {
  // Get next project (excluding current one)
  const currentRoute = "/projects/world-central-kitchen";
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
              src="/featured-projects/wck.avif"
              alt="World Central Kitchen Ramadan Campaign"
            />
          </div>
          <div className="projects-hero-overlay"></div>
          <div className="container">
            <div className="projects-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>World Central Kitchen</h1>
              </Copy>
            </div>
            <div className="projects-content">
              <div className="projects-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>Ramadan Campaign</p>
                </Copy>
              </div>
              <div className="projects-col">
                <div className="projects-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    <h3>
                      World Central Kitchen brought us on to run their
                      first-ever Ramadan campaign targeting Muslim donors. They
                      needed culturally relevant, religiously sensitive strategy
                      and messaging—and they needed it to deliver results.
                    </h3>
                  </Copy>
                </div>
                {/* Meta row for project details (you can adjust later) */}
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
                        <p>Fundraising Campaign</p>
                        <p>Digital Strategy</p>
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
                        <p>World Central Kitchen Team</p>
                      </Copy>
                    </div>
                    <div className="projects-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Photography</p>
                        <p>WCK Media</p>
                        <p>Campaign Assets</p>
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
                  Breaking into the Ramadan giving space for the first time
                  meant building trust with a new audience in a highly
                  competitive season. We had to make WCK stand out, communicate
                  with cultural fluency, and inspire confidence that donations
                  would have meaningful impact.
                </h3>
              </Copy>
              <div className="projects-details-img">
                <img
                  src="/projects/projects-1.jpg"
                  alt="Campaign challenge"
                />
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
                  We built digital-first campaigns designed to connect and
                  convert—speaking directly to Muslim donors with sensitivity,
                  clarity, and cultural fluency.
                </h3>
              </Copy>
              <div className="projects-details-img">
                <img
                  src="/projects/projects-2.jpg"
                  alt="Digital-first campaign approach"
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
                  Our Ramadan Gaza campaign became one of WCK’s most successful
                  fundraisers. Our first-ever SEM campaigns drove
                  multi-million-dollar results and converted new national and
                  international audiences.
                </h3>
                <h3>
                  The success led to repeat partnerships, and WCK now retains us
                  to advise on audience growth and post–October 7 communications
                  on Palestine and Lebanon.
                </h3>
                <h3>We believe at our core that compassion knows no bounds.</h3>
              </Copy>
              <div className="projects-details-img">
                <img
                  src="/projects/projects-2.jpg"
                  alt="Digital-first campaign approach"
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