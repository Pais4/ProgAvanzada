user = {
    email: 'mateo@gmail.com',
    password: '123456'
}

var counter = 0;
var acumulado = 0;
var promedio = 0;

const { email, password } = user;

const validateUser = () => {

    if (email === 'mateo@gmail.com' && password === '123456') {
        location.href ="home.html";
    } else {
        alert('Email or password incorrect')
    }

}

function getInfo() {
    
    const productName = document.getElementById('productName').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;

    if(productName === '' || description === '' || price === ''){
        alert('Debe ingresar todos los campos')
    } else {
        counter++;
        acumulado = acumulado + parseInt(price);
        promedio = acumulado / counter;
        
        document.getElementById("clicks").innerHTML = counter;
        document.getElementById("promedio").innerHTML = promedio;
    
        var table = document.getElementById("service").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = productName;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = description;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = price;
        cell4 = newRow.insertCell(3);


    }


}






