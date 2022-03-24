let input = document.querySelector('.form-control');
console.log(input);

let td = document.querySelectorAll('td');
td.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(e.target.innerText);

    if (e.target.innerText == 'C') {
      input.value = '';
    } else if (e.target.innerText == '=') {
      input.value = eval(input.value);
    } else {
      input.value += e.target.innerText;
    }
  });
  console.log(item);
});
