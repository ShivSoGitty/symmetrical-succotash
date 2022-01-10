function send(){
    No1 = document.getElementById("No1").value;
    No2 = document.getElementById("No2").value;
    answer = parseInt(No1) * parseInt(No2);

    qn = "<h4>" + No1 + " x " + No2 + "</h4>";
    ib = "<br> Answer : <input type='number' id='icb'>";
    cb = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"
    row = qn + ib + cb;

    document.getElementById("output").innerHTML = row;

    document.getElementById("No1").value = "";
    document.getElementById("No2").value = "";
}