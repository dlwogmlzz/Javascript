/**
 * Data Types
 * 
 * 6個のPrimitive Typeと1個のObject Typeがある。
 * 
 * 1) Number (数字)
 * 2) String (文字列)
 * 3) Boolean (ブーリアン)
 * 4) undefined (未定義)
 * 5) Null (ヌル)
 * 6) Symbol (シンボル)
 * 
 * 7) Object (オブジェクト)
 *   function / Array / Object
 */

// Number type
const age = 33;
const temporature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temporature);
console.log(typeof pi);
console.log('-------------------');

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity);
console.log(typeof nInfinity);


// String type
const code = 'コード';
console.log(typeof code);

const ive = "'JangWonYoung' AnYuJin";
console.log(ive);

/**
 * Template Literal
 * 
 * 1) newLine -> \n
 * 2) tab -> \t
 * 3) バックスラッシュをStringで表現したい時、二度入力する。 
 */

const leeKim = 'Lee\nKim';
const JangAn = 'Jang\tAn';
const backSlash = 'Back\\Slash'; 
const smallQuotation = 'small\'Quotaion';
const backtick = `ive　'""" ///\\\ 
JangWonYoung`;

console.log(leeKim);
console.log(JangAn);
console.log(backSlash);
console.log(smallQuotation);
console.log(backtick);
console.log(typeof backtick);

const groupName = 'ive';
console.log(groupName + ' れい')
console.log(`${groupName} WonYoung`);

/**
 * Boolean Type
 */

const isTrue = true;
const isFalse = false;
console.log(isTrue);
console.log(isFalse);
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * Undefined Type
 * 利用者が直接値を初期化しなかった時、指定される値だ。
 * 
 * 直接undefinedで値を初期化するのは止揚する。
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * Null type
 * 
 * Undefinedと同じく値がない意味や
 * JSでは、開発者が明示的にない値で初期化する時、使用される。
 */

let init = null;
console.log(init);
console.log(typeof init);


/**
 * Symbol type
 * 
 * 唯一な値を生成するとき、使う。
 * 他のプリミティブな値と違くSymbol関数を
 * 呼び出す。
 */
console.log('-------------------');

const test1 = '1';
const test2 = '1';
console.log(test1 === test2);

const Symbol1 = Symbol('1');
const Symbol2 = Symbol('1');

console.log(Symbol1 === Symbol2);

/**
 * Object type
 * 
 * Map
 * keyとvalueのペアで成っている。
 * 
 */

const dictionary = {
	red: '赤', // key: 'value'
	green: '緑',
	blue: '青',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['green']);
console.log(dictionary['blue']);

console.log(typeof dictionary);

/**
 * Array type
 * 
 * 値をリストで羅列できるタイプだ。
 * ArrayはIndexという概念がある。
 * Indexは0から始める。1ずつ上がる
 */

const rainbowArray = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'green',
	'navy',
	'purple',
];

console.log(rainbowArray);
console.log(rainbowArray[0]);
console.log(rainbowArray[1]);
console.log(rainbowArray[2]);
console.log(rainbowArray[3]);
console.log(rainbowArray[4]);
console.log(rainbowArray[5]);
console.log(rainbowArray[6]);

rainbowArray[0] = 'skyblue';
console.log(rainbowArray);
console.log(typeof rainbowArray);

/**
 * static(静的) typing -> 変数を宣言するとき、どんなタイプの変数を宣言するのか指定する(C言語)
 * dynamic(動的) typing -> 変数のタイプを明示的に宣言することではなく、値によりタイプを"推論"する。
 * 
 * JS -> dynamic typing
 */