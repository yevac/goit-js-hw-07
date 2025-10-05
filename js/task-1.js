const categorieList = document.querySelector('ul#categories');
console.log(`Number of categories: ${categorieList.children.length}`);

const items = categorieList.querySelectorAll('.item');
items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elements = item.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements}`);
});
