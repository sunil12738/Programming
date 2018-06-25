//Find the parent of a given key in a object

//The function findParent will create a reverse mapping of the object
function findParent(obj, prevKey, newObj) {
	Object.keys(obj).forEach(function (key){
		if (typeof obj[key] === "object") {
			findParent(obj[key], key, newObj)
		} else {
			newObj[obj[key]] = key
		}
		newObj[key] = prevKey
	})
}

let testObj = {
  a: {
    b: {
      c: {
        d: "1"
      }
    }
  },
  e: "2"
}
let newObj = {}
findParent(testObj, -1, newObj)
