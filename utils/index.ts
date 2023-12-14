/**
 * 1. 解决 JSON 字符串 parse 过程中大数丢失精度的问题
 * 2. 循环遍历 JSON 字符串，将所有 value 是 JSON 字符串的都是转成对象 
 */
import JSONBig from 'json-bigint';

export function deepParseBigintJson(jsonStr) {
  let parsed;
  try {
    parsed = typeof jsonStr === 'object' ? jsonStr : JSONBig.parse(jsonStr);
  } catch (err) {
    return jsonStr;
  }

  if (typeof parsed === 'object' && parsed !== null) {
    Object.keys(parsed).forEach(key => {
      console.log(parsed[key]);
      parsed[key] = deepParseBigintJson(parsed[key]);
    });
  }

  return parsed;
}
