import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";

export class FarmCell {

  @Column()
  toto: number;

  constructor() {
    this.toto = 12;
  }
}
