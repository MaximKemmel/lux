import { IServiceTag } from "./serviceTag";

export interface IService {
  id: number;
  name: string;
  min_price: number;
  tags: IServiceTag[];
}
