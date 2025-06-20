import energy from '../assets/svg/energy.svg'
import blue from '../assets/svg/blue.svg'
import dodo from '../assets/svg/dodo.svg'
import origin from '../assets/svg/origin.svg'
import ovo from '../assets/svg/ovo.svg'
import sumo from '../assets/svg/sumo.svg'
import agl from '../assets/svg/agl.svg'

import img1 from '../assets/svg/stability.svg'
import img2 from '../assets/svg/working-time.svg'
import img3 from '../assets/svg/paper.svg'
import img4 from '../assets/svg/costumer-service.svg'

import stars from '../assets/svg/stars.svg'
import profile1 from '../assets/svg/cameron.svg'
import profile2 from '../assets/svg/ronald.svg'
import profile3 from '../assets/svg/jay.svg'

import card1 from '../assets/png/Card1.png'
import card2 from '../assets/png/Card2.png'
import card3 from '../assets/png/Card3.png'
import card4 from '../assets/png/Card4.png'


export const nav = [
    { name: 'About', link: '/about' },
    { name: 'how it works', link: '/how-it-works' },
    { name: 'services', link: '/services' },
    { name: 'testimonials', link: '/testimonials' },
    { name: 'why us', link: 'why-us' },
    { name: 'FAQ', link: 'faq' }
];

export const slider = [
    {
        image: energy, alt: "company"
    },
    {
        image: blue, alt: "company"
    },
    {
        image: dodo, alt: "company"
    },
    {
        image: origin, alt: "company"
    },
    {
        image: ovo, alt: "company"
    },
    {
        image: sumo, alt: "company"
    },
    {
        image: agl, alt: "company"
    },
];

export const features = [
    {
        title: "Simplified Comparison Process",
        description: "Our intuitive platform lets you compare the best utility providers in one place, helping you make a quick and informed decision.",
        icon: img1,
    },
    {
        title: "Save Time and Money",
        description: "With up-to-date plans and pricing, you can be sure you’re getting the most competitive rates available.",
        icon: img2,
    },
    {
        title: "No Service Interruptions",
        description: "We take care of the entire switching process so you can enjoy a hassle-free experience with zero downtime.",
        icon: img3,
    },
    {
        title: "Comprehensive Support",
        description: "Whether you need assistance selecting a plan or during the switch, our dedicated support team is here to help every step of the way.",
        icon: img4,
    },
];

export const testimonial = [
    {
        name: "Cameron",
        handle: "@cameron",
        rating: stars,
        description: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.",
        profile: profile1,
    },
    {
        name: "Ronald",
        handle: "@ronald",
        rating: stars,
        description: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.",
        profile: profile2,
    },
    {
        name: "Jay Shah",
        handle: "@jayshah",
        rating: stars,
        description: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.",
        profile: profile3,
    }
];

export const cards = [
    {
        img: card1,
        title: "1. Enter Your Location and Preferences",
        content: "Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.",
    },
    {
        img: card2,
        title: "2. Compare Providers",
        content: "Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.",
    },
    {
        img: card3,
        title: "3. Switch Easily",
        content: "Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.",
    },
    {
        img: card4,
        title: "4. Choose the Best Plan",
        content: "Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.",
    }
];

export const QUEST = [
    {
        quest: "Can I switch providers if I’m currently in a contract?",
        ans: "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you.",
    },
    {
        quest: "Will my service be interrupted if I switch providers?",
        ans: "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you.",
    },
    {
        quest: "How long does it take to switch providers?",
        ans: "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you.",
    },
    {
        quest: "Is there a fee for switching providers?",
        ans: "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you.",
    }
];
