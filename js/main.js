let swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true, // Enable continuous loop
  autoplay: {
    delay: 3000, // Delay between slides (in milliseconds)
  },
});

function sendEmail() {
  let params = {
    subject: "Naqsh form",
    sender: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_jcoke8p", "template_lybr56n", params).then(
    function (response) {
      console.log("Email sent successfully:", response);
      // You can add any success handling here
    },
    function (error) {
      console.log("Email sending failed:", error);
      // You can add any error handling here
    }
  );
}
