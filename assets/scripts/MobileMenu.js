class MobileMenu {

  constructor() {

    this.menuIcon = document.querySelector(".site-header__menu-icon")
    this.menuIconMiddle = document.querySelector(".site-header__menu-icon__middle")
    this.menuContent = document.querySelector(".site-header__overlay")
    this.events()

  }

  events() {

    this.menuIcon.addEventListener("click", () => this.toggleTheMenu())

  }

  toggleTheMenu() {

    this.menuContent.classList.toggle("site-header__overlay--is-visible")
    this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
    this.menuIconMiddle.classList.toggle("site-header__menu-icon__middle--close-x")

  }

}

new MobileMenu();

//emailJS
function initEmailAccount(){

  emailjs.init('user_TEJ6qvErK3u1SnFLlG4Gl');

}

function thankYou() {

  document.getElementById("contact-form").id = "contact-form-invisible";
  document.getElementById("contact-form-thank-you").id = "contact-form-thank-you-visible";

}

function initEmailCode() {

  document.getElementById('contact-form').addEventListener('submit', function(event) {

      event.preventDefault();

      // generate the contact number value
      this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm('ms2_contact', 'template_2hqFHke2', this);
      
      thankYou();
  });
}

initEmailAccount();
initEmailCode();

