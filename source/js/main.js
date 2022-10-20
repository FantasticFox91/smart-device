import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.accordion')) {
    hideAccrodions();
    document.querySelector('.footer').addEventListener('click', (e) => showAccordion(e));
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

  if (document.querySelector('input[type="tel"]')) {
    const inputs = document.querySelectorAll('input[type="tel"]');

    const prefixNumber = (str) => {
      if (str === '7') {
        return '7 (';
      }
      if (str === '8') {
        return '8 (';
      }
      if (str === '9') {
        return '7 (9';
      }
      return '7 (';
    };

    inputs.forEach((input) => input.addEventListener('input', () => {
      const value = input.value.replace(/\D+/g, '');
      const numberLength = 11;

      let result;
      if (input.value.includes('+8') || input.value[0] === '8') {
        result = '';
      } else {
        result = '+';
      }

      for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          case 4:
            result += ') ';
            break;
          case 7:
            result += '-';
            break;
          case 9:
            result += '-';
            break;
          default:
            break;
        }
        result += value[i];
      }
      input.value = result;
    }));
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

const showAccordion = (e) => {
  const accordions = document.querySelectorAll('.accordion__heading');
  if (e.target.classList.contains('accordion__heading')) {
    e.target.classList.toggle('accordion__heading--close');
    const opendAccordions = document.querySelectorAll('.accordion__heading--close');
    if (opendAccordions.length === 0) {
      accordions.forEach((el) => el.classList.add('accordion__heading--close'));
      e.target.classList.toggle('accordion__heading--close');
    }
  }
};

const hideAccrodions = () => {
  const accordions = document.querySelectorAll('.accordion__heading');
  accordions.forEach((el) => el.classList.toggle('accordion__heading--close'));
};

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
