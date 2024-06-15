import emailjs from "emailjs-com";

const sendEmail = (templateParams) => {
  emailjs
    .send(
      "service_0xe49jb",
      "template_t92vi9i",
      templateParams,
      "gImnGsUotM1hA2TAW"
    )
    .then((response) => {
      console.log("Correo electrónico enviado con éxito:", response);
    })
    .catch((error) => {
      console.error("Error al enviar el correo electrónico:", error);
    });
};

export default sendEmail;
