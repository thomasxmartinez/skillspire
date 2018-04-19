// With the loop below we'll take a list of contacts and loop through each value and create a <p> element
// containing the element.
var contactList = ["Sadie cat", "Coda the pupper", "Swag the fish", "Mr T who is also a fish", "The kittyfish brothers"];

var count = 0;

while (count < contactList.length) {
  document.write("<p>" + contactList[count] + "</p>");
  count = count + 1;
}
