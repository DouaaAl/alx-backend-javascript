export default function getStudentIdsSum(students) {
  const sum = students.reduce((acc, curr) => curr.id + acc, 0);
  return sum;
}
