import Image from "next/image";


const listItems = [
  {
    title: `Comprehensive candidate screening`,
    description: `Conduct a thorough screening process to identify the most suitable candidates for the job. 
    This can include skills assessments, behavioral interviews, and cultural fit evaluations to ensure that the candidate meets your specific requirements.`,
  },
  {
    title: `Transparent communication`,
    description: `Establish clear and consistent communication channels with your offshore team and ensure 
    that everyone is on the same page regarding expectations, goals, and project timelines. 
    This can help avoid misunderstandings and ensure that the project progresses smoothly.`,
  },
  {
    title: `Ongoing support and management`,
    description: `Provide ongoing support and management to your offshore team to 
    ensure that they have the necessary resources, guidance, and training to succeed in their roles. 
    This can include regular check-ins, feedback sessions, 
    and training opportunities to help them grow and develop in their roles.`,
  },
];

const ListSection = () => (
  <section className={`overflow-hidden`}>
    <div className={`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`}>
      <div className={`mb-16 text-center`}>
        <h2 className={`text-base text-indigo-600 font-semibold tracking-wide uppercase`}>Grow your revenue</h2>
        <p className={`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 max-w-4xl mx-auto`}>
          Experience hassle-free offshore hiring
        </p>
      </div>
      <div className={`flex flex-wrap -mx-8 items-center`}>
        <div className={`w-full lg:w-1/2 px-8`}>
          <ul className={`space-y-12`}>
            {listItems.map((item, index) => (
              <li className={`flex -mx-4`} key={item.title}>
                <div className={`px-4`}>
                  <span
                    className={`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={`px-4`}>
                  <h3 className={`my-4 text-xl font-semibold`}>{item.title}</h3>
                  <p className={`text-gray-500 leading-loose`}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={`w-full lg:w-1/2 px-8`}>
          <div className={`lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0 w-[100%] h-[100%]`}>
            <Image src="/constants/svg/features.svg" alt="Illustrator of a man presenting features" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
