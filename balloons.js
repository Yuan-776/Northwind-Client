document.addEventListener("DOMContentLoaded", function () {
  const animations = ["animate__bounce", "animate__flash", "animate__pulse", "animate__rubberBand", "animate__shakeX", "animate__shakeY", "animate__headShake", "animate__swing", "animate__tada", "animate__wobble", "animate__jello", "animate__heartBeat"];
  const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
  const greeting = document.querySelector("h1.greeting");
  greeting.classList.add(randomAnimation);

  const elem = document.getElementById("dob");
  const datepicker = new Datepicker(elem, {
    autohide: true,
    format: "MM-dd",
  });

  document.querySelectorAll(".form-check-input").forEach((c) => (c.checked = false));

  document.getElementById("checkAllBtn").addEventListener("click", function () {
    const checkboxes = document.querySelectorAll(".form-check-input");
    const allChecked = Array.from(checkboxes).every((checkbox) => checkbox.checked);
    checkboxes.forEach((checkbox) => {
      checkbox.checked = !allChecked;
      const balloonImg = document.getElementById(checkbox.id + "Img");
      balloonImg.style.visibility = "visible";
      balloonImg.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");

      if (checkbox.checked) {
        balloonImg.classList.add("animate__animated", "animate__bounceInDown");
      } else {
        balloonImg.classList.add("animate__animated", "animate__bounceOutUp");
      }
    });
  });

  document.getElementById("submit").addEventListener("click", function () {
    const selected = Array.from(document.querySelectorAll(".form-check-input")).some((checkbox) => checkbox.checked);
    if (!selected) {
      const toastElement = document.createElement("div");
      toastElement.className = "toast show align-items-center text-bg-danger border-0 position-fixed bottom-0 end-0 p-3";
      toastElement.innerHTML = `
        <div class="d-flex">
          <div class="toast-body">Please select at least one balloon.</div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
      `;
      document.body.appendChild(toastElement);

      setTimeout(() => toastElement.remove(), 3000);
    }
  });

  document.querySelectorAll(".form-check-label").forEach((label) => {
    label.addEventListener("mouseenter", function () {
      const color = label.textContent.split(" ")[0].toLowerCase();
      greeting.style.color = color;
    });
    label.addEventListener("mouseleave", function () {
      greeting.style.color = "slategray";
    });
  });

  document.getElementById("checkbox-card").addEventListener("change", function (e) {
    if (e.target.classList.contains("form-check-input")) {
      const elem = document.getElementById(e.target.id + "Img");
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");

      e.target.checked
        ? elem.classList.add("animate__animated", "animate__bounceInDown")
        : elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });
});
