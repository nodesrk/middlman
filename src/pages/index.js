import Header from '@/components/header';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

export default function Home() {
  return (
    <>
      <Header />
      <WhatsAppWidget phoneNumber="+9779841452888" />
      <main>
        {/* <VideoSection /> */}
        <ListSection />
        <FeatureSection />
        {/* <CasesSection /> */}
        {/* <SocialProof /> */}
        {/* <Review /> */}
        <PricingTable />
      </main>
      <Footer />
    </>
  );
}
