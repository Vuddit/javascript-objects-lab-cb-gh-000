var recipes = new Object({ ingredient: 'at least three' })

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, { [key]: value })
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var object = Object.assign({}, object, { [key]: value })
  return object
}
