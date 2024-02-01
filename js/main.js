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
      alert("Email sent successfully");
      // You can add any success handling here
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    },
    function (error) {
      alert("Email sending failed");
      // You can add any error handling here
    }
  );
}
function goToAnotherPage(type) {
  // Sizning boshqa sahifangizning URL'ini quyidagidek belgilang
  switch (type) {
    case "itforkids":
      var targetPageURL = "courses/itforkids.html";
      break;
    case "frontend":
      var targetPageURL = "courses/frontend.html";
      break;
    case "ingliz":
      var targetPageURL = "courses/ingliz.html";
      break;
    case "python":
      var targetPageURL = "courses/python.html";
      break;
    case "fstack":
      var targetPageURL = "courses/fstack.html";
      break;
    case "mstack":
      var targetPageURL = "courses/mstack.html";
      break;
    case "vdizayn":
      var targetPageURL = "courses/vdizayn.html";
      break;
    case "gdizayn":
      var targetPageURL = "courses/gdizayn.html";
      break;
    case "main":
      var targetPageURL = "../index.html";
      break;
    case "../index/#kurslar":
      var targetPageURL = "../index.html#courses";
      break;
    default:
      var targetPageURL = type;
      break;
  }
  window.location.href = targetPageURL;
}

// Function to show the icon when the card is hovered
function showIcon() {
  document.querySelector(".icon").style.display = "block";
}

// Function to hide the icon when the mouse leaves the card
function hideIcon() {
  document.querySelector(".icon").style.display = "none";
}

// Function to toggle the visibility of the content
function toggleContent(num) {
  var rotate = document.querySelectorAll(".rotateIcon");
  rotate[num].classList.toggle("addi");

  var content = document.querySelectorAll(".collapsibleContent");
  content.forEach((item, index) => {
    if (num == index) {
      item.classList.toggle("d-none");
      item.classList.toggle("d-block");
      console.log(item, num);
    }
  });
}
