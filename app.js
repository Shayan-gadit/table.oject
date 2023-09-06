var student1 = {
    firstName: "Shayan",
    lastName: "Gadit",
    age: 22,
    id: Math.random(),
    phone: '+923051739315',
};

var student2 = {
    firstName: "Saad",
    lastName: "Gadit",
    age: 18,
    id: Math.random(),
    phone: '+923079980482',
};
var student3 = {
    firstName: "Muhammad",
    lastName: "Faizan",
    age: 22,
    id: Math.random(),
    phone: '+923009007801',
};
var student4 = {
    firstName: "Arfeen",
    lastName: "Gadit",
    age: 25,
    id: Math.random(),
    phone: '+9230509007801',
};
var student5 = {
    firstName: "zunair",
    lastName: "uddin",
    age: 19,
    id: Math.random(),
    phone: "+9230509007801",
};

var studentList = [student1, student2, student3, student4, student5];
// console.log(studentList);
var list = document.getElementById("tbody");
// console.log(list);
function render() {
    list.innerHTML = "";
    for (var i = 0; i < studentList.length; i++) {
        // console.log(studentList[i]);
        list.innerHTML += `<tr class='tr'>
        <td class = 'td'>   ${i +1}</td> 
        <td class = 'td'>  ${studentList[i].firstName} </td>
      <td class = 'td'>  ${studentList[i].lastName} </td> 
      <td class = 'td'>  ${studentList[i].age}</td>
      <td class = 'td'>  ${studentList[i].id}</td>
      <td class = 'td'>  ${studentList[i].phone}</td>
      `;
    }
}
render();