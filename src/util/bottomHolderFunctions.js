//-----------------Bottom Tile Holder -----------------
const arr = [tile1, tile2, tile3, tile1, tile4, tile1, tile2];

const tilesInOrder = (bottomTileHolder) => {
  return bottomTileHolder.sort();
};

const addTileToBottomHolder = (tile, bottomTileHolder) => {
  return [...bottomTileHolder, tile];
};

const removeGroupBottomHolder = (sortedBottomTileHolder) => {
  //to do
  //finds and removes the group of 3 and returns a new tileHolder
};

//should be called after "addTile"... and the "removeGroup"
const isGameOver = (bottomTileHolder) => {
  return bottomTileHolder.length >= 7;
};

module.exports = {
  tilesInOrder,
  addTileToBottomHolder,
  removeGroupBottomHolder,
  isGameOver,
};