"use client";
import "./index.css";
import "./preloader.css";
import { useRef, useState, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import ClientReviews from "@/components/ClientReviews/ClientReviews";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";


let isInitialLoad = true;
gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export default function Home() {
  const tagsRef = useRef(null);
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);
  const [loaderAnimating, setLoaderAnimating] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  useEffect(() => {
    if (lenis) {
      if (loaderAnimating) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [lenis, loaderAnimating]);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: "hop",
      },
    });

    if (showPreloader) {
      setLoaderAnimating(true);
      const counts = document.querySelectorAll(".count");

      counts.forEach((count, index) => {
        const digits = count.querySelectorAll(".digit h1");

        tl.to(
          digits,
          {
            y: "0%",
            duration: 1,
            stagger: 0.075,
          },
          index * 1
        );

        if (index < counts.length) {
          tl.to(
            digits,
            {
              y: "-100%",
              duration: 1,
              stagger: 0.075,
            },
            index * 1 + 1
          );
        }
      });

      tl.to(".spinner", {
        opacity: 0,
        duration: 0.3,
      });

      tl.to(
        ".word h1",
        {
          y: "0%",
          duration: 1,
        },
        "<"
      );

      tl.to(".divider", {
        scaleY: "100%",
        duration: 1,
        onComplete: () =>
          gsap.to(".divider", { opacity: 0, duration: 0.3, delay: 0.3 }),
      });

      tl.to("#word-1 h1", {
        y: "100%",
        duration: 1,
        delay: 0.3,
      });

      tl.to(
        "#word-2 h1",
        {
          y: "-100%",
          duration: 1,
        },
        "<"
      );

      tl.to(
        ".block",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.1,
          delay: 0.75,
          onStart: () => {
            gsap.to(".hero-img", { scale: 1, duration: 2, ease: "hop" });
          },
          onComplete: () => {
            gsap.set(".loader", { pointerEvents: "none" });
            setLoaderAnimating(false);
          },
        },
        "<"
      );
    }
  }, [showPreloader]);

  useGSAP(
    () => {
      if (!tagsRef.current) return;

      const tags = tagsRef.current.querySelectorAll(".what-we-do-tag");
      gsap.set(tags, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: tagsRef.current,
        start: "top 90%",
        once: true,
        animation: gsap.to(tags, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }),
      });
    },
    { scope: tagsRef }
  );

  return (
    <>
      {showPreloader && (
        <div className="loader">
          <div className="overlay">
            <div className="block"></div>
            <div className="block"></div>
          </div>
          <div className="intro-logo">
            <div className="word" id="word-1">
              <h1>
                <span>Loading</span>
              </h1>
            </div>
            <div className="word" id="word-2">
              <h1>Impact</h1>
            </div>
          </div>
          <div className="divider"></div>
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        </div>
      )}
      <Nav />
      <section className="hero">
        <div className="hero-bg">
          <img src="/home/golden-gate-bridge.jpeg" alt="" />
        </div>
        <div className="hero-gradient"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-header">
              <Copy animateOnScroll={false}>
                <h1>A strategic brand agency that harnesses the power of Muslim influence for social good.</h1>
              </Copy>
            </div>
            <div className="hero-tagline">
              <Copy animateOnScroll={false}>
                <p>
                  We help brands reach Muslim donors and consumers with clarity, respect, and results.

                </p>
              </Copy>
            </div>
            <AnimatedButton
              label="Discover More"
              route="/about"
              animateOnScroll={false}
              delay={showPreloader ? 10.3 : 1.15}
            />
          </div>
        </div>
        <div className="hero-stats">
          <div className="container">
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.1}>
                  <h2>$10M+</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.15}>
                  <p>Raised Through Our Campaigns</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.2}>
                  <h2>1000%</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.25}>
                  <p>Average ROI on SEM Campaigns</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.3}>
                  <h2>$2.8T</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.35}>
                  <p>Muslim Market We Activated</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.4}>
                  <h2>100K+</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.45}>
                  <p>Muslim Donors Engaged</p>
                </Copy>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="logo-marquee">
        <div className="logo-marquee-wrapper">
          <div className="logo-marquee-track">
            <div className="logo-marquee-item">
              <img src="/logos/logo1.svg" alt="Logo 1" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo2.svg" alt="Logo 2" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo3.svg" alt="Logo 3" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo4.svg" alt="Logo 4" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo5.svg" alt="Logo 5" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo6.svg" alt="Logo 6" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo7.svg" alt="Logo 7" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo8.svg" alt="Logo 8" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo9.svg" alt="Logo 9" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo10.svg" alt="Logo 10" />
            </div>
            {/* Duplicate for seamless loop */}
            <div className="logo-marquee-item">
              <img src="/logos/logo1.svg" alt="Logo 1" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo2.svg" alt="Logo 2" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo3.svg" alt="Logo 3" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo4.svg" alt="Logo 4" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo5.svg" alt="Logo 5" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo6.svg" alt="Logo 6" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo7.svg" alt="Logo 7" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo8.svg" alt="Logo 8" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo9.svg" alt="Logo 9" />
            </div>
            <div className="logo-marquee-item">
              <img src="/logos/logo10.svg" alt="Logo 10" />
            </div>
          </div>
        </div>
      </section>
      <section className="what-we-do">
        <div className="container">
          <div className="what-we-do-header">
            <Copy delay={0.1}>
              <h1>
                <span className="spacer">&nbsp;</span>
              Founded by a Muslim woman of color and daughter of immigrants, we move with purpose and power.
              </h1>
            </Copy>
          </div>
          <div className="what-we-do-content">
            <div className="what-we-do-col">
              <Copy delay={0.1}>
                <p className="lg">Our philosophy</p>
              </Copy>

              <Copy delay={0.15}>
                <p>
                 Genuine connection unlocks loyalty, drives advocacy, and fuels growth.
                 Amna Mirza founded Influence Brand Agency because she discovered the formula for creating meaningful,
                 lasting relationships between brands and the dynamic Muslim donor and consumer market.

                </p>
              </Copy>
            </div>
            <div className="what-we-do-col">
              <div className="what-we-do-tags" ref={tagsRef}>
                <div className="what-we-do-tag">
                  <h3>Branding</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Design</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Web</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Growth</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Ads</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Fundraising</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-projects-container">
        <div className="container">
          <div className="featured-projects-header-callout">
            <Copy delay={0.1}>
              <p>Beyond Marketing</p>
            </Copy>
          </div>
          <div className="featured-projects-header">
            <Copy delay={0.15}>
              <h2>We turn clicks into revenue</h2>
            </Copy>
          </div>
        </div>
        {/* <StickyCards /> */}
        <FeaturedProjects />
      </section>
      {/* <section className="client-reviews-container">
        <div className="container">
          <div className="client-reviews-header-callout">
            <p>Voices from our spaces</p>
          </div>
          <ClientReviews />
        </div>
      </section> */}
      <section className="gallery-callout">
        <div className="container">
          <div className="gallery-callout-col">
            <div className="gallery-callout-row">
              <div className="gallery-callout-img gallery-callout-img-1">
                <img src="/featured-projects/wck.avif" alt="" />
              </div>
              <div className="gallery-callout-img gallery-callout-img-2">
                <img src="/featured-projects/mlfa.jpg" alt="" />
                <div className="gallery-callout-img-content">
                  <h3>800+</h3>
                  <p>Project Images</p>
                </div>
              </div>
            </div>
            <div className="gallery-callout-row">
              <div className="gallery-callout-img gallery-callout-img-3">
                <img src="/featured-projects/qahwah-house-5.jpeg" alt="" />
              </div>
              <div className="gallery-callout-img gallery-callout-img-4">
                <img src="/featured-projects/seenp.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="gallery-callout-col">
            <div className="gallery-callout-copy">
              <Copy delay={0.1}>
                <h3>
                Dive into the campaigns where we transformed underestimated audiences into powerful movements and loyal communities.
                </h3>
              </Copy>
              <AnimatedButton label="View Projects" route="projects" />
            </div>
          </div>
        </div>
      </section>
      <CTAWindow
          img="/home/women-wearing-hijab.jpeg"
          header="Our Impact"
          callout="Campaigns that drive results"
          description="Explore how we've helped brands connect authentically with Muslim audiences and build movements that matter."/>

      <ConditionalFooter />
    </>
  );
}
