export default function (){

}//현재 프로젝트는 import나 export를 사용하지 않으면 오류 발생

let msg: string = 'Hello World';
let value: number = 1;//숫자는 number로 선언

let nullableString: string | null = null;
nullableString = 'Hi';

let undefinedOrNumber: number | undefined;
undefinedOrNumber = 10;

let numberOrStringOrNull: number | string | null = null;
numberOrStringOrNull = 1;
numberOrStringOrNull = 'Bye';
numberOrStringOrNull = null;

let isCompleted: boolean = true;
isCompleted = false;

let anyValue: any = null;
anyValue = undefined;
anyValue = 1;
anyValue = 'Hello';
