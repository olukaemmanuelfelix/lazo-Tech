//toggling navigation
const toggleBtn = document.querySelector('.MenueToggle');
const dropdownMenu = document.querySelector('.dropdown_menu');
const navLinks = document.querySelectorAll('.dropdown_menu a');

toggleBtn.addEventListener('click', function () {
    dropdownMenu.classList.toggle('open');
});

navLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
        // Close the dropdown menu after a short delay
        setTimeout(() => {
            dropdownMenu.classList.remove('open');
        }, 100);
    });
});


//toggling disgital marketing
document.getElementById('btn').addEventListener('click', function(){
    var list = document.getElementById('items');
    list.style.display = (list.style.display === 'none')
    ? 'block'
    : 'none'; 
});

//toggling software installation
document.getElementById('bt').addEventListener('click', function(){
    var list = document.getElementById('tems');
    list.style.display = (list.style.display === 'none')
    ? 'block'
    : 'none'; 
});

//toggling web design and development
document.getElementById('bt_web').addEventListener('click', function(){
    var list = document.getElementById('item_web');
    list.style.display = (list.style.display === 'none')
    ? 'block'
    : 'none'; 
});

//toggling graphics design
document.getElementById('bt_graphics').addEventListener('click', function(){
    var list = document.getElementById('item_graphics');
    list.style.display = (list.style.display === 'none')
    ? 'block'
    : 'none'; 
});

//toggling app design
document.getElementById('bt_app').addEventListener('click', function(){
    var list = document.getElementById('item_app');
    list.style.display = (list.style.display === 'none')
    ? 'block'
    : 'none'; 
});

//toggling app design
document.getElementById('bt_lessons').addEventListener('click', function(){
    var list = document.getElementById('item_lessons');
    list.style.display = (list.style.display === 'none')
    ? 'block'
    : 'none'; 
});