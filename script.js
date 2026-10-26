/* ====== EDIT YOUR DETAILS HERE ====== */
const SITE = {
  name: "Nyraana Fashion",
  email: "nyraanafashion@gmail.com",
  phone: "+91 8160518434",
  phoneRaw: "918160518434",
  address: "Sindhu Bhavan Road, Bopal, Ahmedabad",
};

/* Products are grouped by their design folders under images/products/. */
const PRODUCTS = [
  { name: "MSA 1574", cat: "2 Piece Sets", desc: "2 piece set", images: ["images/products/2 PCS/MSA-1574/FULL.jpeg", "images/products/2 PCS/MSA-1574/NECK DESIGN.jpeg", "images/products/2 PCS/MSA-1574/SET.jpeg"] },
  { name: "Aelxa 3 pcs", cat: "Anarkali Suits", desc: "Anarkali 3 piece suit", images: ["images/products/Anarkali-3pcs/Aelxa-3 pcs/brown.jpeg", "images/products/Anarkali-3pcs/Aelxa-3 pcs/cream blue.jpeg", "images/products/Anarkali-3pcs/Aelxa-3 pcs/light brown.jpeg", "images/products/Anarkali-3pcs/Aelxa-3 pcs/muddy-light.jpeg", "images/products/Anarkali-3pcs/Aelxa-3 pcs/pink.jpeg", "images/products/Anarkali-3pcs/Aelxa-3 pcs/red.jpeg"] },
  { name: "STX Mal Chanderi 01", cat: "Anarkali Suits", desc: "Anarkali 3 piece suit", images: ["images/products/Anarkali-3pcs/STX-MAL CHANDERI-01/DESIGN.jpeg", "images/products/Anarkali-3pcs/STX-MAL CHANDERI-01/DUPATTA.jpeg", "images/products/Anarkali-3pcs/STX-MAL CHANDERI-01/FULL.jpeg", "images/products/Anarkali-3pcs/STX-MAL CHANDERI-01/HAND DESIGN.jpeg", "images/products/Anarkali-3pcs/STX-MAL CHANDERI-01/SITTING.jpeg"] },
  { name: "ATT 133", cat: "Cord Sets", desc: "Cord set", images: ["images/products/CordSet/ATT-133/design.jpeg", "images/products/CordSet/ATT-133/full-mustard.jpeg", "images/products/CordSet/ATT-133/hand design.jpeg", "images/products/CordSet/ATT-133/pant.jpeg"] },
  { name: "Bertina", cat: "Cord Sets", desc: "Cord set", images: ["images/products/CordSet/BERTINA/BLUE_CORDSET.jpeg", "images/products/CordSet/BERTINA/PANT.jpeg", "images/products/CordSet/BERTINA/SET.jpeg", "images/products/CordSet/BERTINA/TOP.jpeg"] },
  { name: "Shenaz", cat: "Cord Sets", desc: "Cord set", images: ["images/products/CordSet/SHENAZ/FULL SET.jpeg", "images/products/CordSet/SHENAZ/PANT.jpeg", "images/products/CordSet/SHENAZ/TOP.jpeg"] },
  { name: "Sunlight", cat: "Cord Sets", desc: "Cord set", images: ["images/products/CordSet/SUNLIGHT/FULL SET.jpeg", "images/products/CordSet/SUNLIGHT/PANT.jpeg", "images/products/CordSet/SUNLIGHT/TOP.jpeg"] },
  { name: "NAG 13003", cat: "Kurtis", desc: "Kurti", images: ["images/products/kurti/NAG-13003/FULL .jpeg", "images/products/kurti/NAG-13003/KURTI DESIGN.jpeg", "images/products/kurti/NAG-13003/MODELKURTI.jpeg"] },
  { name: "VLT Vertican Print", cat: "Kurtis", desc: "Kurti", images: ["images/products/kurti/VLT-Vertican print/full.jpeg", "images/products/kurti/VLT-Vertican print/kurti designjpeg.jpeg"] },
  { name: "Bandhani Georgette Silk", cat: "Sarees", desc: "Saree", images: ["images/products/Saree/Bandhani_Geogratte_silk/Deep Purple Saree with Floral Dots.png", "images/products/Saree/Bandhani_Geogratte_silk/Deep Wine Saree with Floral Dots.png", "images/products/Saree/Bandhani_Geogratte_silk/Elegant Blue Floral Sari Portrait.png", "images/products/Saree/Bandhani_Geogratte_silk/Fuchsia Pink Bandhani Saree Ensemble.png", "images/products/Saree/Bandhani_Geogratte_silk/Full-Length Maroon Saree Portrait.png", "images/products/Saree/Bandhani_Geogratte_silk/green_bandhani.png", "images/products/Saree/Bandhani_Geogratte_silk/maroo_bandhani_saree.png", "images/products/Saree/Bandhani_Geogratte_silk/Red Saree_ Four-Way Textile Showcase.png", "images/products/Saree/Bandhani_Geogratte_silk/Smiling Woman in Orange Patterned Saree.png"] },
  { name: "Quality Walls", cat: "Sarees", desc: "Saree", images: ["images/products/Saree/Quality Walls/Chocolate Brown Saree with Gold-Red Motifs.png", "images/products/Saree/Quality Walls/Elegant Maroon Saree Portrait.png", "images/products/Saree/Quality Walls/Elegant Navy Saree Portrait.png", "images/products/Saree/Quality Walls/Elegant Teal Saree Portrait with Potli Bag.png", "images/products/Saree/Quality Walls/Elegant Woman in Green Saree.png"] },
  { name: "RDD Nidhivan", cat: "Sarees", desc: "Saree", images: ["images/products/Saree/RDD NIDHIVAN/blue.jpeg", "images/products/Saree/RDD NIDHIVAN/darkpink.jpeg", "images/products/Saree/RDD NIDHIVAN/green.png", "images/products/Saree/RDD NIDHIVAN/orange.jpeg", "images/products/Saree/RDD NIDHIVAN/pink.jpeg"] },
  { name: "Sarthi", cat: "Sarees", desc: "Saree", images: ["images/products/Saree/Sarthi/bangan saree.jpeg", "images/products/Saree/Sarthi/Deep Green Saree with Floral Embroidery.png", "images/products/Saree/Sarthi/Deep Teal Saree with Floral Embroidery.png", "images/products/Saree/Sarthi/Maroon Saree with Floral Embroidery.png", "images/products/Saree/Sarthi/Mustard Yellow Saree with Floral Embroidery.png"] },
  { name: "Fabric Top", cat: "Tops", desc: "Top", images: ["images/products/Top/fabric.jpeg"] },
  { name: "Nano Short Top", cat: "Tops", desc: "Top", images: ["images/products/Top/nano short top.jpeg"] },
];

