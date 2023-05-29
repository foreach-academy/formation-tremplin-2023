//* Compteur de voyelles
const vowels = ['a', 'e', 'i', 'o', 'u'];

const getCount = (str) => {
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      total++;
    }
  }

  return total;
};

//* Retirer l'oeuvre d'art nulle
function removeSmallest(numbers) {
  let min = numbers[0];
  let index = null;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      index = i;
      min = numbers[index];
    }
  }

  return numbers.slice(0, index).concat(numbers.slice(index + 1));
}

//* Sortir le caractère du milieu
function getMiddle(s) {
  if (s.length % 2 === 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  }

  return s[Math.floor(s.length / 2)];
}

//* La philosophie du fils du Will Smith
String.prototype.toJadenCase = function () {
  const arr = this.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(' ');
};

//* Réduction des trolls sur un site
function disemvowel(str) {
  const newStr = str.split('');

  for (let i = 0; i < newStr.length; i++) {
    if (vowels.includes(newStr[i].toLowerCase())) {
      newStr[i] = '';
    }
  }

  return newStr.join('');
}

//* Carré de chiffres
function squareDigits(num) {
  const arr = String(num).split('');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
  }

  return Number(arr.join(''));
}

//* Le plus petit mot
function findShort(s) {
  const arr = s.split(' ');
  min = arr[0].length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < min.length) {
      min = arr[i].length;
    }
  }

  return min;
}

//* Filtre à integer
function filter_list(l) {
  const arr = [];

  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number') {
      arr.push(l[i]);
    }
  }

  return arr;
}

//* Cacheur de code
function maskify(cc) {
  const arr = cc.split('');

  for (let i = 0; i < cc.length; i++) {
    if (i < cc.length - 4) {
      arr[i] = '#';
    }
  }

  return arr.join('');
}

//* Champion de cricket
function openOrSenior(data) {
  const arr = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      arr.push('Senior');
    } else {
      arr.push('Open');
    }
  }

  return arr;
}

//* Parité
function findOutlier(integers) {
  const even = [];
  const odd = [];

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      even.push(integers[i]);
    } else {
      odd.push(integers[i]);
    }
  }

  if (even.length === 1) {
    return even[0];
  } else {
    return odd[0];
  }
}

findOutlier([0, 1, 2]);
