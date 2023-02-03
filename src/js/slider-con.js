function swiperSlider() {
  const doubleMain = document.querySelectorAll('[data-slider="double-slider"]');
  const doublep3Main = document.querySelectorAll(
    '[data-slider="double-slider-page3"]'
  );
  const doublep4Main = document.querySelectorAll(
    '[data-slider="double-slider-page4"]'
  );
  const trippleMain = document.querySelectorAll(
    '[data-slider="tripple-slider"]'
  );
  const trippleMainRev = document.querySelectorAll(
    '[data-slider="tripple-slider-rev"]'
  );

  const heroSlider = document.querySelectorAll('[data-slider="hero-slider"]');

  if (doubleMain) {
    doubleMain.forEach(slider => {
      // кнопки вперед та назад
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      //коментуємо чи видаляемо якщо не потрібно
      let pagination = slider.querySelector('.swiper-pagination');
      //коментуємо чи видаляемо якщо не потрібно

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        loop: true,
        speed: 1500,
        // автоплей
        //centeredSlides: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        slidesPerView: 2, // кількість слайдерів для показу
        spaceBetween: 20, // відстань між слайдерами

        // крапки пагінації
        pagination: {
          el: pagination,
          clickable: true,
          renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
          },
        },
        // кнопки навігації
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        // додаємо додатковий клас
        // можна використовувати для додаткових анімацій
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        // адаптив
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // when window width is >= 1200px
          1280: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });
    });
  }

  if (doublep3Main) {
    doublep3Main.forEach(slider => {
      // кнопки вперед та назад
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      //коментуємо чи видаляемо якщо не потрібно
      let pagination = slider.querySelector('.swiper-pagination');
      //коментуємо чи видаляемо якщо не потрібно

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1500,
        loop: true,
        // автоплей
        //centeredSlides: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        slidesPerView: 2, // кількість слайдерів для показу
        spaceBetween: 20, // відстань між слайдерами

        // крапки пагінації
        pagination: {
          el: pagination,
          clickable: true,
          renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
          },
        },
        // кнопки навігації
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        // додаємо додатковий клас
        // можна використовувати для додаткових анімацій
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        // адаптив
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // when window width is >= 1200px
          1280: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });
    });
  }

  if (doublep4Main) {
    doublep4Main.forEach(slider => {
      // кнопки вперед та назад
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      //коментуємо чи видаляемо якщо не потрібно
      let pagination = slider.querySelector('.swiper-pagination');
      //коментуємо чи видаляемо якщо не потрібно

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1500,
        loop: true,
        // автоплей
        //centeredSlides: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        slidesPerView: 2, // кількість слайдерів для показу
        spaceBetween: 20, // відстань між слайдерами

        // крапки пагінації
        pagination: {
          el: pagination,
          clickable: true,
          renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
          },
        },
        // кнопки навігації
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        // додаємо додатковий клас
        // можна використовувати для додаткових анімацій
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        // адаптив
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // when window width is >= 1200px
          1280: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });
    });
  }

  if (trippleMain) {
    trippleMain.forEach(slider => {
      // кнопки вперед та назад
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      //коментуємо чи видаляемо якщо не потрібно
      let pagination = slider.querySelector('.swiper-pagination');
      //коментуємо чи видаляемо якщо не потрібно

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1500,
        loop: true,
        // автоплей
        //centeredSlides: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        slidesPerView: 3, // кількість слайдерів для показу
        spaceBetween: 20, // відстань між слайдерами

        // крапки пагінації
        pagination: {
          el: pagination,
          clickable: true,
          renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
          },
        },
        // кнопки навігації
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        // додаємо додатковий клас
        // можна використовувати для додаткових анімацій
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        // адаптив
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 3,
            spaceBetween: 34,
          },
          // when window width is >= 1200px
          1280: {
            slidesPerView: 'auto',
            spaceBetween: 86,
          },
        },
      });
    });
  }

  if (trippleMainRev) {
    trippleMainRev.forEach(slider => {
      // кнопки вперед та назад
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      //коментуємо чи видаляемо якщо не потрібно
      let pagination = slider.querySelector('.swiper-pagination');
      //коментуємо чи видаляемо якщо не потрібно

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1500,
        loop: true,
        // автоплей
        //centeredSlides: true,
        // autoplay: {
        //   delay: 3000,
        //   reverseDirection: true;
        //   disableOnInteraction: true,
        // },
        slidesPerView: 3, // кількість слайдерів для показу
        spaceBetween: 20, // відстань між слайдерами

        // крапки пагінації
        pagination: {
          el: pagination,
          clickable: true,
          renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
          },
        },
        // кнопки навігації
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        // додаємо додатковий клас
        // можна використовувати для додаткових анімацій
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        // адаптив
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 3,
            spaceBetween: 34,
          },
          // when window width is >= 1200px
          1280: {
            slidesPerView: 'auto',
            spaceBetween: 86,
          },
        },
      });
    });
  }

  if (heroSlider) {
    heroSlider.forEach(slider => {
      //
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');
      //

      let pagination = slider.querySelector('.swiper-pagination');
      swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1500,
        loop: true,
        //centeredSlides: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: pagination,
          clickable: true,
          renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
          },
        },
        //
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },
        //
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          // when window width is >= 480px
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          // when window width is >= 640px
          1280: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        },
      });
    });
  }
}

window.addEventListener('load', swiperSlider, false);
