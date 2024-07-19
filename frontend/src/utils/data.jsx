import { Link } from "react-router-dom"

export const navbar = {
    "logoFullWhite": "/LogoFullWhite.png",
    "logoFullDark": "/LogoFullDark.png",
    "menuItems": [
        {
            "text": "Home",
            "linkTo": "/"
        },
        {
            "text": "Products & Services",
            "linkTo": "/products"
        },
        {
            "text": "Consultancy",
            "linkTo": "/consultancy"
        },
        {
            "text": "About Us",
            "linkTo": "/about"
        },
        {
            "text": "Contact",
            "linkTo": "/contact"
        },
    ],
}
export const header = {
    "sampleLocations": [
        "Volta",
        "Sunyani",
        "Western",
        "Accra",
        "Ho"
    ],
    "dotGrid": "/DotGrid.png",
    "heroImage": "HeroImage.png"
}
export const aboutus = {
    "sectionHeading": "We’re not just a service provider",
    "sectionTitle": ["We’re the gateway","to the future!"],
    "sectionParOne": "Imagine a world where bandwidth is limitless, affordable, and accessible to all. That's our vision, and we're making it a reality.Our two-pronged approach caters to both corporate trailblazers and netcentric visionaries, fueling innovation and growth across Ghana and beyond.",
    "sectionParTwo": "Experience the future of connectivity with us - limitless, unstoppable, and ahead of the curve!",
    "aboutImage": "/AboutImage.png"
}
export const services = {
    "sectionHeading": "What You Get",
    "sectionTitle": "Our Best-selling Services",
    "serviceItems": [
        {
            "icon": "/InternetSupplyIcon.png",
            "title": "Speedy Internet Supply",
            "description": "Delivered over fiber, radio and satellite, our internet supply service is the best you can get!",
            linkTo: "/internet"
        },
        {
            "icon": "/InfrastructureIcon.png",
            "title": "Network Infrastructure",
            "description": "From LANs to Wi-Fi to fiber to transmissions - we plan, design, build and maintain network systems.",
            "linkTo": "/infrastructure"
        },
        {
            "icon": "/SoftwareDevIcon.png",
            "title": "Software Development",
            "description": "Whether its an enterprise-grade software or a custom-made software product - we’re the best in the biz!",
            "linkTo": "/software"
        },
        {
            "icon": "/UnifiedCommsIcon.png",
            "title": "Consultancy Services",
            "description": "Tailored digital solutions and industry expertise to optimize and drive sustainable growth.",
            "linkTo": "/consultancy"
        },
        {
            "icon": "/AlternateEnergyIcon.png",
            "title": "Alternate Energy",
            "description": "Solar-powered inverters are fast becoming the new normal! Focus on what matters - get a backup!",
            "linkTo": "/ucp"
        },
        {
            "icon": "/DataCenterIcon.png",
            "title": "IT Research",
            "description": "In-depth analysis and insights on emerging technologies, enabling informed decision-making.",
            "linkTo": "/products"
        },
    ]
}
export const CTA = {
    "sectionHeading": "We invite you again to",
    "sectionTitle": ["Experience the future of","connectivity with us!"],
    "sectionContent": "Limitless, unstoppable, and ahead of the curve!",
}
export const howWeDeliver = {
    "sectionHeading": "Sneak A Peak",
    "sectionTitle": "How we over-deliver",
    "steps": [
        {
            "id": 1,
            "content": <span>You <Link to="/contact" className="text-blue-600 font-semibold">contact</Link> us. We schedule meetings to understand your needs.</span>
        },
        {
            "id": 2,
            "content": "We visit the location discussed to gain insights into the solution."
        },
        {
            "id": 3,
            "content": "You relax - we work! You come back to the most amazing solution ever!"
        },
    ]
}
export const CTAFormInfo = {
    "sectionHeading": "Sounds simple enough?",
    "sectionTitle": ["Get started here","or ask a question"],
    "bgImg": "/BgImgTwo.png",
    "ovalImg": "/Oval.png",
    "dottedShape": "/DottedShape.png"
}
export const footer = {
    "footerSmallImage": "/FooterCircleSmall.png",
    "footerBigImage": "/FooterCircleBig.png",
    "partOne":{
        "logo": "/LogoFullWhite.png",
        "description": "The premier provider of digital telecommunication infrastructure and connectivity in Africa, driving digital transformation and fostering economic growth across the continent.",
        "phoneNumber": "0303940450 / 0553909075",
        "contactEmail": "sales@fgbtechnology.com"
    },
    "partTwo": [
        {
            "title": "Products",
            "links": [
                {
                    "id": 1,
                    "linkTo": "/products",
                    "content": "Internet Supply"
                },
                {
                    "id": 2,
                    "linkTo": "/products",
                    "content": "Infrastructure Building"
                },
                {
                    "id": 3,
                    "linkTo": "/products",
                    "content": "Software Solutions"
                },
                {
                    "id": 4,
                    "linkTo": "/products",
                    "content": "Consultancy"
                },
                {
                    "id": 10,
                    "linkTo": "/products",
                    "content": "IT Research"
                },
                {
                    "id": 11,
                    "linkTo": "/products",
                    "content": "ALternate Energy"
                },
            ]
        },
        {
            "title": "Company",
            "links": [
                {
                    "id": 5,
                    "linkTo": "/about",
                    "content": "About FG&B"
                },
                {
                    "id": 6,
                    "linkTo": "/contact",
                    "content": "Contact & Support"
                },
                {
                    "id": 7,
                    "linkTo": "/",
                    "content": "Privacy Policy"
                },
            ]
        },
        {
            "title": "Quick Links",
            "links": [
                {
                    "id": 8,
                    "linkTo": "/contact",
                    "content": "Premium Support"
                },
                {
                    "id": 9,
                    "linkTo": "/products",
                    "content": "Our Services"
                },
                {
                    "id": 10,
                    "linkTo": "/careers",
                    "content": "Join Our Team"
                },
            ]
        },
    ],
    "partThree": {
        "title": "Follow us on:",
        "companyName": "FG&B Technology Limited"
    }
}