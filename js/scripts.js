document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu-burger').classList.toggle('open');
})


const headerItem = document.querySelectorAll('.bttn2');
const mainContent = document.querySelectorAll('.grid-container-1');

for (let item of headerItem) {
    item.addEventListener('click', function() {
        for (let element of mainContent) {
            element.classList.add('hidden')
        }
        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.remove('hidden')
    })
}


const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', (event) => {
    if (event.target.tagName != 'LI') return false;
    let filterClass = event.target.dataset["f"];
    
    filterBox.forEach( elem => {
        elem.classList.remove('hidden');
        if (!elem.classList.contains(filterClass) && filterClass!== 'all' ){
            elem.classList.add('hidden');
        }
    });
});


let viewBtn = document.querySelector('.btn-view');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');

viewBtn.onclick = function() {
    popup.style.display ='block';
}

popupClose.onclick = function() {
    popup.style.display ='none';
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display ='none';
    }
}


let titles = Array.from(document.querySelectorAll('.accordion__title'));
for (let title of titles) {

    title.addEventListener('click', () => {
        title.nextElementSibling.classList.toggle('hidden2')
    })
}