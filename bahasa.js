const translations = {
    id: {
        silahkan: 'Silahkan Masuk',
        daftar: 'Daftar sekarang',
        masuk: 'Masuk',
    },
    en: {
        silahkan: 'Please Sign In',
        daftar: 'Register Now',
        masuk: 'Log in',
    },
};
// Fungsi untuk mengubah bahasa
function changeLanguage(language) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
  
    elementsToTranslate.forEach((element) => {
      const key = element.getAttribute('data-translate');
      element.textContent = translations[language][key];
    });
  }
  
  // Mengganti bahasa ke Inggris
  document.getElementById('englishButton').addEventListener('click', () => {
    changeLanguage('en');
  });
  
  // Mengganti bahasa ke Indonesia
  document.getElementById('indonesianButton').addEventListener('click', () => {
    changeLanguage('id');
  });