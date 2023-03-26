import Image from 'next/image';
import Button from '../button';

const features = [
  `Offshore talent sourcing`,
  `Customized solutions`,
  `Cost-effective solutions`,
  `Ongoing support and management`,
  `Quality assurance`,
  `Scalability`,
  `Risk management`,
  `Satisfaction`,
];

const PricingTable = () => (
  <section className={`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`}>
    <div className={`relative max-w-7xl mx-auto mb-24`}>
      <div className={`overflow-hidden lg:max-w-none lg:flex`}>
        <div className={`py-8 px-6 md:px-0 lg:flex-shrink-1`}>
          <h2 className={`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`}>Are you ready?</h2>
          <p className={`mt-6 text-base leading-6 text-gray-500`}>
          Middlman is a global outsourcing company that specializes in connecting businesses with the best offshore talent. We provide customized solutions across industries to help reduce costs, increase efficiency, and scale operations. 
          
          </p>
          <div className={`mt-8`}>
            <div className={`flex items-center`}>
              <h3
                className={
                  `flex-shrink-0 pr-4 text-sm leading-5
                tracking-wider font-semibold uppercase text-indigo-600`
                }
              >
                What is included
              </h3>
              <div className={`flex-1 border-t-2 border-gray-200`} />
            </div>
            <ul className={`mt-8 lg:grid lg:grid-cols-2`}>
              {features.map((feature) => (
                <li className={`flex items-center lg:col-span-1`} key={feature}>
                  <div className={`flex-shrink-0`}>
                    <Image src="/constants/svg/check.svg" alt='Check Icon' width={20} height={20} className={`h-8 w-8 mr-3 mb-1`} />
                  </div>
                  <p className={`text-gray-600`}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={
            `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`
          }
        >
          <p className={`text-lg font-medium text-gray-800`}>Best rates in the world, only at Middlman.</p>
          <Button primary modifier="mt-6">
            Contact sales
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
