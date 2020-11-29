let list = "";
const sectionTag = document.querySelector("section");
const listI = document.querySelector("#listItem").value;


document.querySelector(`form`).addEventListener("submit", function(event) {
    event.preventDefault();

    list = listI.value;


let template = 
`
    <h2>list: ${listI} </h2>

`


})
sectionTag.innerHTML = template.map(list);
// const template = list.map(list => `
//     <h2>List: ${list} </h2>
// `);



