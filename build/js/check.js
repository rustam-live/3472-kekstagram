'use strict';
var getMessage = function(a, b)  {
  if (typeof a === 'boolean') {
        if (a === true) {
          return 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
    }
        else {
          return 'Переданное GIF-изображение не анимировано';
    }
    }
        if (typeof a === 'number') {
          return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + (b * 4) + ' атрибутов';
    }
        if (Array.isArray(a) && Array.isArray(b)) {
          var square = 0;
          for (var i = 0; i < a.length && i < b.length; i++) {
          square = square + a[i] * b[i];
    }
          return 'Общая площадь артефактов сжатия: ' + square + ' пикселей';
    }
        if (Array.isArray(a)) {
          var sum = a.reduce(function(start, item) { return start + item; }, 0);
          return 'Количество красных точек во всех строчках изображения: ' + sum;
    }
}
