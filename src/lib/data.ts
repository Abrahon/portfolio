export const projects = [
  {
    title: "Food Delivery App",
    slug: "food-delivery",
    imageUrls: ["/food-delivery-1.png", "/food-delivery-2.png"],
    liveUrl: "https://tap-for-delicious.web.app/",
    githubUrl: "https://github.com/tasmia-rahman/tap-for-delicious-client",
    shortDescription:
      "Discover Delicious Meals Explore a curated collection of tasty recipes designed to make cooking enjoyable and stress-free.",
    // fullDescription: "This is a full-stack food delivery app built with...",

    features: [
      "User authentication and role-based access",
      "Add to cart and checkout with Stripe",
      "Admin dashboard to manage orders",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Node js",
      "Express js",
      "Firebase",
      "Stripe",
    ],
  },

  {
    title: "Medinex",
    slug: "medinex",
    shortDescription:
      "Medinex is a healthcare management platform that streamlines patient records, appointments, and doctor interactions in one place.",
    liveUrl: "https://medinex-323b4.web.app/",
    githubUrl: "https://github.com/Abrahon/medinex",
    imageUrls: ["/medinex-1.png", "/medinex-2.png"],
    features: [
      "Role-based access for Admin, Doctor, and User using Firebase Authentication and protected route",
      "Appointment Booking: Users can view doctor availability, book appointments, and manage their booking",
      "Stripe Payment Integration: Secure online payments for appointments using Stripe",
      "Doctor Schedule Management: Doctors can set and update available time slots.",
      "Admin Dashboard: Admins can manage users (promote to doctor/admin, delete users)and handle doctor profiles",
      "Image Uploads for doctor profiles and real-time alerts using SweetAlert2.",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "MongoDB",
      " Node js",
      "Express js",
      "Firebase",
      "Stripe",
      "Framer motion",
    ],
  },
  {
    title: "Gardeno",
    slug: "gardeno",
    shortDescription:
      "Gardeno is a smart gardening solution that helps users manage their plants effortlessly with real-time care tips and reminders.",
    liveUrl: "https://gardeno.vercel.app/",
    githubUrl: "https://github.com/Abrahon/garden-service",
    imageUrls: ["/gardeno-1.png", "/gardeno-2.png"],
    features: [
      "Responsive Design: Utilizes Tailwind CSS's utility-first classes to ensure the website is mobile-friendly and adapts seamlessly to various screen sizes",
      "Interactive UI Components: Incorporates dynamic elements such as sliders, modals, and accordions to enhance user interaction",
      "Image Galleries: Features image sliders or carousels to showcase products or services effectively",
      "Contact Forms: Includes forms for users to get in touch, often with validation and responsive feedback",
      "Navigation Menus: Implements intuitive navigation, possibly with dropdowns or hamburger menus for mobile devices.",
      "Animations and Transitions: Employs subtle animations to improve user engagement and provide visual feedback.",
    ],
    technologies: ["React", "Tailwind CSS", "Carousel", "CSS"],
  },
];
