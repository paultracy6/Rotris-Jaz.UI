import { CommonModel } from "./common-model";

export interface TestDataModel extends CommonModel {
  testTypeId: number;
  testCaseId: number;
  name: string;
  isDefault: boolean;
  isSuspended: boolean;
  suspendedOn: string;
  suspendedBy: string;
  comment: string;
}
