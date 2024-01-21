document.getElementById("p3").addEventListener("mouseover", ()=>{
    document.getElementById("span1").style.color = "rgb(0, 153, 0)"
    document.getElementById("div1").classList.add("anc");
    document.getElementById("span1").innerHTML = "expand_less"
})
div1.addEventListener("mouseover", ()=>{
    document.getElementById("div1").classList.add("anc");
    document.getElementById("span1").innerHTML = "expand_less"  
})
div1.addEventListener("mouseout", ()=>{
    document.getElementById("div1").classList.remove("anc");
    document.getElementById("span1").innerHTML = "expand_more" 
})
document.getElementById("p3").addEventListener("mouseout", ()=>{
    document.getElementById("span1").style.color = "black"
        document.getElementById("div1").classList.remove("anc");
        document.getElementById("span1").innerHTML = "expand_more"
})
ui("allltwo").style.display = "none";
document.getElementById("p7").addEventListener("click", ()=>{
    document.getElementById("allone").style.display = "none";
    document.getElementById("allltwo").style.display = "block";
    ui("final").style.display = "none";

})
function ui(name){
    return document.getElementById(name)
}

const pElements = document.querySelectorAll('.p1');

    // Add click event listeners to each element
    pElements.forEach(element => {
      element.addEventListener('click', () => {
        // Reset color for all elements
        pElements.forEach(otherElement => {
          otherElement.classList.remove('selected');
        });

        // Set color for the clicked element to green
        element.classList.add('selected');
      });
    });










var checked = false;
ui("inp3").onclick = function(){
    checked = true;
}
ui("inp4").onclick = function(){
    checked = true;
}

ui("suraj").onclick = () => {
    if(checked == false){
        return
    }
    var a = parseFloat(ui("inp1").value); // Assuming inp1 is the input field for electricity consumption
    var b = parseInt(ui("inp2").value);   // Assuming inp2 is the input field for number of plants
    
    // Calculate the sustainability score
    var rawSustainabilityScore = (1 / (1 + a / 24)) * b;
    
    var sustainabilityScoreOnScaleOf10 = Math.min((rawSustainabilityScore / 10) * 10, 10);

// Use the sustainability score on a scale of 0 to 10 as needed
sessionStorage.setItem("score" , sustainabilityScoreOnScaleOf10)
window.location.href = "score.html"
}

ui("btn2").onclick = () => {
    ui("sectiontwo").classList.add("anc1");
    ui("alltwo").classList.add("blur");
    ui("topbar").classList.add("blur");



}
ui("s2").onclick = () => {
    ui("sectiontwo").classList.remove("anc1");
    ui("alltwo").classList.remove("blur");
    ui("topbar").classList.remove("blur");
}
ui("p2").onclick = () => {
    ui("allltwo").style.display = "none";
    ui("allone").style.display = "block";
    ui("final").style.display = "none";
}

ui("p4").onclick = () => {
    ui("allltwo").style.display = "none";
    ui("allone").style.display = "none";
    ui("final").style.display = "block";
}