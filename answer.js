const duplicateEncode=(word)=>{
  return word.toLowerCase().split("").map((e,i,a)=>{
    return a.indexOf(e) == a.lastIndexOf(e) ? "(":")"
  }).join("") 
}
