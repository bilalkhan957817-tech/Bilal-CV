// Loader
window.onload = ()=>{document.getElementById("loader").style.display="none";};

// Dark/Light Mode
const toggle=document.getElementById("themeToggle");
toggle.onclick=()=>{
  const current=document.documentElement.getAttribute("data-theme");
  const next=current==="dark"?"light":"dark";
  document.documentElement.setAttribute("data-theme",next);
  toggle.textContent= next=="dark"?"🌙":"☀️";
};

document.getElementById("year").textContent=new Date().getFullYear();

// Contact form
function sendMessage(e){
  e.preventDefault();const f=new FormData(e.target);
  const body=`Name: ${f.get('name')}\nEmail: ${f.get('email')}\nMessage: ${f.get('message')}`;
  window.location.href=`mailto:Bilalrashid9578@gmail.com?subject=Message&body=${encodeURIComponent(body)}`;
}
