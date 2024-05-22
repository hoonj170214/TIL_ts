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
