/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1356382814")

  // update field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "ffm8odgwcsxpxqe",
    "hidden": false,
    "id": "relation3008507745",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "estudiantes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1356382814")

  // update field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "ffm8odgwcsxpxqe",
    "hidden": false,
    "id": "relation3008507745",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "estudiantes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
