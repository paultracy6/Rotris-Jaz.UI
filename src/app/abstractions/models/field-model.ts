import { CommonModel } from "./common-model";

export interface FieldModel extends CommonModel {
  testDataId: number;
  name: string;
  value: string;
}
