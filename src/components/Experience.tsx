import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Backend Developer',
      company: 'Freelance',
      location: 'Remote',
      period: '2023 – Present',
      type: 'Freelance',
      achievements: [
        'Built RESTful APIs and implemented secure authentication with JWT and OAuth2',
        'Worked with Firestore, MongoDB, and SQLite for optimized data handling',
        'Supported documentation, testing (Postman), and API onboarding troubleshooting',
      ],
    },
    {
      title: 'DevOps Intern',
      company: 'IronRim',
      location: 'Remote',
      period: 'July 2025 – Present',
      type: 'Internship',
      achievements: [
        'Supported modules setup, monitoring, and automation of infrastructure',
        'Supported uptime tracking, incident response, and performance debugging',
        'Assisted with incident response, log analysis, and performance monitoring',
      ],
    },
    {
      title: 'Monitoring Officer | Controller',
      company: 'SGA Security',
      location: 'Nairobi, Kenya',
      period: 'Sep 2024 – Feb 2025',
      type: 'Full-time',
      achievements: [
        'Oversaw real-time fleet monitoring across East and Central Africa',
        'Automated reporting and alert systems to enhance reliability',
        'Handled business and client data analysis/reporting with operational dashboards',
      ],
    },
    {
      title: 'Controller',
      company: 'Safetrac Limited',
      location: 'Nairobi, Kenya',
      period: 'Jul 2023 – Sep 2024',
      type: 'Full-time',
      achievements: [
        'Oversaw real-time fleet monitoring across East and Central Africa',
        'Performed root cause analysis to resolve system incidents promptly',
        'Generated and analyzed reports for fuel analysis and system optimization',
      ],
    },
  ];

  return (
    <section id='experience' className='scroll-mt-16 py-12 bg-muted/30'>
      <div className='section-container'>
        <div className='text-center mb-12'>
          <Badge variant='outline' className='mb-4'>
            Career Journey
          </Badge>
          <h2 className='section-title'>Work Experience</h2>
          <p className='section-subtitle max-w-2xl mx-auto'>
            2+ years of progressive experience in backend development, DevOps,
            and system monitoring
          </p>
        </div>

        <div className='space-y-6'>
          {experiences.map((exp, index) => (
            <Card key={index} className='hover:shadow-md transition-shadow'>
              <CardHeader className='pb-4'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                  <div>
                    <CardTitle className='text-xl font-bold'>
                      {exp.title}
                    </CardTitle>
                    <div className='flex items-center gap-2 mt-2'>
                      <Building className='h-4 w-4 text-muted-foreground' />
                      <span className='font-medium'>{exp.company}</span>
                      <Badge variant='secondary' className='text-xs'>
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                  <div className='flex flex-col md:items-end gap-1'>
                    <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                      <Calendar className='h-4 w-4' />
                      {exp.period}
                    </div>
                    <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                      <MapPin className='h-4 w-4' />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className='pt-0'>
                <ul className='space-y-2'>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className='flex items-start gap-2'>
                      <div className='w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                      <span className='text-muted-foreground text-sm'>
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
