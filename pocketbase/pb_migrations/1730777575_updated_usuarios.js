/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ffm8odgwcsxpxqe")

  collection.options = {
    "allowEmailAuth": false,
    "allowOAuth2Auth": false,
    "allowUsernameAuth": true,
    "exceptEmailDomains": [],
    "manageRule": null,
    "minPasswordLength": 5,
    "onlyEmailDomains": [],
    "onlyVerified": false,
    "requireEmail": false
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ffm8odgwcsxpxqe")

  collection.options = {
    "allowEmailAuth": false,
    "allowOAuth2Auth": false,
    "allowUsernameAuth": true,
    "exceptEmailDomains": [],
    "manageRule": null,
    "minPasswordLength": 5,
    "onlyEmailDomains": [],
    "onlyVerified": true,
    "requireEmail": false
  }

  return dao.saveCollection(collection)
})
