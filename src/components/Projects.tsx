import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import fit from '../utils/fit.png';
import rest from '../utils/aws_rest.png';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  metrics?: string;
}

const projects: Project[] = [
  {
    title: 'FitClub React Application',
    description:
      'Modern fitness club website built with React.js featuring smooth animations powered by GSAP. Responsive design with optimized performance and user experience.',
    image: fit,
    tags: ['React.js', 'GSAP', 'CSS3', 'Responsive Design'],
    demoUrl: 'https://isa-fitclub.pages.dev/',
    githubUrl: 'https://github.com/isabell-ah/Fitclub-React-JS-Animation.git',
    metrics: 'Mobile-first responsive design',
  },
  {
    title: 'Lightning Network Invoice Generator',
    description:
      'Bitcoin Lightning Network application for generating payment invoices using gRPC and LND API. Features real-time payment tracking and secure invoice management.',
    image:
      'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500&h=300&fit=crop',
    tags: ['gRPC', 'LND API', 'Bitcoin Lightning', 'Node.js', 'REST APIs'],
    demoUrl: 'https://github.com/isabell-ah/lightning-network-app',
    githubUrl: 'https://github.com/isabell-ah/lightning-network-app',
    metrics: 'Lightning Network integration',
  },
  {
    title: 'Subscription Tracker API',
    description:
      'Enterprise-grade subscription management system with automated email notifications. Built with Node.js, Express, and MongoDB featuring JWT authentication, rate limiting, and Webflow integration.',
    image: rest,
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Nodemailer', 'Webflow'],
    demoUrl: 'https://github.com/isabell-ah/subscription-tracker__TheAdage',
    githubUrl: 'https://github.com/isabell-ah/subscription-tracker__TheAdage',
    metrics: 'Automated subscription management',
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className='overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow'>
      <div className='h-48 overflow-hidden'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
        />
      </div>

      <CardHeader>
        <CardTitle className='text-lg'>{project.title}</CardTitle>
        {project.metrics && (
          <Badge variant='secondary' className='w-fit text-xs'>
            {project.metrics}
          </Badge>
        )}
        <div className='flex flex-wrap gap-1 mt-2'>
          {project.tags.map((tag) => (
            <Badge key={tag} variant='outline' className='text-xs'>
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className='flex-grow'>
        <CardDescription className='text-sm leading-relaxed'>
          {project.description}
        </CardDescription>
      </CardContent>

      <CardFooter className='flex justify-between gap-2'>
        <Button variant='outline' size='sm' asChild>
          <a href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
            <Github className='mr-2 h-4 w-4' />
            Code
          </a>
        </Button>

        <Button size='sm' asChild>
          <a href={project.demoUrl} target='_blank' rel='noopener noreferrer'>
            <ExternalLink className='mr-2 h-4 w-4' />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id='projects' className='bg-muted/30 scroll-mt-16 py-8'>
      <div className='section-container'>
        <div className='text-center mb-5'>
          <Badge variant='outline' className='mb-4'>
            Portfolio
          </Badge>
          <h2 className='section-title'>Featured Projects</h2>
          <p className='section-subtitle max-w-2xl mx-auto'>
            A selection of backend systems, APIs, and full-stack applications
            demonstrating technical expertise and problem-solving capabilities.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className='text-center mt-16'>
          <Button variant='outline' size='lg' asChild>
            <a
              href='https://github.com/isabell-ah'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github className='mr-2 h-5 w-5' />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
        {/* Security Labs Section */}
        <div className='mt-16'>
          <div className='text-center mb-8'>
            <Badge variant='outline' className='mb-4'>
              Security Labs
            </Badge>
            <h3 className='text-2xl font-bold mb-4'>
              Hands-On Security Projects
            </h3>
            <p className='text-muted-foreground'>
              Practical security implementations and vulnerability assessments
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              {
                title: 'Network Security Lab',
                description:
                  'Implemented firewall rules, intrusion detection, and network monitoring protocols',
                tags: ['Firewall', 'IDS', 'Network Monitoring'],
                image: '/labs/lab1.png',
                icon: '🛡️',
              },

              {
                title: 'API Security Testing',
                description:
                  'Penetration testing, authentication bypass, and secure API design patterns',
                tags: ['Penetration Testing', 'API Security', 'Authentication'],
                image: '/labs/lab3.png',
                icon: '🔐',
              },
            ].map((lab, index) => (
              <Card
                key={index}
                className='overflow-hidden hover:shadow-md transition-shadow'
              >
                <div className='h-32 overflow-hidden'>
                  <img
                    src={lab.image}
                    alt={lab.title}
                    className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                  />
                </div>
                <div className='p-4'>
                  <div className='text-3xl mb-2'>{lab.icon}</div>
                  <h4 className='font-semibold text-lg mb-2'>{lab.title}</h4>
                  <p className='text-sm text-muted-foreground mb-3'>
                    {lab.description}
                  </p>
                  <div className='flex flex-wrap gap-1'>
                    {lab.tags.map((tag) => (
                      <Badge key={tag} variant='secondary' className='text-xs'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
