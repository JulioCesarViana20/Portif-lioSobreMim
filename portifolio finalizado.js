function changeLanguage(lang) {
  // Mapeamento dos textos em PT e EN
  const texts = {
    pt: {
      "about-title": "Sobre",
      "about-description": "Meu nome é Julio Cesar, sou desenvolvedor de back-end.",
      "projects-title": "Projetos",
      "contact-title": "Comunicação",
      "contact-description": "Entre em contato comigo por email(20juliocesar12@gmail.com) ou Whatsapp.",
      "github-title": "Github",
      "certificates-title": "Certificados",
      // Outros textos que você quiser traduzir...
    },
    en: {
      "about-title": "About",
      "about-description": "My name is Julio Cesar, I'm a back-end developer.",
      "projects-title": "Projects",
      "contact-title": "Contact",
      "contact-description": "Contact me by email (20juliocesar12@gmail.com) or Whatsapp.",
      "github-title": "Github",
      "certificates-title": "Certificates",
      // Outros textos...
    }
  };

  // Trocar os textos conforme o idioma
  document.querySelectorAll(".lang-about-title").forEach(el => el.textContent = texts[lang]["about-title"]);
  document.querySelectorAll(".lang-about-description").forEach(el => el.textContent = texts[lang]["about-description"]);
  document.querySelectorAll(".lang-projects-title").forEach(el => el.textContent = texts[lang]["projects-title"]);
  document.querySelectorAll(".lang-contact-title").forEach(el => el.textContent = texts[lang]["contact-title"]);
  document.querySelectorAll(".lang-contact-description").forEach(el => el.textContent = texts[lang]["contact-description"]);
  // Se quiser trocar mais textos, siga o padrão acima

  // Troca do título dos certificados (exemplo de seção extra)
  document.querySelectorAll("#Especializacao h2").forEach(el => el.textContent = texts[lang]["certificates-title"]);
}



// Função para alternar a exibição do menu suspenso de idiomas
function toggleLanguageMenu() {
    const dropdown = document.getElementById('idiomas-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';  // Alterna entre mostrar/ocultar
}

// Função para mudar o idioma
function changeLanguage(language) {
    currentLanguage = language;

    // Atualiza o conteúdo da página com base no idioma selecionado
    document.querySelector('.lang-about-title').textContent = languages[currentLanguage].aboutTitle;
    document.querySelector('.lang-about-description').textContent = languages[currentLanguage].aboutDescription;
    document.querySelector('.lang-projects-title').textContent = languages[currentLanguage].projectsTitle;
    document.querySelector('.lang-contact-title').textContent = languages[currentLanguage].contactTitle;
    document.querySelector('.lang-contact-description').textContent = languages[currentLanguage].contactDescription;

    // Fechar o menu após a seleção
    document.getElementById('idiomas-menu').style.display = 'none';

    // Atualiza o texto do botão de idioma
    document.querySelector('#idiomas-button').textContent = currentLanguage === 'pt' ? 'Idiomas' : 'Languages';
}

const languages = {
    pt: {
        aboutTitle: "Sobre",
        aboutDescription: "Meu nome é Julio Cesar, sou desenvolvedor de back-end e front-end.",
        projectsTitle: "Projetos",
        contactTitle: "Contato",
        contactDescription: "Entre em contato comigo por email (20juliocesar12@gmail.com) ou Whatsapp."
    },
    en: {
        aboutTitle: "About",
        aboutDescription: "Hello, my name is Julio Cesar, and I am a developer with experience in front-end and back-end.",
        projectsTitle: "Projects",
        contactTitle: "Contact",
        contactDescription: "Contact me via email (20juliocesar12@gmail.com) or Whatsapp."
    },
};


// Detecta clique no botão "Português"
document.getElementById('btn-pt').addEventListener('click', function() {
  changeLanguage('pt');
});

// Detecta clique no botão "English"
document.getElementById('btn-en').addEventListener('click', function() {
  changeLanguage('en');
});
