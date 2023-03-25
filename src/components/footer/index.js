import Button from "../button";
import Image from "next/image";

const productLinks = [`Features`, `Customers`, `Platform`, `Pricing`, `Enterprise`, `What's new?`];
const aboutLinks = [`About Us`, `Careers` , `Events`, 'Instagram', 'Twitter', 'Facebook'];
const resourceLinks = [ 
  `Get started`,
  `Guides`,
  `Tools`,
  `Solutions`,
  `FAQs`,
  `Help Center`
];

const Footer = () => (
<footer className={`bg-white border-t border-gray-400 pt-14 pb-16`}>
    <div className={`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`}>
      <div className={`mb-14 flex items-center w-full`}>
        <Image className={`mr-4`} src="logo.svg" alt="logo" width={300} height={300} />
        <div class="trustpilot-widget" data-locale="en-US" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="641342735a153ec4fec12a71" data-style-height="24px" data-style-width="100%" data-theme="light" data-min-review-count="10" data-style-alignment="center">
  <a href="https://www.trustpilot.com/review/middlman.com" target="_blank" rel="noopener">Review us on Trustpilot</a>
</div>
        <p className={`text-4xl text-indigo-500 font-bold`}></p>
      </div>
      <div className={`w-full lg:w-1/2`}>
        <ul className={`text-lg font-light flex flex-wrap w-full`}>
          <li className={`w-1/2 md:w-1/3 lg:w-1/3`}>
            <div>
              <h4 className={`text-gray-900 text-base font-bold mb-1`}>Product</h4>
              <ul>
                {productLinks.map((link) => (
                  <li className={`text-gray-800 text-sm font-medium leading-6`} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={`w-1/2 md:w-1/3 lg:w-1/3`}>
            <div>
              <h4 className={`text-gray-900 text-base font-bold mb-1`}>Resources</h4>
              <ul>
                {resourceLinks.map((link) => (
                  <li className={`text-gray-800 text-sm font-medium leading-6`} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={`w-1/2 md:w-1/3 lg:w-1/3`}>
            <div>
              <h4 className={`text-gray-900 text-base font-bold mb-1`}>About Us</h4>
              <ul>
                {aboutLinks.map((link) => (
                  <li className={`text-gray-800 text-sm font-medium leading-6`} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className={`w-full lg:w-1/2 mt-12 lg:mt-0`}>
        <div className={`border border-gray-400 rounded py-5 px-4`}>
          <h4 className={`font-mono text-sm uppercase text-gray-500 mb-3`}>Subscribe our newsletter</h4>
          <div className={`flex w-full`}>
            <input
              aria-label="email address"
              type="text"
              className={`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`}
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
