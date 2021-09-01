"use strict";

// 配列を使用して値を取得する
const arr = ["富士", "鷹", "茄子"];

console.log(`登山で${arr[0]}に登りました`);

// lengthで文字列を取得する
const music = [];
console.log(music.length);

const name = ["まふゆ", "ちさき", "くれは", "たかお"];
console.log(name.length);

// for (const idol of name) {
//   console.log(`アイドル${idol}ちゃん`);
// }

// breakで繰り返しを止める
for (const idol of name) {
  if (idol === "くれは") {
    break;
  }
  console.log(`アイドル${idol}ちゃん`);
}

// 配列への要素の追加
const mark = ["ハート", "スペード", "クローバー"];

console.log(mark);

mark.push("ダイヤ");

console.log(mark);

// 配列の一部を切り取る
const newMark = mark.slice(1, 3);

console.log(newMark);

// 配列の結合をする
const parent = ["新井義則", "新井淳子"];

const child = ["新井奈津枝", "新井祐輝", "新井沙紀枝"];

const family = parent.concat(child);

console.log(family);

// 多次元配列
const color = [
  ["red", "pink", "orange"],
  ["green", "yellow", "blue"],
  ["black", "gray", "white"],
];

console.table(color);

console.log(color[2][2]);

// 九九
const kuku = [];
for (let i = 0; i < 9; i++) {
  kuku.push([]);
  for (let j = 0; j < 9; j++) {
    kuku[i].push((i + 1) * (j + 1));
  }
}

console.table(kuku);

// 問題：arrayの中にvalueと同じ６が含まれていれば"YES",含まれていなければ"NO"になるようにせよ。
const array = [5, 7, 2, 4];

const value = 6;

// 回答
// if (array === 6) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// 答え
const L = array.length;

let included = false;

for (let i = 0; i < L; i++) {
  if (array[i] === value) {
    included = true;
    break;
  }
}

// 三項演算子
const message = included ? "YES" : "NO";

console.log(message);

// if (included) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// numberの数字を逆順にする
const number = [1, 2, 3];

console.log(number);

const reversed = number.slice().reverse();

console.log(reversed);
console.log(number);

// mapメソッド
const number2 = [1, 2, 3, 4, 5];

const mapped = number2.map((x) => 100 * x);

console.log(mapped);

// filterメソッド
// 奇数を取り除いで偶数だけ残す
const number3 = ["1", "2", "3", "4"];

// const f = (x) => {
//   return x % 2 === 0;
// };

const filtered = number3.filter((x) => x % 2 !== 0);
console.log(filtered);

// reduceメソッド
const number4 = [1, 2, 3, 4, 5];

const f = (x, y) => {
  return x * y;
};

const reduced = number4.reduce(f);

console.log(reduced);

// 1000以下の素数を小さい順位コンソールに表示
// const Sosu = [];
// for (let i = 1; i < 1000; i++);
// console.log(Sosu);

const NUM = 100;

const End = NUM + 1;

for (let i = 2; i < End; i++) {
  for (let j = 2; j <= i; j++) {
    if (j === i) {
      console.log(i);
    }
    if (i % j === 0) {
      break;
    }
  }
}

const Num = 50;

const END = Num + 1;

const primes = new Array(END);
primes.fill(true);

primes[0] = false;
primes[1] = false;

console.log(primes);

for (let i = 0; i < END ** 0.5; i++) {
  if (primes[i]) {
    for (let j = 2 * i; j < END; j = j + i) {
      primes[j] = false;
    }
  }
}

// // 配列の要素を小さい順に並べた配列を返す関数を作る
const Sort = (_A) => {
  const A = _A.slice();
  const L = number5.length;
  for (let i = 0; i < L; i++) {
    let min = i;
    for (let j = i + 1; j < L; j++) {
      if (A[min] > A[j]) {
        min = j;
      }
    }

    // 分割代入
    [A[i], A[min]] = [A[min], A[i]];
  }
  return A;
};

const number5 = [1, 4, 6, 5, 6, 7, 8, 9, 3, 7, 9, 6, 4];

const sorted = Sort(number5);

console.log(sorted);
console.log(number5);

// クイックソートのアルゴリズム
const qSort = (A) => {
  if (A.length <= 1) {
    return A;
  }

  const p = A[0];
  const _A = A.slice(1);
  const X = qSort(_A.filter((x) => x < p));
  const Y = [p];
  const Z = qSort(_A.filter((x) => x >= p));
  return X.concat(Y).concat(Z);
};

const Arr = [1, 2, 3, 4, 5, 5, 6, 3, 6, 5, 4, 3];

const sorted = qSort(Arr);

console.log(Arr);
console.log(sorted);
