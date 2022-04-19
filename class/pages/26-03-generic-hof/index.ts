// 1. HOF - 일반타입
function firstFuc1(arg1: string) {
  return function secondFunc1(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}
const result1 = firstFuc1("영희")(8);

//
//
// 2. HOF - any타입
function firstFuc2(arg1: any) {
  return function secondFunc2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}
const result2 = firstFuc2("영희")(8);

//
//
// 3. HOF - generic타입
function firstFuc3<T>(arg1: T) {
  return function secondFunc3<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}
const result3 = firstFuc3(8)("영희");

//
// 4. HOF - generic타입(화살표함수)
// prettier-ignore
const firstFuc4 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
  };

const result4 = firstFuc4(8)("영희");

//
// 5. HOF - generic타입(컴포넌트에 응용 - HOC)
// prettier-ignore
const withAuth = <C>(Component: C) => <P>(props: P): [C, P] => {
  return [Component, props];
};

const result5 = withAuth("Bbb")({ aaa: "철수" });
