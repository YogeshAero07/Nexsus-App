import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Main from "./Main";
import { GridProvider } from "./GridContext";

const Container = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <GridProvider>
        <Main />
      </GridProvider>
    </DndProvider>
  );
};

export default Container;
