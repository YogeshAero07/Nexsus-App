import React, { useContext } from "react";
import DragItem from "./DragItem";
import { Grid, GridImage, GridItem } from "./Grid";
import GridContext from "./GridContext";
import ImgUpload from "./ImgUpload";
import "./Main.css";

const Main = () => {
  const { items, moveItem } = useContext(GridContext);

  return (
    <div className="Main">
      <div>
        <ImgUpload />
      </div>
      <div>
        <Grid>
          {items.map((item) => (
            <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
              <GridItem>
                <GridImage src={item.src}></GridImage>
              </GridItem>
            </DragItem>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Main;
