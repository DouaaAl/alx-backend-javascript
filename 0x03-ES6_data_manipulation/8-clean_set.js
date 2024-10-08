export default function cleanSet(set, startString) {
  const array = [];  

  for (const item of Array.from(set)) {
    if (startString === '') {}
    else if (item.startsWith(startString)) {
      array.push(item.substring(startString.length).trim());
    }
  }

  return array.join('-');
}
