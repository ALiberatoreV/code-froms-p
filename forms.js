let list = thelist();
const sectionTag = document.querySelector("#section");



document.querySelector(`form`).addEventListener("submit", function(event) {
    event.preventDefault();

    list = document.querySelector("#listItem").value;
    

})
const template = list.map(list => `
    <h2>List: ${list} </h2>
`);

