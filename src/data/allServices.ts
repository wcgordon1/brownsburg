import { Home, Zap, ArrowRight, Fence, Building } from 'lucide-react';

export interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  icon: any; // Lucide icon component
  link: string;
  price: string;
}

const allServices: ServiceInfo[] = [
  {
    id: 'house-washing',
    title: 'House Washing',
    description: 'Complete exterior cleaning that restores your home\'s beauty and curb appeal.',
    icon: Home,
    link: '/services/house-washing',
    price: 'Starting at $200'
  },
  {
    id: 'roof-cleaning',
    title: 'Roof Cleaning',
    description: 'Safe, gentle cleaning that removes stains and extends your roof\'s lifespan.',
    icon: Zap,
    link: '/services/roof-cleaning',
    price: 'Starting at $300'
  },
  {
    id: 'driveway-cleaning',
    title: 'Driveway Cleaning',
    description: 'Deep cleaning that removes oil stains, dirt, and grime from concrete surfaces.',
    icon: ArrowRight,
    link: '/services/driveway-cleaning',
    price: 'Starting at $150'
  },
  {
    id: 'deck-fence-cleaning',
    title: 'Deck & Fence Cleaning',
    description: 'Restore and protect your outdoor living spaces with professional cleaning.',
    icon: Fence,
    link: '/services/deck-fence-cleaning',
    price: 'Starting at $175'
  },
  {
    id: 'commercial-cleaning',
    title: 'Commercial Cleaning',
    description: 'Professional services for businesses that enhance image and maintain property value.',
    icon: Building,
    link: '/services/commercial-cleaning',
    price: 'Custom pricing'
  }
];

export default allServices;

export const getOtherServices = (currentServiceId: string): ServiceInfo[] => {
  return allServices.filter(service => service.id !== currentServiceId);
};