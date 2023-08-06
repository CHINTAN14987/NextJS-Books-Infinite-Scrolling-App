// recoil.js
import { atom } from "recoil";

export const defaultImageAtom = atom({
  key: "defaultImage",
  default: "/public/mode.png",
});
