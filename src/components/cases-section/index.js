import Image from "next/image";


// const ParticleBg = () => (
//   <Particles
//     params={{
//       particles: {
//         number: {
//           value: 400,
//           density: {
//             enable: true,
//             value_area: 3000,
//           },
//         },
//         line_linked: {
//           enable: false,
//         },
//         move: {
//           direction: `right`,
//           speed: 0.3,
//         },
//         size: {
//           value: 1,
//         },
//         opacity: {
//           anim: {
//             enable: true,
//             speed: 0.5,
//             opacity_min: 0.1,
//           },
//         },
//       },
//       interactivity: {
//         events: {
//           onclick: {
//             enable: false,
//           },
//         },
//       },
//       retina_detect: true,
//     }}
//   />
// );

const articles = [
  {
    title: `Velit reprehenderit culpa Lorem reprehenderit excepteur ipsum esse.`,
    image: `/images/case-1.webp`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Velit reprehenderit culpa Lorem reprehenderit ipsum esse.`,
    image: `/images/case-2.webp`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Velit reprehenderit culpa Lorem reprehenderit excepteur esse.`,
    image: `/images/case-3.webp`,
    alt: `Proident pariatur est.`,
  },
];

const CasesSection = () => (
  <section id="Blog">
    <div className={`w-full min-h-screen bg-gray-900 relative`}>
      <div className={`absolute left-0 top-0 h-screen w-full overflow-hidden`} />
      <div className={`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`}>
        <h1 className={`text-white text-4xl lg:text-7xl font-bold text-center`}>What will you build?</h1>
        <p className={`text-gray-400 text-center text-xl mt-12`}>
          Don’t just take our word for it — see what leaders in digital are saying
        </p>
        <div className={`mx-auto pt-24`}>
          <div className={`w-full flex flex-wrap justify-around`}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`
                }
              >
                <div className={`h-64 z-20`}>
                  <Image
                    src={article.image}
                    alt={article.alt}
                    className={`object-cover overflow-hidden rounded`}
                    width={500} height={500}
                  />
                </div>
                <div className={`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`}>
                  <p className={`uppercase text-sm text-gray-700 text-center pb-1`}>Case study</p>
                  <p className={`text-gray-500 text-center pb-1 text-sm`}>{article.title}</p>
                </div>
              </div>
            ))}
            <span
              className={
                `-mt-8 pb-12 lg:mt-4 flex items-center text-xl
                text-indigo-400 cursor-pointer z-30 hover:text-indigo-600`
              }
            >
              See all case studies
              <Image src="/constants/svg/arrow.svg" alt="Arrow Icon" width={20} height={20} className={`fill-current ml-2`} />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
