// ── KaTeX math rendering ──────────────────────────────────────────────────────
var elements = document.getElementsByTagName('script');
Array.prototype.forEach.call(elements, function(element) {
  if (element.type.indexOf('math/tex') != -1) {
    var textToRender = element.innerText || element.textContent;
    var katexElement = document.createElement('span');
    if (element.type.indexOf('mode=display') != -1) {
      katexElement.className += "math-display";
      textToRender = '\\displaystyle {' + textToRender + '}';
    } else {
      katexElement.className += "math-inline";
    }
    katex.render(textToRender, katexElement);
    element.parentNode.insertBefore(katexElement, element);
  }
});

// ── Psychedelic backdrop effects ──────────────────────────────────────────────
(function() {
  var safe = function(label, fn) {
    try { fn(); } catch(e) { console.warn('[site] ' + label + ' failed', e); }
  };

  // Particle node graph via particles.js
  safe('node-graph', function() {
    if (typeof particlesJS === 'undefined') return;
    if (!document.getElementById('node-graph')) return;
    particlesJS('node-graph', {
      particles: {
        number: { value: 65, density: { enable: true, value_area: 800 } },
        color: { value: ['#a78bfa', '#f472b6', '#67e8f9', '#818cf8', '#c084fc'] },
        shape: { type: 'circle' },
        opacity: {
          value: 0.6,
          random: true,
          anim: { enable: true, speed: 0.8, opacity_min: 0.2, sync: false }
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: true, speed: 1.5, size_min: 0.5, sync: false }
        },
        line_linked: {
          enable: true,
          distance: 145,
          color: '#a78bfa',
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 180, line_linked: { opacity: 0.6 } },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  });

  // Floating sparkle symbols
  safe('sparkle-field', function() {
    var host = document.getElementById('sparkle-field');
    if (!host) return;
    var glyphs = ['✦', '✧', '✶', '✺', '✹', '·', '★', '✱'];
    for (var i = 0; i < 22; i++) {
      var s = document.createElement('span');
      s.className = 'float-sparkle';
      s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      s.style.left = (Math.random() * 100) + '%';
      s.style.bottom = '-16px';
      s.style.fontSize = (7 + Math.random() * 13).toFixed(1) + 'px';
      s.style.animationDuration = (9 + Math.random() * 11).toFixed(1) + 's';
      s.style.animationDelay = (Math.random() * 12).toFixed(1) + 's';
      s.style.opacity = (0.35 + Math.random() * 0.55).toFixed(2);
      host.appendChild(s);
    }
  });
})();
