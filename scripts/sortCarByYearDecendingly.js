function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  // Sort function
  // result.sort((x, y) => {
  //   return y.year - x.year;
  // });

  // Bubblesort
  for (let i = 0; i < result.length; i++) {
    for (let n = 0; n < result.length - i - 1; n++) {
      // Standard If Function
      // if (result[n].year < result[n + 1].year) {
      //   [result[n], result[n + 1]] = [result[n + 1], result[n]];
      // }

      // Ternary Operator
      result[n].year < result[n + 1].year
        ? ([result[n], result[n + 1]] = [result[n + 1], result[n]])
        : "";
    }
  }

  console.log(result);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
