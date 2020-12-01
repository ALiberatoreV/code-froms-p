let list = [
    {
        todo: "wash dishes"
    }
];
const ul = document.querySelector("ul");



document.querySelector(`form`).addEventListener("submit", function(event) {
    event.preventDefault();
   
    let listI = document.querySelector("#listItem2");
let template;

    list.push({todo:listI.value});
    
    template = list.map(item=>
        `
            <li>todo: ${item.todo} </li>
           
        `
        
        
    );
        
        ul.innerHTML = template;


    
    
});
