//default 한개만 지정해줄수 있음
export default function (data)//내보내기
{
  return Object.prototype.toString.call(data).slice(8,-1)
}
export function getType3(data)//내보내기
{
  return Object.prototype.toString.call(data).slice(8,-1)
}