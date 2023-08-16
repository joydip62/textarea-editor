function changeValue(elementId, styleAttribute, value) {
  document.getElementById(elementId).addEventListener("click", function () {
    const textarea = document.getElementById("text-area");
    if (textarea.style[styleAttribute] === value) {
      textarea.style[styleAttribute] = ""; // Remove the style
    } else {
      textarea.style[styleAttribute] = value; // Apply the style
    }
  });
  return changeValue;
}

const fontWeight = changeValue("bold", "fontWeight", "bold");
const fontItalic = changeValue("italic", "fontStyle", "italic");
const fontUnderLine = changeValue("underline", "textDecoration", "underline");


const textLeft = changeValue("text-left", "textAlign", "left");
const textCenter = changeValue("text-center", "textAlign", "center");
const textRight = changeValue("text-right", "textAlign", "right");
const textJustify = changeValue("text-justify", "textAlign", "justify");

const textCapitalize = changeValue(
  "text-capitalize",
  "textTransform",
  "capitalize"
);

const fontSize = document.getElementById("font-size");
fontSize.addEventListener('change', function () {
    const size = fontSize.value;
    const fontSizeNumber = parseFloat(size);
    // console.log(fontSizeNumber);
    const check = changeValue("font-size", "fontSize", `${fontSizeNumber}`);
    console.log(check);
})

 const textColor = document.getElementById("font-color");
 textColor.addEventListener("input", function () {
   const selectedColorValue = textColor.value;
     changeValue("font-color","color",`${selectedColorValue}`);
 });
