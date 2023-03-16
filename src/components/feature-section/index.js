import Image from "next/image";


const FeatureSection = () => (
  <section className={`bg-white pb-6`}>
    <div className={`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`}>
      <div className={`container mx-auto px-6 p-6 bg-white`}>
        <div className={`mb-16 text-center`}>
          <h4 className={`text-base text-indigo-600 font-semibold tracking-wide uppercase`}>Features</h4>
          <p className={`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`}>
            How we change the game
          </p>
        </div>
        <div className={`flex flex-wrap my-12`}>
          <div className={`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`}>
            <div className={`flex items-center mb-6`}>
              <Image src="/constants/svg/check.svg" width={20} height={20} className={`h-6 w-6 text-indigo-500 fill-current`} />
              <div className={`ml-4 text-xl`}>Access to a global talent pool</div>
            </div>
            <p className={`leading-loose text-gray-500`}>
              Highlight the fact that by partnering with your company, clients will have access to a wider pool of skilled professionals across the globe, 
              which can result in cost savings and improved project outcomes.
            </p>
          </div>
          <div className={`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`}>
            <div className={`flex items-center mb-6`}>
              <Image src="/constants/svg/check.svg" width={20} height={20} className={`h-6 w-6 text-indigo-500 fill-current`} />
              <div className={`ml-4 text-xl`}>Reduced risk and hassle</div>
            </div>
            <p className={`leading-loose text-gray-500 `}>
              Emphasize the fact that your company handles all the administrative and logistical details of offshoring, allowing clients to focus on their core
              business while still benefiting from the cost savings of offshoring.
            </p>
          </div>
          <div className={`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`}>
            <div className="flex items-center mb-6">
              <Image src="/constants/svg/check.svg" width={20} height={20} className={`h-6 w-6 text-indigo-500 fill-current`} />
              <div className={`ml-4 text-xl`}>Expertise and support</div>
            </div>
            <p className={`leading-loose text-gray-500`}>
              Highlight the expertise and support your company can provide, including guidance on offshore regulations, project management, 
              and cultural differences.
            </p>
          </div>
          <div className={`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`}>
            <div className={`flex items-center mb-6`}>
              <Image src="/constants/svg/check.svg" width={20} height={20} className={`h-6 w-6 text-indigo-500 fill-current`} />
              <div className={`ml-4 text-xl`}>Quality assurance</div>
            </div>
            <p className={`leading-loose text-gray-500`}>
              Emphasize the fact that your company prioritizes quality assurance and has processes in place to ensure that 
              all work delivered meets high standards.
            </p>
          </div>
          <div className={`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`}>
            <div className={`flex items-center mb-6`}>
              <Image src="/constants/svg/check.svg" width={20} height={20} className={`h-6 w-6 text-indigo-500 fill-current`} />
              <div className={`ml-4 text-xl`}>Flexible engagement models</div>
            </div>
            <p className={`leading-loose text-gray-500`}>
              Highlight the flexibility your company offers in engagement models, 
              such as dedicated teams or project-based work, to meet the specific needs of clients.
            </p>
          </div>
          <div className={`w-full md:w-1/2 lg:w-1/3 p-8`}>
            <div className={`flex items-center mb-6`}>
              <Image src="/constants/svg/check.svg" width={20} height={20} className={`h-6 w-6 text-indigo-500 fill-current`} />
              <div className={`ml-4 text-xl`}>Competitive pricing</div>
            </div>
            <p className={`leading-loose text-gray-500`}>
              Emphasize the fact that your company offers competitive pricing and cost savings 
              for clients looking to offshoring jobs without compromising quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
