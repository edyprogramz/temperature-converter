document.getElementById("btn").onclick = function(){
    
    celsius = document.getElementById("cel").checked
    fahrenheit = document.getElementById("fah").checked
    temp = document.getElementById("tem").value
    temp = Number(temp);

    if(celsius){
        fahren = (temp * 1.8) + 32
        document.getElementById("result").innerHTML = `${fahren} ℃`
    }
    else if(fahrenheit){
        cels = (temp - 32) * 0.5555;
        document.getElementById("result").innerHTML = `${cels} ℉` 
    }
    else{
        document.getElementById("result").innerHTML = "null"
    }
}