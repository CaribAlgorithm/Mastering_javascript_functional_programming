interface accumulatorObj {
  sum: number;
  count: number;
}
interface reducerFunc {
  (x: number, y: number): number;
}

interface reducerStrFunc {
  (x:string, y:string):string;
}
interface reducerArrFunc {
  (x: number[]): number;
}
interface objReducerFunc {
  (x: accumulatorObj, val: number): accumulatorObj;
}

export const sum: reducerFunc = (x, y) => x + y;
export const sumStr: reducerStrFunc = (x, y) => x + y;

export const sumAndLog: reducerFunc = (x: number, y: number): number => {
  console.log(`${x}+${y}=${x + y}`);
  return x + y;
};

export const average: reducerArrFunc = arr => arr.reduce(sum, 0) / arr.length;

export const average2 = (
  sum: number,
  val: number,
  ind: number,
  arr: number[]
): number => {
  sum += val;
  return ind == arr.length - 1 ? sum / arr.length : sum;
};

const objReducer: objReducerFunc = (ac, val) => ({
  sum: val + ac.sum,
  count: ac.count + 1
});
export const average3: reducerArrFunc = arr => {
  const sc = arr.reduce(objReducer, { sum: 0, count: 0 });
  return sc.sum / sc.count;
};

interface reverseStringProto {
    (userString:string):string;
}
export const reverseString:reverseStringProto = str => {
  let arr = str.split('');
  arr.reverse();
  return arr.join("");
};

export const reverseString2:reverseStringProto = str =>str.split("").reduceRight(sumStr,"");  
