"use client";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import {
  Disclosure,
  Transition,
  DisclosurePanel,
  DisclosureButton,
} from "@headlessui/react";
import emailjs from "@emailjs/browser";

export function PopupWidget() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit = async (data: any) => {
    const emailParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      const response = await emailjs.send(
        "service_pb7prtf", // Replace with your EmailJS Service ID
        "template_egydbq6", // Replace with your EmailJS Template ID
        emailParams,
        "lpm_hKo86prgugZUq" // Replace with your EmailJS Public Key
      );

      if (response.status === 200) {
        setIsSuccess(true);
        setMessage("Your message was sent successfully!");
        reset();
      } else {
        setIsSuccess(false);
        setMessage("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsSuccess(false);
      setMessage("An error occurred. Please check the console for more details.");
    }
  };

  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton className="fixed z-40 flex items-center justify-center transition duration-300 bg-blue-900 rounded-full shadow-lg right-5 bottom-5 w-12 h-12 focus:outline-none hover:bg-indigo-600 focus:bg-indigo-600 ease">
              <span className="sr-only">Open Contact form Widget</span>
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-6 h-6 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute w-6 h-6 text-white"
                as={"div"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </Transition>
            </DisclosureButton>

            <Transition
              className="fixed z-50 bottom-[80px] right-0 left-0 sm:top-auto sm:right-5 sm:left-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5"
              as="div"
            >
              <DisclosurePanel className="flex flex-col overflow-hidden left-0 w-full sm:w-[400px] h-[550px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md">
                <div className="flex flex-col items-center justify-center h-20 p-5 bg-blue-900">
                  <h3 className="text-lg text-white">How can we help?</h3>
                </div>

                <div className="flex-grow h-full p-6 overflow-auto bg-gray-50 dark:bg-trueGray-900">
                  {!isSubmitSuccessful && (
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      <div className="mb-2">
                        <label
                          htmlFor="full_name"
                          className="block mb-1 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="full_name"
                          {...register("name", {
                            required: "Full name is required",
                            maxLength: 80,
                          })}
                          className={`w-full px-3 py-2 text-gray-700 dark:text-gray-100 placeholder-gray-300 bg-white dark:bg-trueGray-700 border rounded-md ${
                            errors.name ? "border-red-600" : "border-gray-300"
                          }`}
                        />
                        {errors.name && (
                          <div className="mt-1 text-sm text-red-400">
                            {errors.name.message as string}
                          </div>
                        )}
                      </div>

                      {/* Email Input */}
                      <div className="mb-2">
                        <label
                          htmlFor="email"
                          className="block mb-1 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email", {
                            required: "Enter your email",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Please enter a valid email",
                            },
                          })}
                          className={`w-full px-3 py-2 text-gray-700 dark:text-gray-100 placeholder-gray-300 bg-white dark:bg-trueGray-700 border rounded-md ${
                            errors.email ? "border-red-600" : "border-gray-300"
                          }`}
                        />
                        {errors.email && (
                          <div className="mt-1 text-sm text-red-400">
                            {errors.email.message as string}
                          </div>
                        )}
                      </div>

                      <div className="mb-2">
                        <label
                          htmlFor="message"
                          className="block mb-1 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Your Message
                        </label>

                        <textarea
                          rows={4}
                          id="message"
                          {...register("message", {
                            required: "Enter your message",
                          })}
                          className={`w-full px-3 py-2 text-gray-700 dark:text-gray-100 placeholder-gray-300 bg-white dark:bg-trueGray-700 border rounded-md ${
                            errors.message ? "border-red-600" : "border-gray-300"
                          }`}
                          required
                        ></textarea>
                        {errors.message && (
                          <div className="text-sm text-red-400">
                            {errors.message.message as string}
                          </div>
                        )}
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="w-full px-3 py-4 text-white bg-blue-900 rounded-md"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </form>
                  )}

                  {isSubmitSuccessful && (
                    <div className="text-center">
                      <h3 className={`py-5 text-xl ${isSuccess ? "text-green-500" : "text-red-500"}`}>
                        {isSuccess ? "Message sent successfully!" : "Failed to send message."}
                      </h3>
                      <button
                        className="mt-6 text-sky-200 bg-blue-950 py-2 px-4 rounded-md"
                        onClick={() => reset()}
                      >
                        Go back
                      </button>
                    </div>
                  )}
                </div>
              </DisclosurePanel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
