//cashe variables
var form = document.querySelector('form');
var ul = document.querySelector('ul');
var input = document.querySelector('#item');
var clearButton = document.querySelector('button');
var items = JSON.parse(localStorage.getItem('item1')) ?JSON.parse(localStorage.getItem('item1')) : [] ;
var data = JSON.parse(localStorage.getItem('item1')) ? JSON.parse(localStorage.getItem('item1')): [] ;
var createLi = (text) => {
	var li = document.createElement('li');
	li.textContent = text;
	ul.appendChild(li);
}

data.map((item) => {
	createLi(item)
	})

//event
form.addEventListener('submit',function(e){

	e.preventDefault();
	items.push(input.value);
	localStorage.setItem('item1' , JSON.stringify(items));
	createLi(input.value);
	input.value = " ";
})

clearButton.addEventListener('click',function(){
	localStorage.clear();
	ul.innerHTML = '';
	})
