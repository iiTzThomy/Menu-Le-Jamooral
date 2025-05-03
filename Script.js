document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
  
    if (toggleBtn && navMenu) {
      toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('visible'); // Toggles visibility of the menu
        toggleBtn.classList.toggle('active'); // Adds/removes the 'active' class to change the style
      });
    }
  
    const items = document.querySelectorAll('.item');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    items.forEach(item => observer.observe(item));
  
    // Ajout d'un message de bienvenue dynamique
    const header = document.querySelector('header');
    const welcomeMsg = document.createElement('p');
    welcomeMsg.textContent = "Bienvenue à la Boulangerie Jamooral !";
    welcomeMsg.style.fontStyle = 'italic';
    header.appendChild(welcomeMsg);
  
    // Bouton "Retour en haut" qui apparaît au scroll
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.textContent = '↑ Haut';
    scrollTopBtn.style.position = 'fixed';
    scrollTopBtn.style.bottom = '20px';
    scrollTopBtn.style.right = '20px';
    scrollTopBtn.style.padding = '10px 15px';
    scrollTopBtn.style.border = 'none';
    scrollTopBtn.style.borderRadius = '10px';
    scrollTopBtn.style.backgroundColor = '#d35400';
    scrollTopBtn.style.color = 'white';
    scrollTopBtn.style.cursor = 'pointer';
    scrollTopBtn.style.display = 'none';
    document.body.appendChild(scrollTopBtn);
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });
  
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  