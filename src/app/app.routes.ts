import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    data: {
      seo: {
        title: 'Custom Software, Web & AI Development Company',
        description:
          'S3 Globe Web Solutions builds websites, web apps, mobile apps, custom software, and AI agents that help businesses automate, grow, and scale.',
        path: '/',
      },
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    data: {
      seo: {
        title: 'About Us',
        description: 'Learn about S3 Globe Web Solutions — our mission, values, and why businesses trust us to build their digital products.',
        path: '/about',
      },
    },
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
    data: {
      seo: {
        title: 'Our Services',
        description: 'Website development, web apps, Android & iOS apps, custom software, digital marketing, and AI agent development.',
        path: '/services',
      },
    },
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio').then((m) => m.Portfolio),
    data: {
      seo: {
        title: 'Portfolio & Products',
        description: 'Explore projects built by S3 Globe Web Solutions, including our own SaaS products VoiceOPD and SmartSheti.',
        path: '/portfolio',
      },
    },
  },
  {
    path: 'technologies',
    loadComponent: () => import('./pages/technologies/technologies').then((m) => m.Technologies),
    data: {
      seo: {
        title: 'Technologies We Use',
        description: 'A modern stack across frontend, backend, database, cloud, and AI — Angular, React, Node.js, AWS, OpenAI, and more.',
        path: '/technologies',
      },
    },
  },
  {
    path: 'industries',
    loadComponent: () => import('./pages/industries/industries').then((m) => m.Industries),
    data: {
      seo: {
        title: 'Industries We Serve',
        description: 'We build digital products for healthcare, education, manufacturing, retail, agriculture, finance, and more.',
        path: '/industries',
      },
    },
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq').then((m) => m.Faq),
    data: {
      seo: {
        title: 'Frequently Asked Questions',
        description: 'Answers to common questions about timelines, technologies, pricing, and support at S3 Globe Web Solutions.',
        path: '/faq',
      },
    },
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    data: {
      seo: {
        title: 'Contact Us',
        description: 'Get a free consultation for your website, app, software, or AI project. Reach S3 Globe Web Solutions today.',
        path: '/contact',
      },
    },
  },
  { path: '**', redirectTo: '' },
];
