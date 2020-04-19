const capitalRec = function (capital, tiempo, tasa){ //Función que engloba función recursiva
   
    const capitalFunc = function (capital, tiempo, tasa) {
        let n = 0
    
        let interes = capital*tasa; //Paso Básico
    
        if (n<tiempo){
            interes += capitalFunc(capital+interes, tiempo-1, tasa); //Paso Recursivo
        }
        return interes;
    }

    capital = capital;
    tiempo = tiempo-1; //Restar uno para compensar el contador
    tasa = tasa;

    return capitalFunc(capital, tiempo, tasa); //Retornar el valor
}
 
function validation(){
    let capital = document.getElementById("capital").value;

    if (capital === ''){
        alert("Por favor llenar todos los campos.")
        return false
    } else if (Number.isInteger(parseInt(capital))===false){
            alert("Por favor insertar un número como capital.")
            return false
    } else {return true}
}

function getData() {

    if (validation()) {
        let capital = parseFloat(document.getElementById("capital").value);
        let t = document.getElementById("tiempo");
        let tiempo = t.options[t.selectedIndex].text;
        let m = document.getElementById("moneda");
        let moneda = m.options[m.selectedIndex].text;

        let tasa = 0

        if (moneda === "CRC"){
            tasa = 0.035
        } else if (moneda === "USD"){
            tasa = 0.002
        }

        interes = capitalRec(capital,tiempo,tasa).toFixed(2)
        
        balance = capital+interes 
        
        document.getElementById("interes").innerHTML = "El interés es " + interes + " " + moneda;
        document.getElementById("balance").innerHTML = "El balance es " + balance + " " + moneda


    }
}

