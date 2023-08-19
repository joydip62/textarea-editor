// reuseable function
function changeValue(elementId, styleAttribute, value) {
  document.getElementById(elementId).addEventListener("click", function () {
    const textarea = document.getElementById("text-area");
    if (textarea.style[styleAttribute] === value) {
      textarea.style[styleAttribute] = "";
    } else {
      textarea.style[styleAttribute] = value;
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

const textCapitalize = changeValue("text-capitalize","textTransform","capitalize");

const fontSize = document.getElementById("font-size");
fontSize.addEventListener("change", function () {
  const size = fontSize.value;
  const fontSizeNumber = parseFloat(size);
  const check = changeValue("font-size", "fontSize", `${fontSizeNumber}px`);
  console.log(check);
});

document.getElementById("font-color").addEventListener("input", function () {
  const textarea = document.getElementById("text-area");
  const textColor = document.getElementById("font-color").value;

  if (textarea.style.color === textColor) {
    textarea.style.color = "";
  } else {
    textarea.style.color = textColor;
  }
});