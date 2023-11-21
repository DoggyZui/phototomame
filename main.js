import { fabric } from "fabric";
import fs from 'fs';

// 설정을 위한 통일된 규격임...
const size_width = 600;
const size_height = 300;
const count_row = 6;
const count_col = 2;

// 아틀라싱 툴임. 다만, 유니티 내에서 편집가능하면 패스해도됨.

const canvas = new fabric.StaticCanvas(null, {width: size_width*count_col, height: size_height*count_row})
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  width: 100,
  height: 50,
  fill: "red"
})
canvas.add(rect);
canvas.renderAll();
canvas.createPNGStream().pipe(fs.createWriteStream("/docs/output.png"))