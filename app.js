AOS.init({ duration: 1000 });

// Navbar

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.getElementById("navbar-scroll").classList.add("fixed-top");
    const navbar_height = document.querySelector(".navbar").offsetHeight;
    document.body.style.paddingTop = navbar_height + "px";
  } else {
    document.getElementById("navbar-scroll").classList.remove("fixed-top");
    document.body.style.paddingTop = "0";
    document.querySelector(".back-text").style.color = "#f95738";
    document.querySelector(".back-arrow").src = "./../img/Arrow 4.svg";
    document.querySelector(".menu-nav").style.backgroundColor = "#222";
  }
});

// Cursor Animation
let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

window.addEventListener("mousemove", (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
});

document.querySelectorAll("a").forEach((links) => {
  links.addEventListener("mouseenter", () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  });

  links.addEventListener("mouseleave", () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  });
});

// Loader
// const loader = document.getElementById("preloader");

// window.addEventListener("load", () => {
//   loader.style.display = "none";
//   cursor1.style.display = "block";
//   cursor2.style.display = "block";

//   document.querySelectorAll("a").forEach((links) => {
//     links.addEventListener("mouseenter", () => {
//       cursor2.style.display = "none";
//     });

//     links.addEventListener("mouseleave", () => {
//       cursor2.style.display = "block";
//     });
//   });
// });

// Sweet Alert
const sweetAlertClick = function () {
  Swal.fire({
    title: "Book And Table Now",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Confirm",
    denyButtonText: `Cancel`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Done!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Booking is cancelled", "", "info");
    }
  });
};

const sendMessageAlert = function () {
  Swal.fire({
    title: "Contact Us Now",
    // icon: "question",
    // iconHtml: "؟",
    confirmButtonText: "Send",
    cancelButtonText: "Cancel",
    showCancelButton: true,
    showCloseButton: true,
  });
};

const orderAlertFunction = function () {
  Swal.fire({
    title: "Order This Item",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Confirm",
    denyButtonText: `Cancel`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Order Succeeded!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Order Cancelled", "", "info");
    }
  });
};

// Tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Veno Box
new VenoBox({
  selector: ".my-link",
  spinColor: "#f95738",
  spinner: "swing",
});
