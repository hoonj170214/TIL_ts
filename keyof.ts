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

// 수정된 파일 되돌리기 테스트
// 빈 커밋 테스트
