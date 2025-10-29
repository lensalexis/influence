"use client";
import "./contact.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page contact">
        <section className="contact-hero">
          <div className="container">
            <div className="contact-col">
              <div className="contact-hero-header">
                <Copy delay={0.85}>
                  <h1>Let's Build Something</h1>
                </Copy>
              </div>
              <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <Copy delay={0.1}>
                    <div className="contact-form-field">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" id="name" name="name" required />
                    </div>
                  </Copy>
                  <Copy delay={0.15}>
                    <div className="contact-form-field">
                      <label htmlFor="email">Your Email</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                  </Copy>
                  <Copy delay={0.2}>
                    <div className="contact-form-field">
                      <label htmlFor="phone">Your Phone</label>
                      <input type="tel" id="phone" name="phone" />
                    </div>
                  </Copy>
                  <Copy delay={0.25}>
                    <div className="contact-form-field">
                      <label htmlFor="message">Your Message</label>
                      <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                  </Copy>
                  <Copy delay={0.3}>
                    <button type="submit" className="contact-form-submit">
                      Send Your Message
                    </button>
                  </Copy>
                </form>
              </div>
            </div>
            <div className="contact-col">
              <div className="contact-info">
                <div className="contact-info-block">
                  <Copy delay={1}>
                    <p>New Inquiries</p>
                    <p>amna@inbrandagency.com</p>
                    <p>+1 510-219-0000</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1.15}>
                    <p>Studio Address</p>
                    <p>18 Cordova Lane</p>
                    <p>Seattle, WA 98101</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1.3}>
                    <p>Social</p>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                  </Copy>
                </div>
              </div>
              <div className="contact-img">
                <img
                  src="/contact/contact-img.jpg"
                  alt="Terrene studio workspace"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
