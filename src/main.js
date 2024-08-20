const list = document.createElement("ul");
const info = document.createElement("p");
const html = document.querySelector("html");

info.textContent = "Below attached is a dynamic list. Click anywhere on the page to add a new list item. Click an" +
    " existing item to change its text to something else.';\n"

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
    const listItem = document.createElement('li');
    listItem.textContent = prompt('What content do you want the list item to have?');
    list.appendChild(listItem);

    listItem.onclick = function(e) {
        e.stopPropagation();
        const listContent = prompt('Enter new content for your list item');
        this.textContent = listContent;
    }
}