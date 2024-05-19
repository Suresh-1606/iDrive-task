function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    const os = document.getElementById('os').value;
    const browser = document.getElementById('browser').value;
    const program = document.getElementById('program').value;
    const description = document.getElementById('description').value;

    if (email && username && phone && os && browser && program && description) {
      console.log('Form submitted successfully!');
      console.log('Email:', email);
      console.log('Username:', username);
      console.log('Phone:', phone);
      console.log('Operating System:', os);
      console.log('Browser:', browser);
      console.log('Program Used:', program);
      console.log('Description:', description);

      alert('Form submitted successfully!');
    } else {
      alert('Form submission failed. Please fill in all fields.');
    }
  });
});

