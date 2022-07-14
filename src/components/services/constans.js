import ursula from '../../images/villians/ursula.jpeg';
import bender from '../../images/villians/bender.jpeg';
import malifecent from '../../images/villians/malifecent.png';
import redqueen from '../../images/villians/Red_Queen.png';
import yago from '../../images/villians/yago.png';
import plankton from '../../images/villians/plankton.png';
import cruella from '../../images/villians/cruella.png';
import aid from '../../images/villians/hades.png';
import dart from '../../images/villians/dart.png';
import jafar from '../../images/villians/jafar.png';


import { nanoid } from 'nanoid';

export const confettiConfig =  {
  fpsLimit: 60,
  particles: {
    number: {
      value: 0
    },
    color: {
      value: ["#660066", "#99ff99", "#ff69b4"]
    },
    shape: {
      type: ["circle", "square"]
    },
    opacity: {
      value: 1,
      animation: {
        enable: true,
        minimumValue: 0,
        speed: 2,
        startValue: "max",
        destroy: "min"
      }
    },
    size: {
      value: 7,
      random: {
        enable: true,
        minimumValue: 3
      }
    },
    links: {
      enable: false
    },
    life: {
      duration: {
        sync: true,
        value: 5
      },
      count: 1
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        acceleration: 20
      },
      speed: { min: 10, max: 20 },
      decay: 0.1,
      direction: "none",
      straight: false,
      outModes: {
        default: "destroy",
        top: "none"
      }
    },
    rotate: {
      value: {
        min: 0,
        max: 360
      },
      direction: "random",
      move: true,
      animation: {
        enable: true,
        speed: 60
      }
    },
    tilt: {
      direction: "random",
      enable: true,
      move: true,
      value: {
        min: 0,
        max: 360
      },
      animation: {
        enable: true,
        speed: 60
      }
    },
    roll: {
      darken: {
        enable: true,
        value: 25
      },
      enable: true,
      speed: {
        min: 15,
        max: 25
      }
    },
    wobble: {
      distance: 30,
      enable: true,
      move: true,
      speed: {
        min: -15,
        max: 15
      }
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true
    }
  },
  detectRetina: true,
  emitters: {
    direction: "none",
    life: {
      count: 0,
      duration: 0.1,
      delay: 0.4
    },
    rate: {
      delay: 0.1,
      quantity: 100
    },
    size: {
      width: 0,
      height: 0
    }
  }
};
 export const villains = [
   {name: 'Урсула', evilDeeds: 1299, image: ursula},
   {name: 'Бендер', evilDeeds: 15673, image: bender},
   {name: 'Малефисента', evilDeeds: 5409, image: malifecent},
   {name: 'Ирацебета', evilDeeds: 12, image: redqueen},
   {name: 'Планктон', evilDeeds: 3907, image: plankton},
   {name: 'Стервелла', evilDeeds: 9999, image: cruella},
   {name: 'Аид', evilDeeds: 6666666, image: aid, about: 'Несмотря на то, что Аид бог мёртвых, он достаточно живой. Считает себя добрым парнем, который просто ненавидит Геркулеса. Как бог он всемогущ. Он может телепортироваться, создавать вещи и тому подобное. Часто швыряет огнём. Хотя Аид придумывает жестокие планы, его неформальный подход к злым делам делает его комичным персонажем (хотя смеётся над его шутками в основном он сам). Обычно Аид делает вид, что у него всё под контролем, но на самом деле характер у него взрывной.'},
   {name: 'Дарт Вейдер', evilDeeds: 39021, image: dart},
   {name: 'Джафар', evilDeeds: 2908, image: jafar},
 ];
 
 export const selectOptions = [
  { value: 'selection', label: 'Сортировка выбором' },
  { value: 'insertion', label: 'Сортировка вставками' },
  { value: 'bubble', label: 'Сортировка пузырьком' },
  { value: 'shaker', label: 'Шейкерная сортировка' },
  { value: 'comb', label: 'Сортировка расчёской' },

  { value: 'merge', label: 'Сортировка слиянием' },
]