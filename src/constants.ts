export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: 'Residential' | 'Commercial';
  status: 'Buy' | 'Rent';
  beds?: number;
  baths?: number;
  area: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa in Jubilee Hills',
    location: 'Jubilee Hills, Hyderabad',
    price: '₹12.5 Cr',
    type: 'Residential',
    status: 'Buy',
    beds: 5,
    baths: 6,
    area: '5500 sqft',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Modern Apartment in Gachibowli',
    location: 'Gachibowli, Hyderabad',
    price: '₹1.8 Cr',
    type: 'Residential',
    status: 'Buy',
    beds: 3,
    baths: 3,
    area: '2200 sqft',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Premium Office Space',
    location: 'HITEC City, Hyderabad',
    price: '₹4.5 Lakh/mo',
    type: 'Commercial',
    status: 'Rent',
    area: '3500 sqft',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Affordable 2BHK in Kondapur',
    location: 'Kondapur, Hyderabad',
    price: '₹85 Lakh',
    type: 'Residential',
    status: 'Buy',
    beds: 2,
    baths: 2,
    area: '1250 sqft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'IT Professional',
    content: 'Ratnasri Associates helped me find the perfect 3BHK in Gachibowli. Their transparency and expert guidance made the process seamless.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Business Owner',
    content: 'I got my health and vehicle insurance through them. They explained everything clearly and helped me choose the best plans for my family.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Suresh Varma',
    role: 'Investor',
    content: 'The most trusted real estate partner in Hyderabad. Their market knowledge is exceptional.',
    rating: 4,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Real Estate Trends in Hyderabad 2024',
    excerpt: 'Discover why Hyderabad is becoming the top choice for real estate investors in India.',
    date: 'March 15, 2024',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Choosing the Right Health Insurance',
    excerpt: 'A comprehensive guide to selecting the best health insurance plan for your family.',
    date: 'March 10, 2024',
    category: 'Insurance',
    image: 'https://images.unsplash.com/photo-1505751172177-51ad18601bc8?auto=format&fit=crop&q=80&w=800',
  },
];
