const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  const obj = arr.find(e => (e.result === "W"))
  if (obj == undefined){
    return undefined}
    else{
      return obj.year
    }
  
}