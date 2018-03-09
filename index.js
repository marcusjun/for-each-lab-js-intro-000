//var array=[]

function iterativeLog(array,callback){
  array.forEach(callback)
  //array.push(`${index}: ${element}`))
}

function iterate(callback){
  var animals=["cats","dogs","geese"]
  animals.forEach(callback)
  return animals
}

function doToArray(array,callback){
  array.forEach(callback)
}
