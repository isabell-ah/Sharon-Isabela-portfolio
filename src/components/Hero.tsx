import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Moon,
  Sun,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemDark);

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center relative overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent)]'></div>

      {/* Theme Toggle - Fixed Position */}
      <button
        onClick={toggleTheme}
        className='fixed top-6 right-6 z-50 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:bg-background/90 transition-all duration-300 hover:scale-105'
        aria-label='Toggle theme'
      >
        <Moon className='h-5 w-5 block dark:hidden text-foreground' />
        <Sun className='h-5 w-5 hidden dark:block text-foreground' />
      </button>

      <div className='section-container relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8 animate-fade-in'>
            <div className='space-y-6'>
              <Badge
                variant='outline'
                className='w-fit text-sm font-medium animate-pulse'
              >
                ⚡ Available for Hire
              </Badge>
              <div className='space-y-2'>
                <h1 className='text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent'>
                  Sharon Isabela
                </h1>
                <div className='h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full'></div>
              </div>
              <h2 className='text-2xl md:text-3xl text-muted-foreground font-medium'>
                Backend Engineer &
                <span className='text-primary block md:inline'>
                  {' '}
                  Blockchain Developer
                </span>
              </h2>
            </div>

            <p className='text-xl text-muted-foreground leading-relaxed max-w-lg'>
              Building scalable APIs, cloud infrastructure, and Bitcoin
              applications.
              <span className='text-primary font-medium'> 2+ years</span>{' '}
              turning complex problems into elegant solutions.
            </p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                className='group shadow-lg hover:shadow-xl transition-all duration-300'
                asChild
              >
                <a href='#projects'>
                  View My Work
                  <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300' />
                </a>
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='shadow-lg hover:shadow-xl transition-all duration-300'
                asChild
              >
                <a href='/Sharon Isabela Wanzala.pdf' download>
                  <Download className='mr-2 h-5 w-5' />
                  Resume
                </a>
              </Button>
            </div>

            <div className='flex gap-6 pt-6'>
              <a
                href='https://github.com/isabell-ah'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-primary/10'
              >
                <Github size={32} />
              </a>
              <a
                href='https://linkedin.com/in/sharon-isabellah'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-primary/10'
              >
                <Linkedin size={32} />
              </a>
              <a
                href='mailto:wanzalaisabella@gmail.com'
                className='text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-primary/10'
              >
                <Mail size={32} />
              </a>
            </div>
          </div>

          <div className='relative flex justify-center lg:justify-end'>
            <div className='relative'>
              <div className='absolute inset-0 animate-pulse'>
                <div className='w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 absolute -top-4 -left-4'></div>
                <div className='w-80 h-80 rounded-full bg-gradient-to-tl from-accent/30 to-primary/30 absolute top-8 left-8'></div>
              </div>

              {/* Main Profile Image */}
              <div className='relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-background shadow-2xl bg-card'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10'></div>
                <img
                  src='/favcon.ico'
                  alt='Sharon Isabela'
                  className='w-full h-full object-cover relative z-10'
                />
              </div>

              {/* Experience Badge */}
              <div className='absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-4 rounded-2xl font-bold text-lg shadow-xl border-4 border-background'>
                <div className='text-center'>
                  <div className='text-2xl font-bold'>2+</div>
                  <div className='text-sm opacity-90'>Years</div>
                </div>
              </div>

              {/* Floating Skills */}
              <div className='absolute -top-6 -left-6 bg-card border border-border px-4 py-2 rounded-full shadow-lg animate-bounce'>
                <span className='text-sm font-medium'>⚡ Backend</span>
              </div>
              <div
                className='absolute top-1 -right-4 bg-card border border-border px-4 py-2 rounded-full shadow-lg animate-bounce'
                style={{ animationDelay: '1s' }}
              >
                <span className='text-sm font-medium'>🔗 Blockchain</span>
              </div>
              <div
                className='absolute -bottom-12 left-8 bg-card border border-border px-4 py-2 rounded-full shadow-lg animate-bounce'
                style={{ animationDelay: '2s' }}
              >
                <span className='text-sm font-medium'>☁️ Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
