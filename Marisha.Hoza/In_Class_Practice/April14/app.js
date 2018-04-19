let coolCat = prompt ('Who is the coolest cat of them all?');
let why = prompt ('Why is that cat so cool?');
let anythingElse = prompt ('Anything else?');
let combine = (coolCat + ' because ' + why + ' and ' + anythingElse);
document.getElementById("response").innerHTML = combine;