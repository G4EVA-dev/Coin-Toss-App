let Id = { id: null };

function setId(objId) {
  Id.id = objId;
}

function getId() {
  return Id.id;
}

export { setId, getId };