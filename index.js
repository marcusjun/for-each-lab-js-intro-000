function iterativeLog(element,index,array){
  array.forEach(callback=>{
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var animals=["cats","dogs","geese"]
  animals.forEach(callback)
  return animals
}

function doToArray(array,callback){
  array.forEach(callback)
}
