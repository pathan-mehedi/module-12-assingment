import React from 'react';
import Image from 'next/image';


const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder',
    imageSrc: '/team-member.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Editor',
    imageSrc: '/team-june.jpg',

  },
  {
    name: 'J James',
    role: 'Sr Editor',
    imageSrc: '/team-j-smit.jpg',

  },
  {
    name: 'June S.',
    role: 'Editor',
    imageSrc: '/team-j-jhons.jpg',

  }
];

const About = () => {
  return (
    <div className='container'>
      <section className='about-section'>
        <h2 className='about-title'>Our Mission</h2>
        <p className='about-text'>
          At MP Blog, our mission is to provide high-quality content and
          valuable insights on a wide range of topics. We believe in delivering
          information that empowers and inspires our readers to make informed
          decisions and stay up-to-date with the latest trends.
        </p>
      </section>

      <section className='about-section'>
        <h2 className='about-title'>Our Team</h2>
        <div className='team-members'>
          {teamMembers.map((member) => (
            <div key={member.name} className='team-member'>
              <Image
                src={member.imageSrc}
                alt={member.name}
                width={100}
                height={100}
                className='team-member-image'
              />
              <h3 className='team-member-name'>{member.name}</h3>
              <p className='team-member-role'>{member.role}</p>
            </div>
          ))}
        </div>
        <div className='memberSecContent'>
        <h2 className='about-title'>Why Us</h2>
        <p className='about-text'>
          Our team consists of passionate individuals from various backgrounds
          who are dedicated to creating engaging and informative content. With a
          diverse set of skills and expertise, we work together to ensure that
          our readers receive content that is both accurate and enjoyable to
          read.
        </p>
      </div>

      </section>
    </div>
  );
};

export default About;
