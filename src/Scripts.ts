const addBtn = document.querySelector('#addbtn');
const num1 = document.querySelector('#num1') as HTMLInputElement;
const num2 = document.querySelector('#num2') as HTMLInputElement;

function add(){
    return (
        num1.value + num2.value
    );
};
addBtn.addEventListener('click', add())