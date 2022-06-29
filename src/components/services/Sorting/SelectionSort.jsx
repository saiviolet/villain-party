import React from 'react';
import { VillainCard } from '../../Competition/Competition';
import { swap } from '../Functions/swap';

export function getSelectionSortAnimations(villainsArray = []) {
   const copyArray = [...villainsArray];
   const sizeArray = villainsArray.length;
   const animationsArray = [];

  for(let i = 0; i < villainsArray.length; i++) {
    //АЛГОРИТМ: индекс переменной с минимальным значением
    let min = i;
    // АЛГОРИТМ: j - след. за переменной с индексом i
    for (let j = i + 1; j < villainsArray.length; j++) {
       //АНИМАЦИЯ: пушим в анимации объект! указываем тип select, массив со сравниваемыми индексами i и j - показываем когда 
       //перебираем индексты
      animationsArray.push( { type: 'select', data: [i, j] } )
       //АЛГОРИТМ: если след. число (j) меньше минимального на данный момент (с индексом min), то min = j
        if (copyArray[j].evilDeeds < copyArray[min].evilDeeds) {
          min = j;
        };
       //АЛГОРИТМ: если мин индекс не равен i, то нужно переместить эл-ты массива местами
      }
    if (min !== i) {
      const copy = copyArray[i];
      copyArray[i] = copyArray[min];
      copyArray[min] = copy;
      // swap(copyArray, i, min);
      // АНИМАЦИЯ: пушим в анимации объект! указываем тип swap, массив со сравниваемыми индексами i и min - показываем когда 
      // меняем значения! + передаем копию перебираемого массива
      animationsArray.push( { type: 'swap', data: [i, min], array: [...copyArray] } );
      }

    }
  //функция будет возвращать анимации
  return animationsArray;
}


