/**
 * dom.js
 * <ul id="target">
	 <li>apple</li>
	 <li>banana</li>
   </ul>
   Document Object Model
 */
let ul = document.createElement('ul'); // <ul />
ul.setAttribute('id', 'target'); // ul에 id="target"

let li = document.createElement('li'); // <li />
li.innerText = 'apple';
ul.appendChild(li); // 하위 요소로 등록

let li2 = document.createElement('li'); // <li />
li2.innerText = 'banana';
ul.appendChild(li2); // 하위 요소로 등록
console.log(ul);

// <div id='show' />
document.querySelector('#show').appendChild(ul);