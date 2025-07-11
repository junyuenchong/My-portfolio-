'use client';

import React, { useState, FormEvent } from 'react';
import Image from 'next/image';
import { assets } from 'assets/assets'; // ensure your assets module exports correctly
import { motion } from "motion/react"


const Contact = ({  }) => {
  const [result, setResult] = useState<string>('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending...');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', '5629ebc0-6a0f-439b-9b67-bafc745f5ffd');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully ✅');
        form.reset();
      } else {
        setResult(`❌ ${data.message}`);
        console.error('Submission error:', data);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setResult('Something went wrong. Please try again later.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
      id="contact"
      className='w-full px-[12%] py-16 scroll-mt-20  bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]  dark:bg-none'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mb-2 text-lg text-gray-500 font-Ovo  dark:text-white">Connect with me</motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}
        className="text-center text-4xl sm:text-5xl font-bold text-gray-800 mb-12  dark:text-white">Get in touch</motion.h2>

      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo  dark:text-white">
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit} className="max-w-2xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 m-8 ">
          <motion.input
            initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            autoComplete="name"
            className="flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white  dark:bg-darkTheme"
            aria-label="Name"
            aria-required="true"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 1.1, duration: 0.6 }}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            autoComplete="email"
            className="flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white  dark:bg-darkTheme"
            aria-label="Email"
            aria-required="true"
          />
        </div>

        <motion.textarea
          initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 1.3, duration: 0.6 }}
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border border-gray-400 rounded-md bg-white mb-6  dark:bg-darkTheme"
          aria-label="Message"
          aria-required="true"
        ></motion.textarea>

        <motion.button
        whileInView={{ scale:1.05 }} transition={{  duration: 0.3 }}
          type="submit"
          className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black/50  duration-500 dark:hover:bg-white/50 "
        >
          Submit Now
          <Image src={assets.right_arrow_white} alt="arrow icon" className="w-4 h-4" />
        </motion.button>

        <p className="mt-4 text-center text-sm text-gray-600">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
