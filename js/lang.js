// Перемикач мови UK/EN. Вибір зберігається в localStorage.
(function () {
  var saved = localStorage.getItem('tod_lang');
  if (saved === 'uk' || saved === 'en') {
    document.documentElement.setAttribute('lang', saved);
  }
  function updateBtn() {
    var lang = document.documentElement.getAttribute('lang');
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.textContent = lang === 'uk' ? 'EN' : 'УК';
    });
  }
  window.toggleLang = function () {
    var next = document.documentElement.getAttribute('lang') === 'uk' ? 'en' : 'uk';
    document.documentElement.setAttribute('lang', next);
    localStorage.setItem('tod_lang', next);
    updateBtn();
  };
  document.addEventListener('DOMContentLoaded', updateBtn);
})();
