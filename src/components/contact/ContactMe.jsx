import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i9xyjrr",
        "template_jmd3b0i",
        form.current,
        "dcFsyWMEj1bpaV__F"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Email Sent!");
    location.reload();
  };

  return (
    <section className="flex flex-col gap-6 md:gap-8 xl:flex-row xl:gap-[7.813rem]">
      <h2 className="font-['Ibarra_Real_Nova'] text-[2.5rem] font-bold leading-[2.625rem] tracking-[-0.36px] text-[#33323D] xl:w-[31.53%]">
        Contact Me
      </h2>
      <form
        className="flex flex-col gap-6 xl:w-[57.20%]"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col gap-2">
          <label
            className="text-[0.813rem] font-bold leading-[1.875rem] tracking-normal text-[#33323D]/80"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full bg-[#33323D]/10 px-4 py-[0.563rem] text-[0.813rem] font-normal leading-[1.875rem] tracking-normal text-[#33323D] placeholder:text-[0.813rem] placeholder:font-normal placeholder:leading-[1.875rem] placeholder:tracking-normal placeholder:text-[#33323D]/40 focus:outline-none focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[#5FB4A2]"
            type="text"
            id="name"
            placeholder="Jane Appleseed"
            required
            name="user_name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-[0.813rem] font-bold leading-[1.875rem] tracking-normal text-[#33323D]/80"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="w-full bg-[#33323D]/10 px-4 py-[0.563rem] text-[0.813rem] font-normal leading-[1.875rem] tracking-normal text-[#33323D] placeholder:text-[0.813rem] placeholder:font-normal placeholder:leading-[1.875rem] placeholder:tracking-normal placeholder:text-[#33323D]/40 focus:outline-none focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[#5FB4A2]"
            type="email"
            id="email"
            placeholder="email@example.com"
            required
            name="user_email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-[0.813rem] font-bold leading-[1.875rem] tracking-normal text-[#33323D]/80"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="h-24 w-full bg-[#33323D]/10 px-4 py-[0.563rem] text-[0.813rem] font-normal leading-[1.875rem] tracking-normal text-[#33323D] placeholder:text-[0.813rem] placeholder:font-normal placeholder:leading-[1.875rem] placeholder:tracking-normal placeholder:text-[#33323D]/40 required:outline-none focus:outline-none focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[#5FB4A2]"
            id="message"
            placeholder="How can I help?"
            required
            name="message"
          />
        </div>
        <button
          className="flex h-12 w-[12.5rem] items-center justify-center bg-[#203A4C] text-[0.75rem] font-normal uppercase leading-[0.875rem] tracking-[2px] text-white hover:bg-[#5FB4A2] active:bg-[#5FB4A2]"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
