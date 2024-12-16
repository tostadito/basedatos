/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("ffm8odgwcsxpxqe")

  // add field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2985828473",
    "hidden": false,
    "id": "relation4055267424",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "materias",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1356382814",
    "hidden": false,
    "id": "relation942440650",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "clases_asistidas",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("ffm8odgwcsxpxqe")

  // remove field
  collection.fields.removeById("relation4055267424")

  // remove field
  collection.fields.removeById("relation942440650")

  return app.save(collection)
})
