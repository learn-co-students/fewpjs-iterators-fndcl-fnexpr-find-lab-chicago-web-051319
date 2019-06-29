const superbowlWin = (arr) => {
  // try {
  //   return arr.find(x => x.result == 'W').year;
  // } catch (e) {
  //     return;
  // }
  let winner = arr.find(x => x.result == 'W');
  return winner ? winner.year : undefined;

}
