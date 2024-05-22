/** 제네릭으로 타입을 함수처럼 사용하기*/

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
