export default function getListStudentIds(array) {
  if(!Array.isArray(array)) {
    return [];
  } else {
    let newArray = array.map((item) => item.id);
    return newArray;
  }
}
