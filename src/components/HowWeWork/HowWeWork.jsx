"use client";
import "./HowWeWork.css";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Copy from "../Copy/Copy";

gsap.registerPlugin(ScrollTrigger);

const HowWeWork = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const stepsRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollTriggersRef = useRef([]);

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 1000);
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useGSAP(
    () => {
      if (!stepsRef.current) return;
      const steps = stepsRef.current.querySelectorAll(".how-we-work-step");
      gsap.set(steps, { opacity: 0, x: -40 });
      ScrollTrigger.create({
        trigger: stepsRef.current,
        start: "top 75%",
        once: true,
        animation: gsap.to(steps, {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: -0.1,
          ease: "none",
        }),
      });
    },
    { scope: stepsRef }
  );

  useEffect(() => {
    const container = containerRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;
    if (!container || !header || !cards) return;

    if (!isMobile) {
      const mainTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        endTrigger: cards,
        end: "bottom bottom",
        pin: header,
        pinSpacing: false,
      });
      scrollTriggersRef.current.push(mainTrigger);

      const cardElements = cards.querySelectorAll(".how-we-work-card");
      cardElements.forEach((card, index) => {
        const cardTrigger = ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
          onLeave: () => {
            if (index < cardElements.length - 1) {
              setActiveStep(index + 1);
            }
          },
          onLeaveBack: () => {
            if (index > 0) {
              setActiveStep(index - 1);
            }
          },
        });
        scrollTriggersRef.current.push(cardTrigger);
      });
    }
    return () => {
      scrollTriggersRef.current.forEach((trigger) => trigger.kill());
      scrollTriggersRef.current = [];
    };
  }, [isMobile]);

  const services = [
    {
      title: "Brand Strategy",
      desc: "We build strategic roadmaps rooted in authenticity, guiding brands to resonate deeply with Muslim communities and consumers of color. Discovery leads to a brand playbook ensuring loyalty, advocacy, and lasting impact.",
      img: "/how-we-work/process-1.jpg",
    },
    {
      title: "Creative Strategy & Design",
      desc: "Don’t be fooled by aesthetics alone. Our visually compelling and culturally informed designs speak directly to Muslim audiences, authentically reflecting their identities, values, and aspirations.",
      img: "/how-we-work/process-2.jpg",
    },
    {
      title: "Website Design",
      desc: "Your website should speak the language of your audience. We design intuitive, culturally resonant digital experiences that engage donors and consumers, driving meaningful action with best-in-class UX.",
      img: "/how-we-work/process-3.jpg",
    },
    {
      title: "SEM & Google Ad Grants",
      desc: "We’re experts at turning search into strategy. Our SEM campaigns convert through smart keyword analysis, competitor insights, and AI optimization, reaching sensitive audiences others overlook.",
      img: "/how-we-work/process-4.jpg",
    },
    {
      title: "Revenue Generation Operations",
      desc: "We connect marketing, sales, and engagement so you’re not just attracting attention but converting it into long-term growth. From interest to investment, we build revenue engines for lasting success.",
      img: "/how-we-work/process-1.jpg",
    },
    {
      title: "Fundraising",
      desc: "Fundraising at its core is connecting. Our approaches resonate authentically with Muslim donors and communities of color, turning genuine engagement into lasting support across every channel.",
      img: "/how-we-work/process-2.jpg",
    },
    {
      title: "SEO & Digital Marketing",
      desc: "We make sure your content is seen and strategically positioned to dominate search results. Our organic campaigns reach diverse audiences, compelling them toward loyalty and action.",
      img: "/how-we-work/process-3.jpg",
    },
    {
      title: "Direct Mail",
      desc: "In a digital-first world, direct mail stands out. We craft targeted, culturally nuanced direct mail campaigns designed to resonate with Muslim and diverse audiences, driving engagement and response.",
      img: "/how-we-work/process-4.jpg",
    },
  ];

  return (
    <div className="how-we-work" ref={containerRef}>
      <div className="how-we-work-col how-we-work-header" ref={headerRef}>
        <div className="container">
          <div className="how-we-work-header-content">
            <div className="how-we-work-header-callout">
              <Copy delay={0.1}>
                <p>Our Services</p>
              </Copy>
            </div>
            <Copy delay={0.15}>
              <h3>
                From brand strategy to direct mail, our services are built to
                connect authentically and perform consistently.
              </h3>
            </Copy>
            <div className="how-we-work-steps" ref={stepsRef}>
              {services.map((_, i) => (
                <div
                  key={i}
                  className={`how-we-work-step ${
                    activeStep === i ? "active" : ""
                  }`}
                >
                  <p className="how-we-work-step-index">{i + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="how-we-work-col how-we-work-cards" ref={cardsRef}>
        {services.map((s, i) => (
          <div key={i} className="how-we-work-card">
            <div className="how-we-work-card-img">
              <img src={s.img} alt={s.title} />
            </div>
            <div className="how-we-work-card-copy">
              <div className="how-we-work-card-index-label">
                <h3>{s.title}</h3>
              </div>
              <p className="md">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;