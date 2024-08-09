import { IService } from "../types/service";
import { IServiceTag } from "../types/serviceTag";

export const ServicesList = [
  {
    id: 0,
    name: "Rooftop",
    min_price: 12,
    tags: [
      { id: 0, tag: "Good spirits" } as IServiceTag,
      { id: 1, tag: "Alcohol 18+" } as IServiceTag,
      { id: 2, tag: "New people" } as IServiceTag,
    ] as IServiceTag[],
  } as IService,
  {
    id: 1,
    name: "Møterom",
    min_price: 250,
    tags: [{ id: 3, tag: "Business meetings" } as IServiceTag, { id: 4, tag: "Work" } as IServiceTag] as IServiceTag[],
  } as IService,
  {
    id: 2,
    name: "Spa",
    min_price: 120,
    tags: [
      { id: 5, tag: "Spa" } as IServiceTag,
      { id: 6, tag: "Yoga" } as IServiceTag,
      { id: 7, tag: "Massage" } as IServiceTag,
    ] as IServiceTag[],
  } as IService,
] as IService[];
