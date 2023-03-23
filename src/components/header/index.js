import Button from '../button';
import Link from 'next/link';



const Header = () => (
  <header style={{backgroundColor: '#fff', marginBottom: '1rem'}}>
    <div className={`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`}>
      <h1 className={`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`}>
        Outsourcing made easy, For your business needs.
      </h1>
      <div className={`max-w-xl mx-auto`}>
        <p className={`mt-10 text-gray-500 text-center text-xl lg:text-3xl`}>
        Streamline your business with Middlman's outsourcing arbitrage.
        </p>
      </div>
      <div className={`mt-10 flex justify-center items-center w-full mx-auto`}>
        <Button primary>Get started</Button>
        <span className={`mx-2`}>or</span>
        <Link href='/contact'>
          <Button>Contact us</Button>
        </Link>
      </div>
    </div>
    {/* <div className={`flex justify-center w-full`}>
      <div className={`mt-4 w-full`}>
        <p className={`font-mono uppercase text-center font-medium text-sm text-gray-600`}>These folks get it</p>
        <div className={`flex items-center justify-center mx-auto flex-wrap`}>
          <Image src="/constants/svg/aws.svg" alt='aws' className='m-12 mb-8' width={100} height={100}/>
          <Image src="/constants/svg/netlify.svg" alt='netlify' className={`m-12 mb-8`} width={160} height={160}/>
          <Image src="/constants/svg/nike.svg" alt='nike' className={`m-12 mb-8`} width={120} height={120}/>
          <Image src="/constants/svg/figma.svg" alt='figma' className={`m-12 mb-8`} width={120} height={120}/>
        </div>
      </div>
    </div> */}
  </header>
);

export default Header;
