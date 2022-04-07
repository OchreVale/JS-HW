window.onload = ()=>{
    fill_table();
}
function fill_table(){
    var formatter = new Intl.NumberFormat("en-us",{
        style:"currency",
        currency:"RUB",
    })
    let HTML_data ="";
    let control = true;
    let sum = 0;
    while(control == true){
        let data = query_data();
        if(data[0] != '-1'){
        sum+=data[1]*15;
        HTML_data+=`<tr><td>${data[0]}</td><td>${data[1]}</td><td>${formatter.format(data[1]*15)}</td></tr>`;
        }
        else{
            control = false;
        }
    }
    HTML_data+=`<tr><td colspan="2">Total</td><td>${formatter.format(sum)}</td></tr>`;
    document.getElementById("data").innerHTML = HTML_data;
}
function query_data(){
    const name = prompt("Enter employee first and last name or -1 to stop");

    let hours;
    if(name !='-1'){
     hours= prompt(`Enter the number of hours ${name} worked`);
    }
    return [name, hours];
}