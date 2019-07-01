const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  const winningYear = record.find(function(recordObject){
    if (recordObject.result === "W"){
      return recordObject
    }
  });
  if (winningYear){
   return winningYear.year;
  }
  return winningYear;
};
