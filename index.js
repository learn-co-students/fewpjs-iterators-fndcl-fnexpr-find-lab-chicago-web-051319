const testVar = {}

function superbowlWin(teamRecords) {
  const win = teamRecords.find((record)=>{
    return record.result == "W"
  });

  if (win) {
    return (win.year);
  }

  return win;
}
