const findItemsEl = document.querySelectorAll(".item");
console.log(`Number of categories : ${findItemsEl.length}`);
const nameCategory = findItemsEl.forEach(elem => {
    const headingNameEl = elem.querySelector("h2").textContent;
    const itemCount = elem.querySelector("ul").children.length;
    console.log(`Category: ${headingNameEl} 
    Elements: ${itemCount}`);   
})