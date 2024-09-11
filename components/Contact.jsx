import React from "react";
import Image from "next/image";
import Link from "next/link";
import contactImg from "../public/assets/contact.jpg";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

const Contact = () => {
  const form = React.createRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9ej7ej7",
        "template_lfgr07e",
        form.current,
        "EuNrvGgn51lLuU7Nr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651E5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl glass-effect shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="hover:scale-105 ease-in duration-[250ms]">
                <Image className="rounded-xl " src={contactImg} alt="/" />
              </div>

              <div>
                <h2 className="py-2">Andrei Rutty</h2>
                <p>React Developer</p>
                <p className="py-4">
                  I am available for full-time or part-time positions. Contact
                  me and let&apos;s have a talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with Me</p>
                <div className="flex items-center justify-around py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-[250ms]">
                    <Link href="https://www.linkedin.com/in/andrei-rutty-049533223/">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-[250ms]">
                    <Link href="https://github.com/AndreiRutty">
                        <FaGithub />

                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-[250ms]">
                    <Link href="https://www.facebook.com/profile.php?id=100008701571928">
                        <FaFacebookF />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl glass-effect shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone_number"
                      className="uppercase text-sm py-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone_number"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="Send Message"
                  className="submit_button w-full p-4 text-gray-100 mt-4"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full glass-effect shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-[250ms]">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
