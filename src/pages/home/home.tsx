import HeroSection from './components/HeroSection/HeroSection';
import DescriptionSection from '../../components/DescriptionSection/DescriptionSection';
import question from '../../assets/question.svg';
import AssistanSection from './components/AssistantSection/AssistanSection';
import bulb from '../../assets/bulb.svg';
import WeAreHiring from './components/WeAreHiring/WeAreHiring';
import Contact from './components/Contact/Contact';
import OurWorks from './components/OurWorks/OurWorks';

import React, { useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const home = () => {
  const ourWorksRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const weAreHiringRef = useRef<HTMLDivElement | null>(null);
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Navbar onContactClick={() => scrollToRef(contactRef)} onWeAreHiringClick={() => scrollToRef(weAreHiringRef)} />
      <HeroSection onSeeOurWorksClick={() => scrollToRef(ourWorksRef)} />
      <DescriptionSection
        title="Who we are"
        description="We create products that have innovation and technology at their core. We value working with talented people that understand the possibilities of today."
        imageUrl={question}
        items={[
          { title: '01', divider: '___', description: 'We develop innovative products, systems, and services' },
          { title: '02', divider: '___', description: 'Next we build teams to scale them into companies' },
          { title: '03', divider: '___', description: 'Each startup solving one problem at a time' },
        ]}
      />
      <AssistanSection />
      <DescriptionSection
        title="Our core values"
        description=""
        imageUrl={bulb}
        items={[
          {
            title: '01. Innovation',
            divider: '___',
            description:
              'Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.',
          },
          { title: '02. People', divider: '___', description: 'Talent is what enable us to create great companies.' },
        ]}
      />
      <div ref={ourWorksRef}>
        <OurWorks />
      </div>
      <div ref={weAreHiringRef}>
        <WeAreHiring />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default home;
