const input = document.querySelectorAll('.controls input');

function handleUpdate(){
// console.log(this.value);
const suffix= this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
input.forEach(input => input.addEventListner('change',handleUpdate));
input.forEach(input => input.addEventListner('mousemove',handleUpdate));