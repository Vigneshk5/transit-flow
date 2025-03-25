const menu = document.getElementById("menu-bar");
const nav = document.getElementById("navigate");
const down=document.getElementById("down");

function imgclick(c) {
  const images = document.querySelectorAll(".img-display");
  const s = images[c - 1]; // Get the correct image
  const p = document.getElementById("para" + c);

  // Hide all paragraphs
  document.querySelectorAll(".para").forEach((q) => {
      q.style.display = "none";
  });

  // Set all images to "cross.png"
  images.forEach((b) => {
      b.src = "./photos/cross.png";
  });

  // Toggle clicked image and paragraph
  if (s.src.endsWith("down.png")) {
      s.src = "./photos/cross.png";
      // s.src="http://127.0.0.1:5501/photos/cross.png";
      s.style.width = "14px";
      s.style.height = "10px";
      p.style.display = "none";
  } 
  else {
      s.src = "./photos/down.png";
      // s.src="http://127.0.0.1:5501/photos/down.png";
      s.style.width = "10px";
      s.style.height = "10px";
      p.style.display = "block";
  }

  s.style.display = "block";
}

function hover(e){
const h1=document.querySelectorAll(".hov").forEach(h1=>{
  h1.style.color="rgba(28, 31, 53, 1)";
})

const h=document.querySelectorAll(".hov")[e-1];
h.style.color=" #FFDA56";
}
function change(no){
    document.querySelectorAll(".btn").forEach(btn=>{
        btn.classList.remove('active');
    });
    document.querySelectorAll(".app").forEach(ap=>{
        ap.style.display="none";
    });
    document.querySelectorAll(".btn")[no-1].classList.add("active");
    document.getElementById("ap"+no).style.display="block";
}

let rotated=false;
console.log(down);
const divs=document.querySelectorAll("img");
divs.forEach((div)=>{
  div.classList.add("scroll-fade","visible");
});
const imgs=document.querySelectorAll("img");
imgs.forEach((img)=>{
  img.classList.add("scroll-fade","visible");
});
menu.addEventListener("click", (e) => {
        nav.style.display="flex";
        if(!rotated){

        }
        else
        {
          
        }
        rotated=!rotated;
        e.stopPropagation();
});
down.addEventListener("click",() => {
    console.log("hello");
    
    nav.style.display="none";
});
document.addEventListener("click",()=>{
    if(!nav.classList.contains("active"))
    {
        down.style.transform="rotate(0deg)";
        down.style.transition="transform 0.5s ease-in-out";
    }
})

window.addEventListener("scroll", function() {
    // this.document.getElementById("progress-bar").style="display:block";
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
  });

  document.addEventListener("scroll", function() {
   document.querySelectorAll('.scroll-blur').forEach(img => {
    let rect = img.getBoundingClientRect();
     let triggerPoint = window.innerHeight * 0.8; // Change when effect starts
      let fadeOutPoint = window.innerHeight * 0.2; // Effect stays longer
  
      if (rect.top < triggerPoint && rect.bottom > fadeOutPoint) {
        img.classList.add('visible');
      } else {
       img.classList.remove('visible');
     }
   });
  });

  document.addEventListener("scroll", function() {
    if(window.innerWidth<=480){
    document.querySelectorAll('.scroll-fade').forEach(img => {
      if (img.getBoundingClientRect().top < window.innerHeight * 0.9) {
        img.classList.add('visible');
      }
      else{
        img.classList.remove('visible'); // Removes class to repeat effect

      }
    });
  }
  });

function hove(n){
  const hov=document.querySelectorAll(".hove").forEach(h=>{
    h.style.color="rgba(28, 31, 53, 1)";
  })
  const hove=document.querySelectorAll(".hove")[n-1];
  hove.style.color="rgba(255, 190, 52, 1)";
}
  
  
  
  