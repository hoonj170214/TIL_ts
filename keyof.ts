/** 배열에 keyof를 적용하면 number | 배열 속성 | 배열 인덱스 가 된다.
 * 배열 속성은 length , forEach, lastIndexOf 등
 */
type Keys = keyof any;
type ArrayKeys = keyof [1, 2, 3];
let a: ArrayKeys = 'lastIndexOf';

a = '2';

// a = '3';

// 모든 number는 배열의 key로 허용된다.
a = 3;

type Arr = [1, 2, 3];
type First = Arr[0];
type Length = Arr['length'];

type Arr2 = (string | boolean)[];
type El = Arr2[number];

/** 인덱스 접근 타입 -> 특정 키들의 값 타입만 추리기*/
const obj = {
  hello: 'world',
  name: 'me',
  age: 27,
};
type Values = (typeof obj)['hello' | 'name'];

/** 객체의 메서드 선언하는 방법 */
interface Example {
  a(): void;
  b: () => void;
  c: {
    (): void;
  };
}

/** 매핑된 객체 타입
 * 매핑된 객체 타입은 기존의 다른 타입으로부터 새로운 객체 속성을 만들어내는 타입
 * 인터페이스에서는 못쓴다. 타입 별칭에서만 사용할 수 있다.
 * in 연산자 오른쪽에는 유니언 타입이 와야 한다.
 * 아래 예시에는 
 * type HelloAndHi = {
    hello: string;
    hi: string;
}
가 된다.
 */
type HelloAndHi = {
  [key in 'hello' | 'hi']: string;
};

/** 기존 객체 타입을 복사하는 코드.
 * 아래 copy는 Original 과 같은 타입이 됨.
 */
interface Original {
  name: string;
  age: number;
  married: boolean;
}

type copy = {
  [key in keyof Original]: Original[key];
};

/** 튜플, 배열도 기존 타입을 복사할 수 있음 */
// 튜플
type Tuple = [1, 2, 3];

type CopyTuple = {
  [key in keyof Tuple]: Tuple[key];
};

const copyTuple: CopyTuple = [1, 2, 3];

type NumArr = number[];
type CopyNumArr = {
  [key in keyof NumArr]: NumArr[key];
};

const copyNumArr: CopyNumArr = [1, 4, 6];

/** 수식어 붙이거나 빼서 복사하기 */
interface OriginalObj {
  name: string;
  age: number;
  married: boolean;
}

type CopyObj = {
  readonly [key in keyof OriginalObj]?: OriginalObj[key];
};

interface OriginalObj2 {
  readonly name?: string;
  readonly age?: number;
  readonly married?: boolean;
}

/** readonly, 옵셔널을 빼고, Capitalize로 키 첫글자를 대문자로 바꿔서 복사 */
type CopyObj2 = {
  -readonly [key in keyof OriginalObj2 as Capitalize<key>]-?: OriginalObj2[key];
};

/** 타입 상속하기.
 * 인터페이스가 타입별칭을 상속가능.
 * 타입별칭이 인터페이스를 상속가능.
 */
interface Animal {
  name: string;
}
interface Dog extends Animal {
  bark(): void;
}

type Animal2 = {
  name: string;
};

type Dog2 = Animal2 & {
  bark(): void;
};

/** 상속할때 부모 속성의 타입을 변경가능 */
interface Merge {
  one: string;
  two: string;
}

// 그냥 123으로 하면 오류남.  string을 number에 할당할 수 없음.
interface Merge2 extends Merge {
  one: 'h' | 'w';
  two: '123';
}
