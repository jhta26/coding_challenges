function repeats(arr){
return arr.filter(a=>arr.indexOf(a)==arr.lastIndexOf(a)).reduce((a,b)=>a+b)
};