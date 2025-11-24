<!-- Enhanced Portfolio Website: Multi‑page + Dark/Light Mode + Loader + Animations + Demo Projects -->
<!-- FILE 1: index.html -->
<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>M. Bilal — Portfolio</title>
  <link rel="stylesheet" href="style.css" />
  <script defer src="script.js"></script>
</head>
<body>
  <!-- LOADER -->
  <div id="loader"><div class="spinner"></div></div>

  <!-- NAVBAR -->
  <nav class="nav">
    <h2 class="logo">Bilal</h2>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <button id="themeToggle">🌙</button>
  </nav>

  <!-- HERO SECTION -->
  <header class="hero fade-in">
    <div>
      <h1>Muhammad Bilal</h1>
      <p class="title">Web Developer • Designer</p>
      <a class="btn" href="/mnt/data/bilal cv pdf.pdf" download>Download CV</a>
    </div>
  </header>

  <!-- ABOUT SECTION -->
  <section class="section fade-in">
    <h2>About Me</h2>
    <p>I build modern, responsive websites with clean UI and smooth animations. I mix creativity with strong technical understanding to build professional websites.</p>
  </section>

  <!-- SKILLS -->
  <section class="section fade-in">
    <h2>Skills</h2>
    <div class="skills">
      <span>HTML</span><span>CSS</span><span>JavaScript</span>
      <span>Web Design</span><span>Graphic Design</span><span>MS Office</span>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>© <span id="year"></span> Bilal Portfolio</footer>
</body>
</html>


<!-- FILE 2: projects.html -->
<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Projects — Bilal</title>
  <link rel="stylesheet" href="style.css" />
  <script defer src="script.js"></script>
</head>
<body>
  <nav class="nav">
    <h2 class="logo">Bilal</h2>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a class="active" href="projects.html">Projects</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <button id="themeToggle">🌙</button>
  </nav>

  <section class="section fade-in">
    <h2>My Projects</h2>

    <div class="project-card">
      <h3>Personal Landing Page</h3>
      <p>A clean landing page template for personal branding.</p>
      <a class="btn" href="#">Preview</a>
    </div>

    <div class="project-card">
      <h3>Business Website Template</h3>
      <p>A 3‑page fully responsive business website you can sell.</p>
      <a class="btn" href="#">Preview</a>
    </div>

  </section>

  <footer>© <span id="year"></span> Bilal Portfolio</footer>
</body>
</html>


<!-- FILE 3: contact.html -->
<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Contact — Bilal</title>
  <link rel="stylesheet" href="style.css" />
  <script defer src="script.js"></script>
</head>
<body>
  <nav class="nav">
    <h2 class="logo">Bilal</h2>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a class="active" href="contact.html">Contact</a></li>
    </ul>
    <button id="themeToggle">🌙</button>
  </nav>

  <section class="section fade-in">
    <h2>Contact Me</h2>

    <form class="contact-form" onsubmit="sendMessage(event)">
      <input name="name" placeholder="Your name" required />
      <input name="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Message" required></textarea>
      <button class="btn" type="submit">Send</button>
    </form>
  </section>

  <footer>© <span id="year"></span> Bilal Portfolio</footer>
</body>
</html>


<!-- FILE 4: style.css -->
<style>
:root{
  --bg:#0a0f17;--text:#e6eef6;--accent:#36e3c0;--card:#111926;
}
[data-theme="light"]{
  --bg:#f4f4f4;--text:#111;--card:white;--accent:#0077ff;
}
body{
  margin:0;font-family:Inter,Arial;background:var(--bg);color:var(--text);
  transition:0.3s background;
}

/* Loader */
#loader{position:fixed;top:0;left:0;width:100%;height:100%;background:var(--bg);
 display:flex;align-items:center;justify-content:center;z-index:1000}
.spinner{width:60px;height:60px;border:6px solid #444;border-top-color:var(--accent);
 border-radius:50%;animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}

/* Navigation */
.nav{display:flex;justify-content:space-between;align-items:center;
 padding:20px 40px;background:var(--card);position:sticky;top:0}
.nav ul{display:flex;gap:20px;list-style:none;padding:0;margin:0}
.nav a{text-decoration:none;color:var(--text)}
.nav a.active{color:var(--accent);font-weight:700}
#themeToggle{background:none;border:none;font-size:22px;color:var(--text);cursor:pointer}

/* Sections */
.section{max-width:900px;margin:40px auto;padding:20px}
.fade-in{opacity:0;transform:translateY(15px);animation:fade 1s forwards}
@keyframes fade{to{opacity:1;transform:none}}

/* Skills */
.skills span{padding:8px 14px;background:var(--card);margin:5px;border-radius:6px;display:inline-block}

/* Buttons */
.btn{background:var(--accent);padding:10px 16px;color:black;border-radius:8px;text-decoration:none;font-weight:700}

/* Project Cards */
.project-card{background:var(--card);padding:20px;border-radius:10px;margin-bottom:20px}

/* Contact Form */
.contact-form input,.contact-form textarea{
  width:100%;margin:8px 0;padding:10px;border-radius:8px;border:1px solid #444;
  background:transparent;color:var(--text);
}
</style>


<!-- FILE 5: script.js -->
<script>
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
</script>
