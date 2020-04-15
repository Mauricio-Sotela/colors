/**GETTING COLOR RGB */
const element = document.querySelector(".box1");
const style = getComputedStyle(element);
const rgb = style["background-color"]
let r= parseInt(rgb.split(",")[0].split("rgb(")[1]) ;
let g= parseInt(rgb.split(",")[1]) ;
let b= parseInt(rgb.split(",")[2].split(")")[0]) ;
//console.log(r,g,b); 

/**RGB TO HEX */
function RGBToHex() {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
   //console.log(r);
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g; 
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }
  //console.log(RGBToHex());  
  

/**COLORS */
const n_match  = ntc.name(`${RGBToHex()}`);
n_rgb        = n_match[0]; // RGB value of closest match
n_name       = n_match[1]; // Text string: Color name
n_exactmatch = n_match[2]; // True if exact color match

/**COLOR NAMES */
const color1 = document.querySelector("#color-name1");
const color2 = document.querySelector("#color-name2");
const color3 = document.querySelector("#color-name3");
const color4 = document.querySelector("#color-name4");
//console.log(color1);
/**HEX CODE */
const codeColor1 = document.querySelector("#color-code1");
const codeColor2 = document.querySelector("#color-code2");
const codeColor3 = document.querySelector("#color-code3");
const codeColor4 = document.querySelector("#color-code4");



/**INSERTING THE HEX CODE AND COLOR NAME */
color1.innerHTML=n_match[1];  
codeColor1.innerHTML= n_match[0]

