import React, { useState } from "react";
import sendEmail from "../lib/sendEmail";

const Contact = () => {
  const [formData, setFormData] = useState({
    // Inicializa el estado del formulario con los campos que necesitas
    email: "",
    subject: "",
    message: "",
  });
  const [reCaptchaToken, setReCaptchaToken] = useState("");

  const handleRecaptcha = (value) => {
    setReCaptchaToken(value);
  };

  const handleInputChange = (e) => {
    // Actualiza el estado del formulario cuando se cambian los campos
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: import.meta.env.PUBLIC_TO_EMAIL,
      message: formData.message,
      from_name: formData.email,
    };

    //sendEmail(templateParams);
  };

  return (
    <div className=" lg:py-8 px-4 mx-auto max-w-screen-md">
      <p className="mb-6 lg:mb-12 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Para contactarte con migo puedes enviar un comentario en este formulario
        y a la brevedad te respondere, gracias!
      </p>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="g-recaptcha" data-sitekey="your_site_key"></div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="email@algo.com"
            required=""
          />
        </div>
        <div>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Titulo"
            required=""
          />
        </div>
        <div className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Deja un comentario..."
          />
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-cyan-500 via-cyan-700 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default Contact;
