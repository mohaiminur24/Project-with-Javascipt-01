const textArea = document.getElementById("textArea");

function simple(id,target){
    document.getElementById(id).addEventListener("click",function(){
        textArea.classList.remove("text-left","text-right","text-center","text-justify");
        textArea.classList.toggle(target);
    });
}

simple("textLeft","text-left");
simple("textRight","text-right");
simple("textCenter","text-center");
simple("justify","text-justify");
simple("bold","font-bold");
simple("ittalic","italic");
simple("underline","underline");
simple("case","uppercase");


document.getElementById("inputValueSize").addEventListener("change",function(){

    const size = document.getElementById("inputValueSize");
    const fontSize = parseFloat(size.value);
    textArea.classList.remove("text-2xl");
    textArea.style.fontSize = fontSize+"px";

});
document.getElementById("fontColor").addEventListener("change",function(){
    const color = document.getElementById("fontColor");
    const Fcolor = color.value;
    textArea.style.color = Fcolor;
});