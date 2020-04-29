var recipes = new Object({ ingredient: 'at least three' })

function updateObjectWithKeyAndValue(recipes, key, value) {
  var newObj = Object.assign({}, { key: value })
  console.log(newObj)
}

function updateObjectWithKeyAndValue
