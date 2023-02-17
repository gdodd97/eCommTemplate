import EditIcon from '@mui/icons-material/Edit';
import LoopIcon from '@mui/icons-material/Loop';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import {
    jbl_white_logo,
    diawa_white_logo,
    nike_white_logo,
    pyzel_white_logo,
    rei_coop_white_logo,
    rtic_white_logo,
    sony_white_logo,
    yeti_white_logo,
}  from "../assets/images/logos"
import { fun, electronics, kids, leisure } from '../assets/images/categories'

// Copy 

//------- All --------------------------------------------------------------------------------------------------
export const footerInfo = [
    {
        title: 'Cities',
        links: [
            { name: 'Virgina Beach, VA'},
            { name: 'Myrtle Beach, SC'},
            { name: 'St. Augustine, FL'},
            { name: 'Daytona Beach, FL'},
            { name: 'Outer Banks, NC'},
            { name: 'Hilton Head Island, SC'},
        ]
    },
    {
        title: 'Quick Links',
        links: [
            {
                name: 'Home',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Our Vision',
                link:'1'
            },
            {
                name: 'Shop Now',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'FAQ',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Careers',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Company',
                link: ''
            }
        ],         
    },
    {
        title: 'Community',
        links: [
            {
                name: 'Support',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Blog',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Newsletters',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Reviews',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Feedback',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Contact Us',
                link: 'https://http://127.0.0.1:5173/'
            },
        ]
    },
    {
        title: 'Partner',
        links: [
            {
                name: 'Our Partners',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Become a Partner',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Partner Benefits',
                link: 'https://http://127.0.0.1:5173/'
            },
        ]
    }
];

export const footerSocialIcons = [
    {
        icon: <InstagramIcon/>,
        link: '',
    },
    {
        icon: <FacebookIcon/>,
        link: '',
    },
    {
        icon: <TwitterIcon/>,
        link: '',
    },
]

export const footerSubscribe = {
    title: 'Subscribe',
    placeholder: 'Email',
    desc: 'The Blue Elf newsletter is only twice monthly and we send special news letter only discounts. We also update you on new products, deals, and expansion cities.'
}


//--------------------- LANDING PAGE ----------------------------------------------------------------------------------------------

export const heroMain = {
    title: <h1 className=' text-[36px] sm:text-[56px] font-extrabold py-6 px-0     sm:px-6 leading-none'>
                Make Memories. <br/>
                Not Compromises.
            </h1>,
    desc: "Rent products to be dropped off and picked up on your next vacation.",
    cta: "Shop Now"
}


export const howToInfo = {
    title: " Your Vacation Made Easy",
    steps: [
        {
            title: "Tell Us Where",
            paragraph: "No need to leave the condo, just let us know where to go.",
        },
        {
            title: "Tell Us When",
            paragraph: "Taking a long weekend or extended getaway? We'll make sure it's time well spent",
        },
        {
            title: "Tell Us What",
            paragraph: "Need a hammock, canopy, and surfboard? We've got you covered.",
        },
        {
            title: "Enjoy",
            paragraph: "Enjoy your hassle free vacation.",
        }
    ]
}

export const categories = {
    title: 'Something for Everyone',
    cats: [
        {
            header: 'Leisure',
            img: leisure,
            bg_color: '#58E1FC',
            link: '',
        },
        {
            header: 'Fun',
            img: fun,
            bg_color: '#FCB97E',
            link: '',
        },
        {
            header: 'Kids',
            img: kids,
            bg_color: '#FCD64C',
            link: '',
        },
        {
            header: 'Electronics',
            img: electronics,
            bg_color: '#7C84CF',
            link: '',
        },
    ]
}

export const quality = {
    title: <h1 className="text-[28px] md:text-[40px] text-center font-bold"> 
                <span className="text-primary"> 100% </span>Quality Guarantee
            </h1>,
    paragraph: <p className="text-center md:text-[20px]">
                    We only work with the best products. If you are not satisfied with the quality, we will give you a full refund or replacement for  <span className="text-primary font-bold"> Free. </span> 
                </p>,
    logos: [
        yeti_white_logo, sony_white_logo, diawa_white_logo, rtic_white_logo,
        nike_white_logo, jbl_white_logo, pyzel_white_logo, rei_coop_white_logo
    ]
}


export const easy = [
    {
        title: 'Update or Cancel an Order',
        desc: 'Make updates to where, when, and what you ordered',
        icon: <EditIcon/>,
        link: ''
    },
    {
        title: 'Exchange an Item',
        desc: "Change your mind? We'll swap it out",
        icon: <LoopIcon/>,
        link: ''
    },
    {
        title: 'Contact Support',
        desc: "Need a hand with anything? We're happy to help",
        icon: <HelpCenterIcon/>,
        link: ''
    }
]



