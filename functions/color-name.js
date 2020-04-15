/**BOX SELECTION */
const box= document.querySelectorAll(".box")
/**LOOP THE BOX */
for (let i = 0; i <box.length  ; i++) {
    
    /**GETTING COLOR RGB */
const element = box[i].firstElementChild;
const style = getComputedStyle(element);
const rgb = style["background-color"]
 r= parseInt(rgb.split(",")[0].split("rgb(")[1]) ;
 g= parseInt(rgb.split(",")[1]) ;
 b= parseInt(rgb.split(",")[2].split(")")[0]) ;
console.log(r,g,b);    
console.log(RGBToHex()); 



/**COLORS */
const n_match  = ntc.name(this.RGBToHex());
n_rgb        = n_match[0]; // RGB value of closest match
n_name       = n_match[1]; // Text string: Color name
console.log(n_name); 

/**COLOR NAMES */ 
const name = document.querySelectorAll(".name");

/**HEX CODE */
const code= document.querySelectorAll(".code");

/**INSERTING THE HEX CODE AND COLOR NAME */
name[i].innerHTML=n_name;  
code[i].innerHTML= n_rgb ; 

} 



/**RGB TO HEX */
function RGBToHex() {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  // console.log(r); 
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g; 
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }
  //console.log(RGBToHex());  
  



