import React, { useState, useRef } from "react";
import Tile from "../../util/tiles/Tile";
import {
  tileLevel1,
  tileLevel2,
  tileLevel3,
  boardLayout,
} from "../../util/tiles/beginnerTiles";
import {
  getTileTopLeft,
  getTileTopRight,
  getTileBottomLeft,
  getTileBottomRight,
  removeTile,
  getIsTileFree,
  getTileUpperLevel,
  getTileSelected,
} from "../../util/tileLevelFunctions";
import "../../style.css";

const Board = () => {
  // const [bottomHolder, setBottomHolder] = useState([]);
  // const [getTileRemoved, setGetTileRemoved] = useState([]);

  // const onTileClick = (layoutIndex, rowIndex, columnIndex) => {

  //   const tileUpperLevel = getTileUpperLevel(z, boardLayout);
  //   const isTileFree = getIsTileFree(x, y, z, tileUpperLevel);
  //   const tileSelected = getTileSelected(isTileFree, tileLevel, x, y);u

  //   setBottomHolder([bottomHolder.push(tileSelected)]);

  //   removeTile(x, y, tileLevel, setGetTileRemoved);
  // };

  return (
    <div>
      {boardLayout.map((tileLevel, layoutIndex) => {
        return tileLevel.map((tileRow, rowIndex) => {
          return (
            <div>
              {tileRow.map((tile, columnIndex) => {
                return (
                  <Tile
                    url={tile?.url}
                    title={tile?.title}
                    id={tile.id}
                    layoutIndex={layoutIndex}
                    rowIndex={rowIndex}
                    columnIndex={columnIndex}
                    tileLevel={tileLevel}
                  />
                );
              })}
            </div>
          );
        });
      })}
    </div>
  );
};

export default Board;
