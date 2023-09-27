import { martech } from "./martech/meta.js";
import { martechTrends } from "./martech-trends/meta.js";

export const initialArticles = [
  {
    tags: ["martech"],
    isObj: false,
    linkPath: martech.path,
    heading: martech.jsTitle,
    description: martech.jsDesc,
    poster: martech.poster,
    size: "medium",
    isColorInverse: false,
  },
  {
    tags: ["martech"],
    isObj: false,
    linkPath: martechTrends.path,
    heading: martechTrends.jsTitle,
    description: martechTrends.jsDesc,
    poster: martechTrends.poster,
    size: "medium",
    isColorInverse: false,
  },
];