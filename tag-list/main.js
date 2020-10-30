const inputTags = document.getElementById("input-tags");
const listTags = document.getElementById("tag-list");
// const tagsBar = document.getElementById("tag-bar");

inputTags.addEventListener("keyup", (x) =>{
    // console.log(x.key);

    if(x.key == "Enter"){
        // tagsBar.appendChild(createTag(inputTags.value));
        listTags.appendChild(createTag(inputTags.value));
        inputTags.value = "";
    }
});

function createTag(text){
    console.log(text);

    const liEl = document.createElement("li");
    // spanEl.classList.add("tag");

    const content = document.createTextNode(text);
    liEl.appendChild(content);

    liEl.addEventListener("click", (x) =>{
        liEl.parentNode.removeChild(liEl);
    });

    return liEl;
}