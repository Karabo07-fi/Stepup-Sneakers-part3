$(document).ready(function(){
  $(".accordion-header").click(function(){ $(this).next(".accordion-content").slideToggle(); });
  $(".tab-btn").click(function(){ $(".tab-content").hide(); $("#"+$(this).data("tab")).show(); });
  $(".quick-view").click(function(){ $("#productModal").fadeIn(); });
  $(".close-modal").click(function(){ $("#productModal").fadeOut(); });
});

document.addEventListener("DOMContentLoaded", function(){
  if(document.getElementById("storeMap")){
    var map = L.map('storeMap').setView([-29.0852, 26.1596], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([-29.0852, 26.1596]).addTo(map).bindPopup("Stepup Sneakers - Bloemfontein").openPopup();
  }
});

const sneakersData = [
  {name:"Nike Air Max 270", price:1899}, {name:"Adidas Yeezy Boost", price:2599},
  {name:"Jordan Retro 4", price:3200}, {name:"Puma RS-X", price:1499}
];

document.getElementById("searchSneakers")?.addEventListener("input", function(e){
  let filter = e.target.value.toLowerCase();
  document.querySelectorAll(".product-card").forEach(card=>{
    card.style.display = card.textContent.toLowerCase().includes(filter) ? "block" : "none";
  });
});

document.getElementById("enquiryForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  if(!this.checkValidity()){ this.reportValidity(); return; }
  let product = document.getElementById("product").value;
  let qty = parseInt(document.getElementById("qty").value);
  let name = document.getElementById("name").value;
  let prices = {"Nike":1899,"Adidas":2599,"Jordan":3200,"Puma":1499};
  let unit = 2000;
  for(let k in prices){ if(product.includes(k)) unit = prices[k]; }
  let total = unit * qty;
  let avail = qty>5 ? "Low Stock - 3 days" : "In Stock - Next day Bloemfontein, Free over R2000";
  let res = document.getElementById("enquiryResult");
  res.style.display="block";
  res.innerHTML = `<h3>Quote for ${name}</h3>Product: ${product} Size: ${document.getElementById("size").value} x ${qty}<br>Total: R${total}<br>Availability: ${avail}`;
});

document.getElementById("contactForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  if(!this.checkValidity()){ this.reportValidity(); return; }
  fetch("https://jsonplaceholder.typicode.com/posts", {method:"POST", body:JSON.stringify({message:document.getElementById("fullMessage").value})})
  .then(()=>{ document.getElementById("contactResult").innerHTML="<p style='color:green'>Message sent! Email compiled to info@stepupsneakers.co.za. We reply in 24h.</p>"; });
});