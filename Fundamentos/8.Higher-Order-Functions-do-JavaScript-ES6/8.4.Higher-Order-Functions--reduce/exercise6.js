const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return grades.map((array, index) => {
    return {
    name: students[index],
    average: array.reduce((acc, curr) => acc + curr) / array.length,
  }});
}
console.log(studentAverage());