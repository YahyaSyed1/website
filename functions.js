function toggleStyleSheet(){
    element = document.getElementById("ss");
    sname = element.getAttribute("href");
    newname = "style.css";
    newname = sname == "style.css"? "style2.css" : "style.css";
    element.setAttribute("href", newname);

    localStorage.setItem("styleSheet", newname);
}

window.onload = function(){
    current = localStorage.getItem("styleSheet");
    element = document.getElementById("ss");
    element.setAttribute("href", current);
}


