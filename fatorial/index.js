const frm = window.document.getElementById('form')
frm.onsubmit = function(){
    const valor = window.document.getElementById('valor').value;
    const res = document.getElementById('res');
    var i,mult= 1;
    for(i=1; i<=valor; i++){
        mult=mult*i;
    }
    res.innerHTML=mult;
    return false
}