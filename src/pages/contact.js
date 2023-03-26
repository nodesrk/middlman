import { validContact } from "@/utils/validation"
import { useState } from "react"
import toast from 'react-hot-toast'


const Contact = () => {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const initState = {
    name: '',
    email: '',
    message: ''
  }

  const [ contact, setContact ] = useState(initState)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({...contact, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const check = validContact(contact);
    if(check.errLength !== 0) {
      return toast.error(check.errMsg);
    }

    const toastId = toast.loading("Loading...")
    
    const data = await fetch(`${baseUrl}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    })
    .then(res => res.json())
    .then(res => {
      toast.success(res.msg)
      return toast.dismiss(toastId)
    })
    .catch(err => {
      toast.error(err.err)
      return toast.dismiss(toastId)
    })

    setContact(initState)
  }

  return (
    <section className="overflow-hidden py-6">
      <div className="sm:px-16 px-6">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12 mx-auto">
            <div
              className="wow fadeInUp mb-12 rounded-md py-11 px-8 border border-black sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact Us.
              </h2>
              <p className="mb-12 text-base font-medium text-black">
                We will get back to you ASAP via email.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-black"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name" value={contact.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-black py-3 px-6 text-base text-black shadow-one outline-none focus-visible:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email" value={contact.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-black py-3 px-6 text-base text-black shadow-one outline-none focus-visible:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={contact.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-black py-3 px-6 text-base text-body-color shadow-one outline-none focus-visible:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button type="submit" className="rounded-md bg-black py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact