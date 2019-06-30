
function superbowlWin(record){
  const resRecord = record.find(function(rec){
    return rec.result == 'W';
  })

  if (resRecord == undefined){
    return undefined;
  } else{
    return resRecord.year;
  }
}