const ICON_HANGER = `<svg class="ph" viewBox="0 0 100 80" fill="none" stroke="#9a6f10" stroke-width="3" stroke-linecap="round"><path d="M50 22c0-8 10-8 10-16S46-2 42 6"/><path d="M50 22L6 62c-2 4 0 8 6 8h76c6 0 8-4 6-8L50 22z"/></svg>`;

const page = document.body.dataset.page;
const links = [["index.html","Home","home"],["products.html","Products","products"],["about.html","About Us","about"],["inquiry.html","Inquiry","inquiry"]];

/* header + footer */
document.body.insertAdjacentHTML("afterbegin", `
<div id="loader"><img src="images/logo-circle.png" alt="Nyraana Fashion"></div>
<div id="leaves"></div>
<header><div class="container nav">
  <a href="index.html" class="brand"><img src="images/logo-circle.png" alt="Nyraana logo"><span>NYRAANA</span></a>
  <nav><ul id="menu">
    ${links.map(l=>`<li><a href="${l[0]}" class="${page===l[2]?"active":""}">${l[1]}</a></li>`).join("")}
    <li><a href="inquiry.html" class="btn">Enquire Now</a></li>
  </ul></nav>
  <button class="burger" id="burger" aria-label="Menu"><i></i><i></i><i></i></button>
</div></header>`);

