import { contact } from "@/utils/constent";
import { CountriesIcon, CustomMadeIcon, ProjectIcon } from "@/utils/icons";

export const landingPageData = {
  bannerData: {
    title:
      "<b class='max-md:text-[2.5rem]'>AI-Powered</b> <br/> Hospitality Furnishing Solution",
    images: ["/banner.webp", "/dlms_1.webp", "/dlms_2.webp", "/dlms_3.webp"],
  },
  title: ["Sofas & Seating", "Beds & Bedroom Furniture"],

  aboutData: {
    title: "About <b>DLMS</b>",
    description: [
      "For over 5 years, <b>DLMS Furnishings</b> has been the trusted partner behind the world's most memorable hotels. We understand that a guest's experience is defined not just by service, but by the comfort of the chair, the elegance of the lighting, and the functionality of the space.",
      "At <b>DLMS Furnishings</b>, we design and supply contract-grade furniture and fixtures specifically engineered for the demands of the hospitality industry. We combine award-winning design with commercial-grade durability, ensuring your spaces look stunning on opening day and for years to come. Let us help you create spaces that guests love and operations teams appreciate.",
      "<b>Mission:</b> Delivering design-led, contract-grade FF&E solutions through reliable global partnerships.",
      "<b>Vision:</b> To set the standard for refined hospitality environments through timeless design, exceptional craftsmanship, and flawless execution.",
    ],
    images: ["/about-1.webp", "/about-2.webp", "/about-3.png"],
    link: {
      href: contact.WhatsappCta,
      label: "Contact Us",
    },
  },

  clientsData: {
    title: "Our Clients",
    subtitle: "Who We <b>Work With</b>",
    description:
      "We collaborate with hospitality brands, hotel owners, and developers to deliver seamlessly executed furnishing solutions. Working closely with architects, designers, and project teams, we support premium and large-scale hospitality projects worldwide with precision, consistency, and design excellence.",
    sectors: [
      { title: ["Hotel", "Furniture"], src: "/im-5.webp" },
      { title: ["Restaurant", "Furniture"], src: "/dlms_5.webp" },
      { title: ["Cafe & Bar", "Furniture"], src: "/dlms_6.webp" },
      { title: ["Co-Living", "Furniture"], src: "/dlms_7.webp" },
      { title: ["Bnb", "Furniture"], src: "/dlms_4.webp" },
    ],
    link: {
      href: contact.WhatsappCta,
      label: "Contact Us",
    },
  },

  whyPartnerData: {
    title: "Why Partner Choose <b>DLMS</b> ?",
    link: {
      href: contact.WhatsappCta,
      label: "Contact Us",
    },
    points: [
      "<b>End-to-End Service:</b> Sourcing, procurement, warehousing, and white-glove installation.",

      "<b>Global Sourcing, Local Partnership:</b> Access to global manufacturers with management.",
      "<b>Hospitality Specific Expertise:</b> Products built for high-traffic, safety, & ease maintenance.",
      "<b>Reliable Supply Chain:</b> Timely delivery that keeps your project on schedule and budget.",
    ],
  },
  aiSolutionData: {
    title: "Our AI-Powered Solution",
    subtitle: "Crafted for <b>Hospitality</b>",
    description:
      "Powered by advanced technology, responsible practices, and tailored expertise, DLMS delivers end-to-end furnishing solutions for the hospitality industry, from Concept Design & Strategic Sourcing to Integrated Manufacturing, Global Installation, and Flexible Financing.",

    video: {
      src: "https://eazotel-client-webp-images.s3.ap-south-1.amazonaws.com/dlms/GettyImages.mp4",
      thumbnail: "video/mp4",
    },
  },
  milestoneData: {
    stats: [
      {
        value: "500+",
        label: "Projects <span>Delivered</span>",
        icon: <ProjectIcon />,
      },
      {
        value: "12+",
        label: "Countries <span>Served</span>",
        icon: <CountriesIcon />,
      },
      {
        value: "100%",
        label: "Custom <span>Made</span>",
        icon: <CustomMadeIcon />,
      },
    ],
  },

  teamData: {
    title: "Our Team",
    subtitle:
      "Meet the experts behind hospitality furnishing <b>excellence</b>",
    members: [
      {
        name: "Rahul Mehta",
        role: "Lorem Ipsum",
        src: "/im-4.webp",
      },
      {
        name: "Ananya Sharma",
        role: "Lorem Ipsum",
        src: "/im-3.webp",
      },
      {
        name: "Vikram Singh",
        role: "Lorem Ipsum",
        src: "/im-2.webp",
      },
    ],
  },

  testimonialData: {
    title: "Client <b>Testimonials</b>",
    src: "/im-1.webp",
    testimonials: [
      {
        name: "Daniel Parker",
        text: "Our guests consistently compliment the lobby design. Their pieces weren’t just furniture — they became the statement we were looking for. The entire space now feels more refined, warm, and inviting, and it truly leaves a lasting impression from the moment guests walk in. We couldn’t be happier with how everything turned out.",
      },
      {
        name: "Jennifer Clarke",
        text: "We needed furniture that could handle high guest turnover while still looking refined. DLMS provided pieces that are both durable and visually appealing.",
      },
      {
        name: "Daniel Roberts",
        text: "The entire process was professional and well-organized. From design approvals to final installation, everything was handled efficiently.",
      },
      {
        name: "Andrew Collins",
        text: "Every room turned out exactly as we envisioned. The consistency in finish and build quality across all units was impressive.",
      },
      {
        name: "Sophie Tremblay",
        text: "DLMS helped us refresh our interiors with modern, well-crafted furniture. Guest feedback since the upgrade has been very positive.",
      },
      {
        name: "Ryan Patel",
        text: "They met our renovation timelines without compromising on quality. The final result looks polished and built to last.",
      },
    ],
  },
};
