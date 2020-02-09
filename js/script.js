// document - это весь сайт
// console.log(typeof document);
// document.querySelector() - подключение к определенному селектору

// console.log(document.querySelector('.s'));

const sec = document.querySelector('.s'), /* Секундная стрелка */
      min = document.querySelector('.m'), /* Минутная стрелка */
      hour = document.querySelector('.h'), /* Часовая стрелка */
      minNumber = document.querySelector('.minutes'), /* Подключение к числовым минутам */
      hourNumber = document.querySelector('.hours'); 

function clock() {

/* 

      new Date() - берёт время, которое сейчас на устройстве
      getSeconds() - это метод, который берёт секунды
      getMinutes() - это метод, который берёт минуты
      getHours() - это метод, который берёт часы

*/

      let time = new Date(),
          second = time.getSeconds() * 6,
          minutes = time.getMinutes() * 6,
          hours = time.getHours() * 30;
        //   console.log(sec);
          sec.style = `transform: rotate(${second}deg)`;
          min.style = `transform: rotate(${minutes}deg)`;
          hour.style = `transform: rotate(${hours}deg)`;
        //   Рекурсия - это когда функция вызывает саму себя
        // setTimeout() - функция, которая делает задержку вызова
        
        minNumber.innerHTML = time.getMinutes();
        hourNumber.innerHTML = time.getHours();
        


        setTimeout(() => clock(), 1000)
}
clock();

const link = document.querySelectorAll('.tabsItem'), /* Подключение ко всем пунктам Меню табов */
      tabs = document.querySelectorAll('.tabsContentItem'); /* Подключение ко всем табам */


for(let i = 0; i < link.length; i++) {
    console.log(link[i]);
    link[i].addEventListener('click', function(e) {
        e.preventDefault();
        // console.log('click');
        for(let ix = 0; ix < link.length; ix++) {
            link[ix].classList.remove('active');
            tabs[ix].classList.remove('active');
        }
        // console.log(this);
        tabsNew(this, tabs[i]);
    })
    // addEventListener - метод HTML элемента, который делает проверку на какие-то события
}
function tabsNew(links, tabs) {
    links.classList.add('active');
    tabs.classList.add('active');
}


// console.log(link);



// let i = 0;
// function rek() {
//     console.log(i);
//     if(i < 100) {
//         i++
//         rek();
//     }
// }
// rek();




// ***************************** СЕКУНДОМЕР *********************************

// const sec_sw = document.querySelector('.stopwatch__seconds'),
//       min_sw = document.querySelector('.stopwatch__minutes'),
//       hour_sw = document.querySelector('.stopwatch__hours'),
//       btn_sw = document.querySelector('.stopwatch__btn'),
//       span_sw = document.querySelector('.tabsLink__span');

// btn_sw.addEventListener('click', function() {
//     if(this.innerHTML == 'start') {
//         this.innerHTML = 'stop';
//         span_sw.classList.add('active');
//         let i = 0;
//         setTimeout(() => stopwatch(this, i), 1000);
//     }else if(this.innerHTML == 'stop') {
//         this.innerHTML = 'clear';
//         span_sw.classList.remove('active');
//         span_sw.classList.add('active_clear');
//     }else {
//         span_sw.classList.remove('active_clear');
//         sec_sw.innerHTML = 0;
//         min_sw.innerHTML = 0;
//         hour_sw.innerHTML = 0;
//         this.innerHTML = 'start';
//     }
// })

// function stopwatch(el, i) {
//     if(el.innerHTML == 'stop') {
//         if(i == 60) {
//             i = 0;
//             sec_sw.innerHTML = i;
//             if(min_sw.innerHTML == 59) {
//                 min_sw.innerHTML = 0;
//                 hour_sw.innerHTML++;
//             }else {
//                 min_sw.innerHTML++;
//             }
//         }else {
//             i++;
//             sec_sw.innerHTML = i;
//         }
//         setTimeout(() => stopwatch(el, i), 1000);
//     }
// }




const sec_sw = document.querySelector('.stopwatch__seconds'),
      millisec_sw = document.querySelector('.stopwatch__milliseconds'),
      min_sw = document.querySelector('.stopwatch__minutes'),
      hour_sw = document.querySelector('.stopwatch__hours'),
      btn_sw = document.querySelector('.stopwatch__btn'),
      span_sw = document.querySelector('.tabsLink__span');

btn_sw.addEventListener('click', function() {
    if(this.innerHTML == 'start') {
        this.innerHTML = 'stop';
        span_sw.classList.add('active');
        let i = 0;
        setTimeout(() => stopwatch(this, i), );
    }else if(this.innerHTML == 'stop') {
        this.innerHTML = 'clear';
        span_sw.classList.remove('active');
        span_sw.classList.add('active_clear');
    }else {
        span_sw.classList.remove('active_clear');
        millisec_sw.innerHTML = 0;
        sec_sw.innerHTML = 0;
        min_sw.innerHTML = 0;
        hour_sw.innerHTML = 0;
        this.innerHTML = 'start';
    }
})

function stopwatch(el, i) {
    if(el.innerHTML == 'stop') {
        if(i == 999) {
            i = 0;
            millisec_sw.innerHTML = i;
            if(sec_sw.innerHTML == 59) {
                sec_sw.innerHTML = 0;
                if(min_sw.innerHTML == 59) {
                    min_sw.innerHTML = 0;
                    hour_sw.innerHTML++;
                }else {
                    min_sw.innerHTML++;
                }
            }else {
                sec_sw.innerHTML++;
            }
        }else {
            i++;
            millisec_sw.innerHTML = i;
        }
        setTimeout(() => stopwatch(el, i), );
    }




    // if(el.innerHTML == 'stop') {
    //     if(i == 60) {
    //         i = 0;
    //         sec_sw.innerHTML = i;
    //         if(min_sw.innerHTML == 59) {
    //             min_sw.innerHTML = 0;
    //             hour_sw.innerHTML++;
    //         }else {
    //             min_sw.innerHTML++;
    //         }
    //     }else {
    //         i++;
    //         sec_sw.innerHTML = i;
    //     }
    //     setTimeout(() => stopwatch(el, i), 1000);
    // }
}