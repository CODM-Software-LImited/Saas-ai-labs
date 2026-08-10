// ================= PARTICLES =================
export function initParticles(canvas) {
  const ctx = canvas.getContext("2d");
  let particles = [];
  const count = 80;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      o: Math.random() * 0.5 + 0.2
    }));
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59,130,246,${p.o})`;
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }

  resize();
  animate();
  window.addEventListener("resize", resize);
}

// ================= NEURAL NETWORK =================
export function initNeuralNetwork(canvas) {
  const ctx = canvas.getContext("2d");
  let nodes = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    nodes = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      p: Math.random() * Math.PI * 2
    }));
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const t = Date.now() * 0.001;
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, 3 + Math.sin(t + n.p), 0, Math.PI * 2);
      ctx.fillStyle = "rgba(59,130,246,0.6)";
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }

  resize();
  animate();
  window.addEventListener("resize", resize);
}

// ================= PARALLAX =================
export function startParallax() {
  let x = 0, y = 0, tx = 0, ty = 0;

  document.addEventListener("mousemove", e => {
    x = (e.clientX / window.innerWidth - 0.5) * 2;
    y = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function animate() {
    tx += (x - tx) * 0.05;
    ty += (y - ty) * 0.05;

    document.querySelectorAll(".float-card").forEach((card, i) => {
      const speed = (i + 1) * 10;
      card.style.transform = `translate(${tx * speed}px, ${ty * speed}px)`;
    });

    const cube = document.querySelector(".tech-cube");
    if (cube) {
      cube.style.transform = `rotateX(${ty * 10}deg) rotateY(${tx * 10}deg)`;
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// ================= COUNTERS =================
export function initCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = +el.dataset.target;
        let val = 0;
        const step = target / 100;
        const interval = setInterval(() => {
          val += step;
          el.textContent = Math.floor(val);
          if (val >= target) {
            el.textContent = target;
            clearInterval(interval);
          }
        }, 16);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".counter").forEach(c => observer.observe(c));
}

// ================= SMOOTH SCROLL =================
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(a.getAttribute("href"))?.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
}

// ================= BUTTON HOVER =================
export function initButtonHover() {
  document.querySelectorAll(".btn").forEach(btn => {
    btn.onmouseenter = () => btn.style.transform = "translateY(-2px)";
    btn.onmouseleave = () => btn.style.transform = "translateY(0)";
  });
}
