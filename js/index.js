let input = '';
let new_result = '';


function mountOnInput(value) {
    if (value === '=') {
        try {
           new_result = eval(input);
        } catch (error) {
            new_result = 'Error';
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

function deleteScreen() {
    input = '';
    new_result = '';
    document.getElementById('result').value = '';
}

