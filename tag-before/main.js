const inputTags = document.getElementById("input-tags");
const tagsBar = document.getElementById("tag-bar");

inputTags.addEventListener("keyup", (x) =>{
    if(x.key == "Enter"){
        x.preventDefault();
        tagsBar.insertBefore(createTag(inputTags.value), tagsBar.firstChild);
        // tagsBar.appendChild(createTag(inputTags.value));
        inputTags.value = "";
    }
});

function createTag(text){
    console.log(text);

    const spanEl = document.createElement("span");
    spanEl.classList.add("tag");

    const content = document.createTextNode(text);
    spanEl.appendChild(content);

    spanEl.addEventListener("click", (x) =>{
        spanEl.parentNode.removeChild(spanEl);
    });

    return spanEl;
}