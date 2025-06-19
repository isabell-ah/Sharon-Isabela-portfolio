import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Download,
  Award,
  ArrowRight,
  Code,
  Cloud,
  Zap,
  Server,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const currentProjects = [
    {
      icon: <Server className='h-5 w-5 text-primary' />,
      title: 'Advanced Backend & Microservices - ALX',
      description:
        'Mastering distributed systems and microservices architecture patterns',
      status: 'Learning',
    },
    {
      icon: <Cloud className='h-5 w-5 text-primary' />,
      title: 'Cloud & Network Security  - Cyber Shujaa',
      description:
        'Deepening security expertise for cloud infrastructure and network protection',
      status: 'In Progress',
    },

    {
      icon: <Zap className='h-5 w-5 text-primary' />,
      title: 'Bitcoin/Lightning Network ',
      description: 'Building solutions with cutting-edge blockchain technology',
      status: 'Active',
    },
    {
      icon: <Award className='h-5 w-5 text-primary' />,
      title: 'AWS Cloud Architecture',
      description:
        'Pursuing certifications and building cloud-native solutions',
      status: 'Studying',
    },
  ];

  const skills = [
    'Backend Development',
    'API Design (REST, GraphQL, gRPC)',
    'AWS Cloud Services',
    'Bitcoin/Lightning Network',
    'Database Management',
    'Cloud Security',
    'DevOps Practices',
    'System Architecture',
  ];

  return (
    <section id='about' className='scroll-mt-16 py-8 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-bl from-accent/5 via-transparent to-primary/5'></div>

      <div className='section-container relative z-10'>
        <div className='text-center mb-8'>
          {/* <Badge variant='outline' className='mb-4'>
            <Code className='mr-2 h-4 w-4' />
            My Journey
          </Badge> */}
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>About Me</h2>
          <div className='h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4'></div>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            From IT support to backend engineering - here's my story and where
            I'm heading
          </p>
        </div>

        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
            {/* Story Section */}
            <div className='space-y-5'>
              <h3 className='text-2xl font-bold'>
                My <span className='text-primary'>Story</span>
              </h3>

              <div className='space-y-4 text-muted-foreground leading-relaxed'>
                <p>
                  My journey started in IT support, helping people solve
                  technical problems. I then moved to observing and monitoring
                  how these systems functioned in real-time. But I was curious
                  about how systems actually worked behind the scenes. That
                  curiosity led me to dive deep into backend development.
                </p>

                <p>
                  Over the past{' '}
                  <span className='text-primary font-semibold'>2+ years</span>,
                  I've evolved from troubleshooting software issues to building
                  scalable APIs, managing cloud infrastructure, and exploring
                  Bitcoin/Lightning Network development. Each role taught me
                  something new about building robust, secure systems.
                </p>

                <p>
                  Today, I specialize in backend engineering with a focus on API
                  development (REST, GraphQL, gRPC), AWS cloud services, and
                  emerging blockchain technologies. I'm currently expanding my
                  expertise in cloud security and DevOps practices.
                </p>
              </div>

              {/* Skills */}
              <div className='bg-card border border-border p-6 rounded-lg'>
                <h4 className='text-lg font-semibold mb-4'>Technical Skills</h4>
                <div className='flex flex-wrap gap-2'>
                  {skills.map((skill, index) => (
                    <Badge key={index} variant='secondary' className='text-sm'>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex flex-wrap gap-3'>
                <Button size='lg' asChild>
                  <a href='/Sharon Isabela Wanzala.pdf' download>
                    <Download className='mr-2 h-4 w-4' />
                    Download Resume
                  </a>
                </Button>
                <Button variant='outline' size='lg' asChild>
                  <a href='#projects'>
                    <ArrowRight className='mr-2 h-4 w-4' />
                    View My Work
                  </a>
                </Button>
              </div>
            </div>

            {/* Current Focus */}
            <div className='space-y-6'>
              <div className='bg-card border border-border p-6 rounded-lg'>
                <h4 className='text-lg font-semibold mb-4 flex items-center'>
                  <div className='w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse'></div>
                  What I'm Working On
                </h4>
                <div className='space-y-4'>
                  {currentProjects.map((project, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-3 p-3 rounded-lg bg-muted/30'
                    >
                      <div className='p-2 rounded-lg bg-primary/10'>
                        {project.icon}
                      </div>
                      <div className='flex-1'>
                        <div className='flex items-center justify-between mb-1'>
                          <p className='font-medium text-base'>
                            {project.title}
                          </p>
                          <Badge variant='outline' className='text-xs'>
                            {project.status}
                          </Badge>
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          {project.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What I'm Looking For */}
              <div className='bg-primary/5 border border-border p-6 rounded-lg'>
                <h4 className='text-lg font-semibold mb-3'>
                  What I'm Looking For
                </h4>
                <p className='text-muted-foreground mb-4 text-base'>
                  I'm seeking opportunities to work on challenging backend
                  systems, cloud infrastructure projects, or innovative
                  blockchain applications. Open to remote work and collaborative
                  environments.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <Badge variant='secondary'>Remote Work</Badge>
                  <Badge variant='secondary'>Backend Development</Badge>
                  <Badge variant='secondary'>Cloud Architecture</Badge>
                  <Badge variant='secondary'>Blockchain Projects</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
