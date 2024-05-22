/** 제네릭으로 타입을 함수처럼 사용하기*/

import { getConfigFileParsingDiagnostics } from 'typescript';

interface Zero {
  type: 'human';
  race: 'yellow';
  name: 'zero';
  age: 28;
}

interface Nero {
  type: 'human';
  race: 'yellow';
  name: 'nero';
  age: 32;
}

interface Person<N, A> {
  type: 'human';
  race: 'yellow';
  name: N;
  age: A;
}
interface Zero1 extends Person<'zero', 28> {}
interface Nero1 extends Person<'nero', 32> {}

/** Array 도 제네릭 타입이라서 <> 부분이 있는 것이다. */
interface Array<T> {
  [key: number]: T;
  length: number;
}

/** 타입별칭, 클래스, 함수도 제네릭을 가질 수 있다. */
type PersonContructor<N, A> = {
  type: 'human';
  race: 'yello';
  name: N;
  age: A;
};

type Zero12 = PersonContructor<'zero', 28>;
type Nero12 = PersonContructor<'nero', 32>;

// 클래스
class Person121<N, A> {
  name: N;
  age: A;
  constructor(name: N, age: A) {
    this.name = name;
    this.age = age;
  }
}

// 타입변수에 기본값 적용 가능
interface Person111<N = string, A = number> {
  type: 'human';
  race: 'yellow';
  name: N;
  age: A;
}

type Person1 = Person111;
type Person2 = Person111<number>;
type Person3 = Person111<number, boolean>;

/** 제네릭 - 상수 타입 매개변수
 * 제네릭 타입변수 앞에 const 키워드를 붙이면, 타입 매개변수를 추론할 때 as const로 추론한다.
 */
function values<const T>(initial: T[]) {
  return {
    hasValue(value: T) {
      return initial.includes(value);
    },
  };
}

// 아래에서 savedValues.hasValue의 매개변수 value의 타입은 value: "a" | "b" | "c"로 추론된다.
const savedValues = values(['a', 'b', 'c']);
// savedValues.hasValue('x');
savedValues.hasValue('b');

/** 제네릭에 제약걸기.
 * extends로 타입 매개변수의 제약 표시.
 */
interface Example<A extends number, B = string> {
  a: A;
  b: B;
}

// 아래 예시는 string이 number 제약조건을 만족하지 않았다는 에러가 나온다.
// type UseCase1 = Example<string, boolean>;
type UerCase2 = Example<1, boolean>;
type UseCase3 = Example<number>;

/** 하나의 타입변수가 다른 타입변수의 제약이 될 수 있다. */
interface ExampleA<A, B extends A> {
  a: A;
  b: B;
}
/** 자주쓰이는 제약
 * <T extends object>                               모든 객체
 * <T extends any[]>                                모든 배열
 * <T extends (...args: any) => any>                모든 함수
 * <T extends abstract new (...args: any) => any>   생성자 타입
 * <T extends keyof any>                            string | number | symbol
 */

/** 제네릭 실수.
 * 타입 매개변수와 제약을 동일하게 생각하는 것.
 */
interface V0 {
  value: any;
}

// 아래 코드에 주석을 해제하면 오류가 생긴다. 왜?
// T 는 정확히 V0가 아니다.
// V0에 대입할 수 있는 모든 타입을 말한다.
// { value: string, another: string } 도 T가 될 수 있다.
// 이러면 { value: string }은 T가 아니다. 따라서 에러가 발생할 수도 있다.

// const returnV0 = <T extends V0>(): T => {
//   return { value: 'test' };
// };

// 아래 코드도 오류가 난다. 왜?
// never 때문에. never는 모든 타입에 대입할 수 있으므로 never extends boolean 은 참이다.
// T 가 never 일 수도 있으므로 false를 기본값으로 넣는 것이 불가능한 것이다.
// function onlyBoolean1<T extends boolean>(arg: T = false) {
//   return arg;
// }

// 해결하는 방법은 제네릭을 안쓰는 것이다.
// 특히 원시값 타입만 사용한다면 대부분 제약을 걸지 않아도 되는 경우가 많다.
function onlyBoolean(arg: true | false = true): true | false {
  return arg;
}
