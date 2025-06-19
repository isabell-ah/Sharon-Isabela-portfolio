import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id='education' className='scroll-mt-16 py-12'>
      <div className='section-container'>
        <div className='text-center mb-12'>
          <Badge variant='outline' className='mb-4'>
            Academic Background
          </Badge>
          <h2 className='section-title'>Education</h2>
        </div>

        <div className='max-w-3xl mx-auto'>
          <Card className='hover:shadow-md transition-shadow'>
            <CardHeader>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                  <GraduationCap className='h-6 w-6 text-primary' />
                </div>
                <div className='flex-1'>
                  <CardTitle className='text-xl font-bold'>
                    Bachelor's in Applied Computer Science
                  </CardTitle>
                  <div className='flex items-center gap-4 mt-2 text-muted-foreground'>
                    <span className='font-medium'>Kisii University</span>
                    <div className='flex items-center gap-1'>
                      <MapPin className='h-4 w-4' />
                      <span>Kenya</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                Comprehensive computer science education covering software
                development, database systems, algorithms, and system
                architecture fundamentals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
