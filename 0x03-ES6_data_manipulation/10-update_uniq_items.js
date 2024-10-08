export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, item] of items) {
    if (item === 1) items.set(key, 100);
  }

  return items;
}
