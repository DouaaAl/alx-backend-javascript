export default function cleanSet(set, startString) {
  const array = [];

  for (const item of Array.from(set)) {
    if (item.startsWith(startString) && startString !== '') {
      array.push(item.substring(startString.length).trim());
    }
  }

  return array.join('-');
}
