import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { serviceData } from "@/data/serviceData";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";


import { benefitOne } from "@/components/data";

export default function Home() {
  return (
    <>
          
          <Hero />

        <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-2xl">

        {/* About Us Section */}
          <div id="AboutUs"> 
          <Benefits data={benefitOne} />
          </div>

        {/* Services  Section */}
          <div id="Services" className="pt-4"> 
          <SectionTitle title="Services"> 
            Here are some of the services we offer. We can help you with any laptop
          </SectionTitle>        
          <Testimonials ServiceData={serviceData} />
          </div>


          {/* Location Section */}
          <div id="Location" className="pt-4">
            <SectionTitle title="Our Location">
              Visit us at our location or use the map below to get directions.
            </SectionTitle>
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d43107.45074321332!2d79.95918588912643!3d7.034915705815059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f960d7307679%3A0xbcf68eda68300efa!2sINpower%20Laptop%20Repairing%20Center!5e0!3m2!1sen!2slk!4v1724247036026!5m2!1sen!2slk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="my-4"
              ></iframe>
            </div>
          </div>


          {/* FAQ Section */}
          <div id="Faq" className="pt-4">
            <SectionTitle title="Frequently Asked Questions">
              Answer your customers&apos; possible questions here. It will increase the
              conversion rate as well as support or chat requests.
            </SectionTitle>
          <Faq />
          </div>


          {/* Contact Section */}
          <div id="Contact" className="pt-4">
          <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
