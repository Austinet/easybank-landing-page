import onboarding from '../assets/images/icon-onboarding.svg'
import budgeting  from '../assets/images/icon-budgeting.svg'
import online from '../assets/images/icon-online.svg'
import api from '../assets/images/icon-api.svg'

import confetti from '../assets/images/image-confetti.jpg'
import currency from '../assets/images/image-currency.jpg'
import plane from '../assets/images/image-plane.jpg'
import restaurant from '../assets/images/image-restaurant.jpg'

export const features = [
    {
        id: 1,
        title: "Online Banking",
        description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
        image: online
    },
    {
        id: 2,
        title: "Simple Budgeting",
        description: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
        image: budgeting
    },
    {
        id: 3,
        title: "Fast Onboarding",
        description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
        image: onboarding
    },
    {
        id: 4,
        title: "Open API",
        description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
        image: api
    },
]

export const latestArticles = [
    {
        id: 1,
        title: "Receive money in any currency with no fees",
        description: "The world is getting smaller and we’re becoming more mobile. So why should you beforced to only receive money in a single …",
        author: "By Claire Robinson",
        image: currency,
    },
    {
        id: 2,
        title: "Treat yourself without worrying about money",
        description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
        author: "By Wilson Hutton",
        image: restaurant,
    },
    {
        id: 3,
        title: "Take your Easybank card wherever you go",
        description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
        author: "By Wilson Hutton",
        image: plane,
    },
    {
        id: 4,
        title: "Our invite-only Beta accounts are now live!",
        description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
        author: "By Claire Robinson",
        image: confetti,
    },
    
]


  
 export const navLinks = [
    {
      title: "About",
      href: "/about",
    },
  
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];
  
export  const quickLinks = [
    {
      title: "Careers",
      href: "/careers",
    },
    {
      title: "Support",
      href: "/support",
    },
    {
      title: "Privacy Policy",
      href: "/policy",
    },
  ];