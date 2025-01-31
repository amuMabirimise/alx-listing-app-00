export interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
  }
  
  export interface ButtonProps {
    label: string;
    onClick: () => void;
  }

  export interface PropertyProps {
    name: string;
    rating: number;
    address: { city: string; country: string };
    image: string;
    description: string;
    category: string[];
    price: number;
    reviews: { name: string; avatar: string; rating: number; comment: string }[];
  }

  export interface PropertyProps {
    name: string;
    rating: number;
    address: {
      city: string;
      country: string;
    };
    image: string;
    description: string;
    category: string[];
    price: number;
    reviews: {
      name: string;
      avatar: string;
      rating: number;
      comment: string;
    }[];
  }
  