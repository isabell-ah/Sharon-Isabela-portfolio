import React from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Award, CheckCircle2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  status?: 'completed' | 'in-progress';
}

const CertificationCard = ({
  title,
  issuer,
  date,
  credentialId,
  credentialUrl,
  status = 'completed',
}: CertificationProps) => {
  return (
    <Card className='h-full hover:shadow-md transition-shadow'>
      <CardHeader>
        <div className='flex items-start justify-between'>
          <div className='flex-1'>
            <CardTitle className='text-lg font-semibold'>{title}</CardTitle>
            <CardDescription className='mt-1'>
              {issuer} • {date}
            </CardDescription>
          </div>
          <Badge variant={status === 'completed' ? 'default' : 'secondary'}>
            {status === 'completed' ? 'Certified' : 'In Progress'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {credentialId && (
          <p className='text-sm text-muted-foreground mb-3'>
            <span className='font-medium'>ID:</span> {credentialId}
          </p>
        )}
        {credentialUrl && (
          <Button variant='outline' size='sm' asChild>
            <a
              href={credentialUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2'
            >
              <ExternalLink className='h-4 w-4' />
              View Certificate
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Cloud Practitioner Essentials',
      issuer: 'Amazon Web Services',
      date: '2025',

      credentialUrl:
        'https://www.credly.com/badges/4e4601d5-0774-44a4-bb5e-bc8e5cf9f308/linked_in_profile',
    },
    {
      title: 'Career Essentials in Software Development',
      issuer: 'Microsoft & LinkedIn',
      date: '2025',

      credentialUrl:
        'https://www.linkedin.com/learning/certificates/f3dff13138a1588808ec6963c67bcf7c54c3df9ab43f75e32aec190efb3deb55',
    },
    {
      title: 'LFS250: Kubernetes and Cloud Native Essentials',
      issuer: 'The Linux Foundation',
      date: '2025',

      credentialUrl:
        'https://www.credly.com/badges/119b8d04-1ca9-4271-9886-aa9d16ef2930/linked_in_profile',
    },
    {
      title: 'Verizon Cloud Platform Job Simulation',
      issuer: 'Forage',
      date: '2025',
      credentialId: 'WynKr75TxmusXxGzK',
      credentialUrl:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/uu47f3odrfruEWjKw/aNJGnRtgfiK5fQqcR_uu47f3odrfruEWjKw_TaxuzmE87dNNyDNYu_1740728183956_completion_certificate.pdf',
    },
    {
      title: 'Python Essentials 1',
      issuer: 'Cisco Networking Academy',
      date: '2025',
      credentialUrl:
        'https://www.credly.com/badges/8a55a902-7ef7-4b16-b6ab-d11ebc4b6fb9/linked_in_profile',
    },
    {
      title: 'React.js Development',
      issuer: 'Udemy',
      date: '2022',
      credentialId: 'UC-cbf64009-eddb-4ce6-9c8f-f9ba170595c8',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-cbf64009-eddb-4ce6-9c8f-f9ba170595c8/',
    },
    {
      title: 'Data Analytics Essentials',
      issuer: 'Cisco',
      date: '2024',
      credentialUrl:
        'https://www.credly.com/badges/ae7b94e8-d317-4c29-8563-678d6fcb6b79/linked_in_profile',
    },

    {
      title: 'Machine Learning for Beginners',
      issuer: 'Analytics Vidhya',
      date: '2022',
      credentialId: 'g0xd26ktqa',
    },
    {
      title: 'Cloud and Network Security',
      issuer: 'Cyber Shujaa',
      date: '2025',
      status: 'in-progress' as const,
    },
  ];

  return (
    <section id='certifications' className='scroll-mt-16 py-16 bg-muted/30'>
      <div className='section-container'>
        <div className='text-center mb-12'>
          <Badge variant='outline' className='mb-4'>
            Professional Development
          </Badge>
          <h2 className='section-title'>Certifications & Training</h2>
          <p className='section-subtitle max-w-2xl mx-auto'>
            Continuous learning through industry-recognized certifications and
            professional development programs.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>

        <div className='bg-card border border-border rounded-lg p-8 text-center'>
          <Award className='h-12 w-12 text-primary mx-auto mb-4' />
          <h3 className='text-xl font-semibold mb-2'>Continuous Learning</h3>
          <p className='text-muted-foreground mb-4'>
            Currently pursuing Cloud and Network Security certification and
            exploring advanced backend architecture patterns.
          </p>
          <Badge variant='secondary'>Learning in Progress</Badge>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
