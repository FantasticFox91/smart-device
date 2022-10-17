import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.accordion')) {
    document.querySelectorAll('.accordion__heading').forEach((el) => el.classList.toggle('accordion__heading--close'));
    document.querySelector('.footer').addEventListener('click', (e) => {
      if (e.target.classList.contains('accordion__heading')) {
        e.target.classList.toggle('accordion__heading--close');
      }
    });
  }

  if (document.querySelector('[data-show-more]')) {
    document.querySelector('[data-show-more]').addEventListener('click', (e) => {
      e.preventDefault();
      if (document.querySelector('.about__text--show')) {
        document.querySelector('[data-show-more]').textContent = 'Подробнее';
        document.querySelectorAll('.about__text').forEach((text) => text.classList.remove('about__text--show'));
        return;
      }
      document.querySelector('[data-show-more]').textContent = 'Скрыть';
      document.querySelectorAll('.about__text').forEach((text) => text.classList.add('about__text--show'));
    });
  }

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
