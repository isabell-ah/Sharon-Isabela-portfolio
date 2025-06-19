import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-muted/30 py-12 border-t border-border'>
      <div className='section-container'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='text-center md:text-left'>
            <div className='text-2xl font-bold mb-2'>
              Sharon Isabela<span className='text-primary'>.</span>
            </div>
            <p className='text-muted-foreground'>
              Backend Engineer & AWS Cloud Specialist
            </p>
          </div>

          <div className='flex items-center gap-6'>
            <div className='flex gap-4'>
              <a
                href='https://github.com/isabell-ah'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors'
                aria-label='GitHub'
              >
                <Github size={18} />
              </a>
              <a
                href='https://linkedin.com/in/sharon-isabellah'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors'
                aria-label='LinkedIn'
              >
                <Linkedin size={18} />
              </a>
              <a
                href='mailto:wanzalaisabella@gmail.com'
                className='w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors'
                aria-label='Email'
              >
                <Mail size={18} />
              </a>
            </div>

            <a
              href='#home'
              className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors'
              aria-label='Back to top'
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        <div className='border-t border-border mt-8 pt-8 text-center'>
          <p className='text-muted-foreground text-sm'>
            &copy; {new Date().getFullYear()} Sharon Isabela. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;