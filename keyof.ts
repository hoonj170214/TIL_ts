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

// 등록된 파일 이름 변경 테스트
