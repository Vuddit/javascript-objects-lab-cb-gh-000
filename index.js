var recipes = new Object({ ingredient: 'at least three' })

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, { key: value })
  console.log(newObj)
}

function updateObjectWithKeyAndValue
