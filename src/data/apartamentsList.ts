import { IApartament } from "../types/apartament";
import LeiraImage from "../assets/images/leira.png";
import LofotenImage from "../assets/images/lofoten.png";
import HardengerfjordImage from "../assets/images/hardengerfjord.png";
import ØstmarkaImage from "../assets/images/Østmarka.png";
import ØsterdalenImage from "../assets/images/Østerdalen.png";
import LeiraMainImage from "../assets/images/leira_main.jpg";
import LofotenMainImage from "../assets/images/lofoten_main.jpg";
import HardengerfjordMainImage from "../assets/images/hardengerfjord_main.jpg";
import ØstmarkaMainImage from "../assets/images/Østmarka_main.jpg";
import ØsterdalenMainImage from "../assets/images/Østerdalen_main.jpg";
import LeiraSchemeImage from "../assets/images/leira_scheme.png";
import LofotenSchemeImage from "../assets/images/lofoten_scheme.png";
import HardengerfjordSchemeImage from "../assets/images/hardengerfjord_scheme.png";
import ØstmarkaSchemeImage from "../assets/images/Østmarka_scheme.png";
import ØsterdalenSchemeImage from "../assets/images/Østerdalen_scheme.png";

export const ApartamentsList = [
  {
    id: 0,
    name: "Leira",
    description: "Studio",
    icon: LeiraImage,
    main_image: LeiraMainImage,
    scheme_image: LeiraSchemeImage,
  } as IApartament,
  {
    id: 1,
    name: "Lofoten",
    description: "Studio with balcony",
    icon: LofotenImage,
    main_image: LofotenMainImage,
    scheme_image: LofotenSchemeImage,
  } as IApartament,
  {
    id: 2,
    name: "Hardengerfjord",
    description: "Apartment with balcony",
    icon: HardengerfjordImage,
    main_image: HardengerfjordMainImage,
    scheme_image: HardengerfjordSchemeImage,
  } as IApartament,
  {
    id: 3,
    name: "Østmarka",
    description: "Deluxe studio",
    icon: ØstmarkaImage,
    main_image: ØstmarkaMainImage,
    scheme_image: ØstmarkaSchemeImage,
  } as IApartament,
  {
    id: 4,
    name: "Østerdalen",
    description: "Deluxe apartment with balcony",
    icon: ØsterdalenImage,
    main_image: ØsterdalenMainImage,
    scheme_image: ØsterdalenSchemeImage,
  } as IApartament,
] as IApartament[];
