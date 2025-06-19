import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:wanzalaisabella@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    toast({
      title: 'Email client opened!',
      description:
        'Your message has been prepared. Please send it from your email client.',
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id='contact' className='py-8'>
      <div className='section-container'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-8'>
            <h2 className='text-4xl font-bold mb-4'>Let's Work Together</h2>
            <p className='text-xl text-muted-foreground'>
              Ready to build something amazing? I'm available for backend
              development, API integrations, cloud architecture, and blockchain
              projects.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Info */}
            <div className='space-y-8'>
              <div>
                <h3 className='text-2xl font-bold mb-6'>Get In Touch</h3>
                <p className='text-muted-foreground mb-8'>
                  I'm always interested in new opportunities and exciting
                  projects. Whether you have a question or just want to say hi,
                  feel free to reach out!
                </p>
              </div>

              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                    <Mail className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <p className='font-semibold'>Email</p>
                    <a
                      href='mailto:wanzalaisabella@gmail.com'
                      className='text-muted-foreground hover:text-primary transition-colors'
                    >
                      wanzalaisabella@gmail.com
                    </a>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                    <Phone className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <p className='font-semibold'>Phone</p>
                    <a
                      href='tel:+254748232218'
                      className='text-muted-foreground hover:text-primary transition-colors'
                    >
                      +254 748 232218
                    </a>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                    <MapPin className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <p className='font-semibold'>Location</p>
                    <p className='text-muted-foreground'>Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className='pt-6'>
                <h4 className='font-semibold mb-4'>Connect with me</h4>
                <div className='flex gap-4'>
                  <Button variant='outline' size='sm' asChild>
                    <a href='https://github.com/isabell-ah' target='_blank'>
                      <Github className='mr-2 h-4 w-4' />
                      GitHub
                    </a>
                  </Button>
                  <Button variant='outline' size='sm' asChild>
                    <a
                      href='https://linkedin.com/in/sharon-isabellah'
                      target='_blank'
                    >
                      <Linkedin className='mr-2 h-4 w-4' />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-card border border-border rounded-lg p-8'>
              <h3 className='text-xl font-semibold mb-6'>Send me a message</h3>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium mb-2'
                    >
                      Name *
                    </label>
                    <Input
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Your name'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium mb-2'
                    >
                      Email *
                    </label>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='your.email@example.com'
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium mb-2'
                  >
                    Message *
                  </label>
                  <Textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Tell me about your project or how I can help...'
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type='submit'
                  className='w-full'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Preparing...' : 'Send Message'}
                  <Send className='ml-2 h-4 w-4' />
                </Button>
              </form>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className='text-center mt-12'>
            <div className='flex flex-wrap justify-center gap-4'>
              <Button size='lg' asChild>
                <a href='mailto:wanzalaisabella@gmail.com?subject=Portfolio%20Inquiry'>
                  <Mail className='mr-2 h-5 w-5' />
                  Email Me Directly
                </a>
              </Button>
              <Button variant='outline' size='lg' asChild>
                <a href='tel:+254748232218'>
                  <Phone className='mr-2 h-5 w-5' />
                  Call Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