document.body.insertAdjacentHTML("beforeend", `
<a class="wa" href="https://wa.me/${SITE.phoneRaw}?text=Hello%20Nyraana%20Fashion%2C%20I%20want%20to%20enquire" target="_blank" rel="noopener" aria-label="WhatsApp">
<svg width="30" height="30" viewBox="0 0 32 32" fill="#fff"><path d="M16 3a13 13 0 0 0-11 19.8L3 29l6.4-2A13 13 0 1 0 16 3zm0 23.7a10.6 10.6 0 0 1-5.4-1.5l-.4-.2-3.8 1.2 1.2-3.7-.3-.4A10.7 10.7 0 1 1 16 26.700zm5.900-8c-.3-.2-1.900-.9-2.200-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100a8.700 8.700 0 0 1-4.300-3.800c-.3-.6.300-.5.900-1.700.1-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6a1.200 1.200 0 0 0-.9.400 3.700 3.700 0 0 0-1.100 2.700 6.400 6.400 0 0 0 1.400 3.400 14.600 14.600 0 0 0 5.600 4.900c2.100.9 2.900 1 3.900.8a3.300 3.300 0 0 0 2.200-1.600 2.700 2.700 0 0 0 .2-1.600c-.1-.1-.3-.2-.6-.4z"/></svg></a>
<footer><div class="container">
  <div class="fgrid">
    <div><img src="images/logo-circle.png" alt=""><h4>Nyraana Fashion</h4><p>All types of women's fashion, made easy, graceful and accessible to everyone.</p></div>
    <div><h4>Explore</h4>${links.map(l=>`<a href="${l[0]}">${l[1]}</a>`).join("")}</div>
    <div><h4>Contact</h4><a href="tel:+${SITE.phoneRaw}">📞 ${SITE.phone}</a><a href="mailto:${SITE.email}">✉️ ${SITE.email}</a><p>📍 ${SITE.address}</p></div>
  </div>
  <div class="copy">© ${new Date().getFullYear()} Nyraana Fashion. All rights reserved.</div>
</div></footer>`);

/* loader, header, menu */
window.addEventListener("load",()=>setTimeout(()=>document.getElementById("loader").classList.add("done"),500));
const hd=document.querySelector("header");
const onScroll=()=>hd.classList.toggle("scrolled",scrollY>40);
onScroll();addEventListener("scroll",onScroll,{passive:true});
const burger=document.getElementById("burger"),menu=document.getElementById("menu");
burger.onclick=()=>{burger.classList.toggle("open");menu.classList.toggle("open")};
menu.querySelectorAll("a").forEach(a=>a.onclick=()=>{burger.classList.remove("open");menu.classList.remove("open")});

/* falling leaves */
const lv=document.getElementById("leaves");
const n=innerWidth<600?7:14;
for(let i=0;i<n;i++){const l=document.createElement("div");l.className="leaf";
  l.style.left=Math.random()*100+"%";l.style.animationDuration=14+Math.random()*16+"s";l.style.animationDelay=-Math.random()*20+"s";
  l.style.transform=`scale(${.5+Math.random()*.9})`;lv.appendChild(l)}

/* scroll reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
function observe(){document.querySelectorAll(".rv:not(.in)").forEach(el=>io.observe(el))}
observe();

/* counters */
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);
  const t=+e.target.dataset.to,s=e.target.dataset.suffix||"";let c=0;const step=Math.max(1,Math.ceil(t/60));
  const id=setInterval(()=>{c=Math.min(t,c+step);e.target.textContent=c+s;if(c>=t)clearInterval(id)},25)}),{threshold:.5});
document.querySelectorAll("[data-to]").forEach(el=>cio.observe(el));

