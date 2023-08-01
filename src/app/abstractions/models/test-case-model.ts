import { CommonModel } from "./common-model";

export interface TestCaseModel extends CommonModel {
  suiteId: number;
  url: string;
  name: string;
}
