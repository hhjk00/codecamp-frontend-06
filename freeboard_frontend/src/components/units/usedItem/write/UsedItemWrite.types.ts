export interface IUpdateUseitemInput {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  tags?: string[];
  useditemAddress?: {
    address?: any;
    addressDetail?: string;
    lat?: string;
    lng?: string;
  };
  images?: string[] | undefined;
}
