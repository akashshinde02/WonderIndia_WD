
  // Select all nav links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      // remove active from all
      navLinks.forEach(l => l.classList.remove("active"));

      // add active only to the clicked one
      this.classList.add("active");
    });
  });

