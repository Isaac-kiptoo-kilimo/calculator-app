const output=document.querySelector('.output')



let input = '';
let new_result = '';


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn, .operator');
    buttons.forEach( (button)=> {
      button.addEventListener('click', function () {
        const value = this.dataset.value;
        mountOnInput(value);
      });
    });
  
    delete_btn=document.querySelector('.delete')
    delete_btn.addEventListener('click', ()=>{
        input = '';
        new_result = '';
        document.getElementById('result').value = '';
    });
  });
  

function mountOnInput(value) {
    if (value === '=') {
        try {
           new_result = eval(input);
        } catch (invalid) {
            new_result = 'invalid';
        }
        document.getElementById('result').value = new_result;
        input =new_result;
    }
    else if (value === 'C') {
        input = '';
        new_result = '';
        document.getElementById('result').value = '';
    }
    else {
        input += value;
        document.getElementById('result').value = input;
    }
   
}




