export default function cleanSet(set, startString) {
  const array = [];

  if (startString === '' || typeof startString !== 'string') return '';
  for (const item of Array.from(set)) {
    if (item.startsWith(startString)) {
      array.push(item.substring(startString.length).trim());
    }
  }

  return array.join('-');
}
