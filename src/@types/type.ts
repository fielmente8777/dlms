export interface AboutDataType {
  title: string;
  description: string[];
  images: string[];
  link: {
    href: string;
    label: string;
  };
}

export interface OurClientProps {
  title: string;
  subtitle: string;
  description: string;
  sectors: {
    title: string[];
    src: string;
  }[];
  link: {
    href: string;
    label: string;
  };
}

export interface TestimonialsDataType {
  title: string;
  src: string;
  testimonials: {
    name: string;
    text: string;
  }[];
}
