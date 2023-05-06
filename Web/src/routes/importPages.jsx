import { lazy } from 'react';

const HomePage = lazy(() => import('../page/Home/HomePage'));
const Services = lazy(()=> import('../page/Service/Services'))
const ServicesPost = lazy(()=> import ('../page/ServicesPost/ServicesPost'))

export { HomePage, Services, ServicesPost } 