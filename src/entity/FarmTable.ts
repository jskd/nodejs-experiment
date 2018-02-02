import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";
import {FarmCell} from "./FarmCell";

@Entity()
export class FarmTable {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  col: number;

  @Column()
  row: number;

  @Column(type => FarmCell)
  cell: FarmCell[];

  constructor(col: number, row: number) {
    this.col = col;
    this.row = row;
    this.cell = [];

    for(var c=0; c<row*col; c++) {
        this.cell[c] = new FarmCell();
    }
  }
}
