document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white/90', 'shadow-md', 'backdrop-blur-sm');
        } else {
            header.classList.remove('bg-white/90', 'shadow-md', 'backdrop-blur-sm');
        }
    });

    // スムーズスクロールのオフセット調整
    HTMLElement.prototype.scrollWithOffset = function() {
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = this.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - headerOffset - 20,
            behavior: "smooth"
        });
    };

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollWithOffset();
            }
        });
    });

   

    // Hero Video Play/Pause on Click
    const video = document.getElementById('hero-video');
    if (video) {
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  fadeEls.forEach(el => observer.observe(el));
});

window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.opacity = '0';
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 500); // CSSのtransition時間に合わせる
});


