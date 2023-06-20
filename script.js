// function expandMe() {
//     var expandParagraph = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ipsam iusto recusandae? Corrupti, laboriosam a deserunt repellat quaerat, et tenetur ipsum maiores quia veritatis error aut commodi ipsa, vitae eligendi.";
//     paragraph.innerHTML = expandParagraph;
// }

function expandMe() {
    var expandParagraph = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ipsam iusto recusandae? Corrupti, laboriosam a deserunt repellat quaerat, et tenetur ipsum maiores quia veritatis error aut commodi ipsa, vitae eligendi.<a href='javascript:void(0);' ><em onclick='reduceMe();'>Click for less</em> </a>";
    
    paragraph.innerHTML = expandParagraph
    
}
 
function reduceMe() {
    var reduceParagraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime accusamus eligendi a quis animi aspernatur,eveniet quidem natus,<a href='javascript:void(0);' ><em onclick='expandMe();'>Click Me</em> </a>"
    paragraph.innerHTML = reduceParagraph;
}

function showInConsole() {
     var where =   paragraph.innerHTML
     console.log(where);
}
