import Intro from '@/components/sections/Intro';
import Features from '@/components/sections/Features';
import Scenarios from '@/components/sections/Scenarios';
import HowItWorks from '@/components/sections/HowItWorks';
import Download from '@/components/sections/Download';
import Layout from '@/components/Layout';
import Footer from '@/components/Footer';

const Index: React.FC = () => (
  <Layout>
    <Intro />
    <Features />
    <Scenarios />
    <HowItWorks />
    <Download />
    <Footer />
  </Layout>
);

export default Index;
