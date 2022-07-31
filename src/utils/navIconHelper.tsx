import {
  BusinessIcon,
  GeneralIcon,
  HealthIcon,
  HomeIcon,
  ScienceIcon,
  SportIcon,
  TechnologyIcon
} from '../components/icons';

export const NAV_ITEMS = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    link: '/'
  },
  {
    name: 'general',
    icon: <GeneralIcon />,
    link: '/general-news'
  },
  {
    name: 'Business',
    icon: <BusinessIcon />,
    link: '/business-news'
  },
  {
    name: 'Health',
    icon: <HealthIcon />,
    link: '/health-news'
  },
  {
    name: 'Science',
    icon: <ScienceIcon />,
    link: '/science-news'
  },
  {
    name: 'Sport',
    icon: <SportIcon />,
    link: '/sport-news'
  },
  {
    name: 'technology',
    icon: <TechnologyIcon />,
    link: '/technology-news'
  }
];
