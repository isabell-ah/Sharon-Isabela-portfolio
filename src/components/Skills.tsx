import React, { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'Node.js & Express', level: 90 },
    { name: 'REST/GraphQL/gRPC APIs', level: 85 },
    { name: 'MongoDB & PostgreSQL', level: 80 },
    { name: 'AWS Cloud Services', level: 75 },
    { name: 'Bitcoin/Lightning Network', level: 70 },
    { name: 'Docker & DevOps', level: 65 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id='skills' className='py-12 bg-muted/30' ref={sectionRef}>
      <div className='section-container'>
        <div className='text-center mb-8'>
          <h2 className='text-4xl font-bold mb-4'>Technical Skills</h2>
          <p className='text-xl text-muted-foreground'>
            Technologies I work with daily
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {skills.map((skill, index) => (
            <div key={index} className='space-y-3'>
              <div className='flex justify-between items-center'>
                <span className='font-semibold text-lg'>{skill.name}</span>
                <Badge variant='secondary'>{skill.level}%</Badge>
              </div>
              <div className='w-full bg-muted rounded-full h-3 overflow-hidden'>
                <div
                  className='bg-primary h-3 rounded-full transition-all duration-2000 ease-out'
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 500}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <div className='inline-flex flex-wrap gap-3'>
            {[
              'JavaScript',
              'Python',
              'TypeScript',
              'React',
              'JWT',
              'OAuth2',
              'Microservices',
              'Git',
              'Terraform',
              'Networking',
            ].map((tech) => (
              <Badge key={tech} variant='outline' className='px-4 py-2 text-sm'>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
