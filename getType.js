//default 없고 이름 지정 시 여러게 포함 가능
//선언 방법 import { getType, getType1 } from './getType' 
export function getTypeO(data)//내보내기
{
  return Object.prototype.toString.call(data).slice(8,-1)
}

export const test = {
  name: 'nameStr',
  age: 23
}