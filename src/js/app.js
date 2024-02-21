



let quick_btn = document.querySelectorAll(".quick-btn")

let quick_dropdown = document.querySelectorAll(".quick-dropdown");


document.body.addEventListener("click", function (event) {
    if (
      !quick_btn.contains(event.target) &&
      !quick_dropdown.contains(event.target)
    ) {
    quick_dropdown.classList.remove("active");
    }
  });

  