/* testimonials */
const slides=document.querySelectorAll(".slide");
if(slides.length){const dots=document.getElementById("dots");let i=0,timer;
  slides.forEach((_,k)=>{const b=document.createElement("button");b.onclick=()=>go(k);dots.appendChild(b)});
  function go(k){i=k;slides.forEach((s,j)=>s.classList.toggle("on",j===k));[...dots.children].forEach((d,j)=>d.classList.toggle("on",j===k));clearInterval(timer);timer=setInterval(()=>go((i+1)%slides.length),5000)}
  go(0)}

/* products page */
const pg=document.getElementById("productGrid");
if(pg){
  const cats=["All",...new Set(PRODUCTS.map(p=>p.cat))];
  const f=document.getElementById("filters");
  f.innerHTML=cats.map((c,k)=>`<button class="${k?"":"on"}" data-c="${c}">${c}</button>`).join("");
  pg.innerHTML=PRODUCTS.map((p,k)=>`
   <article class="product rv d${(k%4)+1}" data-c="${p.cat}">
     <div class="pimg">${ICON_HANGER}
       <img class="photo" src="${p.images[0]}" alt="${p.name}" loading="lazy" onerror="this.remove()"></div>
     ${p.images.length>1?`<div class="pgallery" aria-label="More images of ${p.name}">${p.images.map((image,index)=>`<button type="button" class="${index===0?"selected":""}" data-image="${image}" aria-label="Show image ${index+1} of ${p.name}" aria-pressed="${index===0}"><img src="${image}" alt="" loading="lazy" onerror="this.parentElement.remove()"></button>`).join("")}</div>`:""}
     <div class="pinfo"><h3>${p.name}</h3><p>${p.desc}</p>
       <a href="inquiry.html?product=${encodeURIComponent(p.name)}">Enquire <span>→</span></a></div>
   </article>`).join("");
  observe();
  const want=new URLSearchParams(location.search).get("cat");
  function filter(c){f.querySelectorAll("button").forEach(b=>b.classList.toggle("on",b.dataset.c===c));
    pg.querySelectorAll(".product").forEach(el=>el.classList.toggle("hide",c!=="All"&&el.dataset.c!==c))}
  f.onclick=e=>{if(e.target.dataset.c)filter(e.target.dataset.c)};
  pg.onclick=e=>{const thumb=e.target.closest(".pgallery button");if(!thumb)return;
    const card=thumb.closest(".product"),photo=card.querySelector(".pimg .photo");
    photo.src=thumb.dataset.image;
    card.querySelectorAll(".pgallery button").forEach(button=>{
      const selected=button===thumb;
      button.classList.toggle("selected",selected);button.setAttribute("aria-pressed",selected);
    });
  };
  if(want&&cats.includes(want))filter(want);
}

/* inquiry form */
const form=document.getElementById("inquiryForm");
if(form){
  const prod=new URLSearchParams(location.search).get("product");
  if(prod)form.querySelector("[name=message]").value=`I am interested in: ${prod}\n\n`;
  const opts=[...new Set(PRODUCTS.map(p=>p.cat))];
  form.querySelector("[name=category]").innerHTML=`<option value="" hidden></option>`+opts.map(o=>`<option>${o}</option>`).join("")+`<option>Other</option>`;
  form.addEventListener("submit",async e=>{
    e.preventDefault();
    const btn=form.querySelector("button[type=submit]"),al=document.getElementById("alert");
    btn.disabled=true;btn.textContent="Sending…";
    try{
      const r=await fetch(`https://formsubmit.co/ajax/${SITE.email}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(form)))});
      if(!r.ok)throw 0;
      al.textContent="Thank you! Your inquiry has been sent. We will contact you very soon 💛";al.className="alert show";form.reset();
    }catch(_){
      const d=Object.fromEntries(new FormData(form));
      location.href=`mailto:${SITE.email}?subject=${encodeURIComponent("Inquiry from "+d.name)}&body=${encodeURIComponent(`Name: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\nCategory: ${d.category}\n\n${d.message}`)}`;
    }
    btn.disabled=false;btn.textContent="Send Inquiry";
  });
}
