var elements = document.getElementById("column");

let picture = '<img src="./images/kit1.jpg"/>'

let rowOfPuppies = [];



function row (){
    rowOfPuppies.push("<tr>");
    for (var i=0; i<9; i++){
        rowOfPuppies.push("<td>" + picture + "</td>");
    };
    rowOfPuppies.push("</tr>");
}

function table(){
    rowOfPuppies.push("<tbody>");
    for (var i=0; i<9; i++){
        row();
    }
    rowOfPuppies.push("</tbody>");

    return rowOfPuppies;
}



 elements.innerHTML = table().join("");

 

