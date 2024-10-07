export default function hasValuesFromArray(set, array) {
  let exist = true;
  array.forEach((item) => {
    if (!set.has(item)) {
      exist = false;
    }
  })
  return exist;
}
