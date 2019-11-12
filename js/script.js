function setValues(){
    dropdowns = document.getElementsByTagName("select");
    for(i=0;i<dropdowns.length;++i)
        for(j=1;j<256;j++){
            var option = document.createElement("option");
            option.text=option.value=j
            dropdowns[i].appendChild(option);   
        }
}
function displayRGBColors(){
    var red, green, blue, redfloat, greenfloat, bluefloat, floatvalue, hdredno,hdgreenno, hdblueno,  hdvlaue, color, table, tbody, tr;
    output = document.getElementById('output');
    tbody = document.createElement('tbody');
    var data = [];
    red = document.getElementById("rednum").value;
    red = Number(rednum.options[rednum.selectedIndex].value);
    green = document.getElementById("greennum").value;
    green = Number(greennum.options[greennum.selectedIndex].value);
    blue = document.getElementById("bluenum").value;
    blue = Number(bluenum.options[bluenum.selectedIndex].value);
    redfloat = (red/255).toFixed(2);
    redfloat = redfloat.toString();
    greenfloat = (green/255).toFixed(2);
    greenfloat = greenfloat.toString();
    bluefloat = (blue/255).toFixed(2);
    bluefloat = bluefloat.toString();
    floatvalue = "(" + redfloat + ", " + greenfloat + ", " + bluefloat + ")";
    hdredno = red.toString(16).toUpperCase();
    hdgreenno = green.toString(16).toUpperCase();
    hdblueno = blue.toString(16).toUpperCase();
    hdvalue = "#" + hdredno + hdgreenno + hdblueno;
    color = 'rgb(' + [red,green,blue].join(',') + ')';
    clr=["#d1ecf1","#d1ecf1",color];
    data.push(floatvalue);
    data.push(hdvalue);
    data.push('');
    tr = document.createElement('tr');
    for(i=0;i<data.length;++i){
        td = document.createElement('td');
        td.setAttribute('class', 'text-center');
        td.style.backgroundColor=clr[i];
        cell = document.createTextNode(data[i]);   
        td.appendChild(cell);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    output.appendChild(tbody);   


}

function displayCMYColors(){
    var red, green, blue, redfloat, greenfloat, bluefloat, floatvalue, hdredno,hdgreenno, hdblueno,  hdvlaue, color, table, tbody, tr;
    output = document.getElementById('output');
    tbody = document.createElement('tbody');
    var data = [];
    red = document.getElementById("rednum").value;
    red = 255 - Number(rednum.options[rednum.selectedIndex].value);
    green = document.getElementById("greennum").value;
    green = 255 -Number(greennum.options[greennum.selectedIndex].value);
    blue = document.getElementById("bluenum").value;
    blue = 255 - Number(bluenum.options[bluenum.selectedIndex].value);
    redfloat = (red/255).toFixed(2);
    redfloat = redfloat.toString();
    greenfloat = (green/255).toFixed(2);
    greenfloat = greenfloat.toString();
    bluefloat = (blue/255).toFixed(2);
    bluefloat = bluefloat.toString();
    floatvalue = "(" + redfloat + ", " + greenfloat + ", " + bluefloat + ")";
    hdredno = red.toString(16).toUpperCase();
    hdgreenno = green.toString(16).toUpperCase();
    hdblueno = blue.toString(16).toUpperCase();
    hdvalue = "#" + hdredno + hdgreenno + hdblueno;
    color = 'rgb(' + [red,green,blue].join(',') + ')';
    clr=["#d1ecf1","#d1ecf1",color];
    data.push(floatvalue);
    data.push(hdvalue);
    data.push('');
    tr = document.createElement('tr');
    for(i=0;i<data.length;++i){
        td = document.createElement('td');
        td.setAttribute('class', 'text-center');
        td.style.backgroundColor=clr[i];
        cell = document.createTextNode(data[i]);   
        td.appendChild(cell);
        tr.appendChild(td);  
    }
    tbody.appendChild(tr);
    output.appendChild(tbody);   


}

function generateRandomColors(){
    let k;
    for(k=0; k<10; ++k)
    {
    var red, green, blue, redfloat, greenfloat, bluefloat, floatvalue, hdredno,hdgreenno, hdblueno,  hdvlaue, color, table, tbody, tr;
    output = document.getElementById('output');
    tbody = document.createElement('tbody');
    var data = [];
    red =Math.round(Math.random()*255);
    green =Math.round(Math.random()*255);
    blue = Math.round(Math.random()*255);
    redfloat = (red/255).toFixed(2);
    redfloat = redfloat.toString();
    greenfloat = (green/255).toFixed(2);
    greenfloat = greenfloat.toString();
    bluefloat = (blue/255).toFixed(2);
    bluefloat = bluefloat.toString();
    floatvalue = "(" + redfloat + ", " + greenfloat + ", " + bluefloat + ")";
    hdredno = red.toString(16).toUpperCase();
    hdgreenno = green.toString(16).toUpperCase();
    hdblueno = blue.toString(16).toUpperCase();
    hdvalue = "#" + hdredno + hdgreenno + hdblueno;
    color = 'rgb(' + [red,green,blue].join(',') + ')';
    clr=["#d1ecf1","#d1ecf1",color];
    data.push(floatvalue);
    data.push(hdvalue);
    data.push('');
    tr = document.createElement('tr');
    for(i=0;i<data.length;++i){
        td = document.createElement('td');
        td.setAttribute('class', 'text-center');
        td.style.backgroundColor=clr[i];
        cell = document.createTextNode(data[i]);   
        td.appendChild(cell);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    output.appendChild(tbody);   
    }

}

function rgb(){
    var red=document.getElementsByClassName('red');
    for(var i=0;i<red.length;i++)
    red[i].style.color='red';

    var green=document.getElementsByClassName('green');
    for(var i=0;i<green.length;i++)
    green[i].style.color='green';

    var blue=document.getElementsByClassName('blue');
    for(var i=0;i<blue.length;i++)
    blue[i].style.color='blue';
}

function cmy(){
    var cyan=document.getElementsByClassName('cyan');
    for(var i=0;i<cyan.length;i++)
    cyan[i].style.color='cyan';

    var magenta=document.getElementsByClassName('magenta');
    for(var i=0;i<magenta.length;i++)
    magenta[i].style.color='magenta';

    var yellow=document.getElementsByClassName('yellow');
    for(var i=0;i<yellow.length;i++)
    yellow[i].style.color='yellow';
}

function displaySafeColors()
{
    let r,g,b;
    table=document.getElementById('output');
    tbody=document.createElement('tbody');
    hex=["00","33","66","99","CC","FF"];
    for(r=0;r<6;r++){
       for(g=0;g<6;g++){
        row=document.createElement('row');
           for(b=0;b<6;b++){
            clr="#"+hex[r]+hex[g]+hex[b];
            let td = document.createElement('td');
            td.setAttribute('class','text-center');
            td.style.backgroundColor=clr;
            td.style.borderRadius="8px";
            td.style.borderCollapse="separate";
            td.style.borderSpacing="0px";
            let cell= document.createTextNode(clr);
            td.appendChild(cell);
            row.appendChild(td);
           }
           tbody.appendChild(row);
       }
   }   
   table.appendChild(tbody);
}