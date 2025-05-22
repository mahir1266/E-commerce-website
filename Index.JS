let button = document.getElementById('myButton');

button.addEventListener('click', function(){
    alert('Button clicked! Welcome to Customer Section');
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// Function to handle click
function handelClick () {
  const   tshirt = {
    name : "ti-shirt",
    price : "$30",
    size :" m , L , XL , XXL",
    color:"black,blue",
    instock :true
  } ;

  let detailshtml = `
  <h3>${tshirt.name}</h3>
  <p> price :${tshirt.price} </p>
  <p>size : ${tshirt.size}</p>
  <p>color:${tshirt.color}</p>
  <p> instock: ${tshirt.instock ? "instock" : "outofstock"}</p>
  `

  document.getElementById("btn").innerHTML=detailshtml
}
