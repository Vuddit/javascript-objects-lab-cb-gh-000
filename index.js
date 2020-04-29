var recipes = new Object({ ingredient: 'at least three' })

updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, { key: value })
}
