 function opere()
 {
    let costhora = Number(document.getElementById('Chora').value);
    let costequi = Number(document.getElementById('Cqpos').value);
    let horast = Number(document.getElementById('Cmobra').value);
    let Otrosg = Number(document.getElementById('OtrosG').value);
   
    let Vtotal = costhora * horast + costequi + Otrosg;
    let ganancia = Vtotal * 20 / 100;
    let descuento = Vtotal * 10 / 100;
    Vtotal += ganancia + descuento;
    descuento = Vtotal-descuento;
    
    if(costhora == "" || costequi == "" || horast == "" || Otrosg == "")
    {
       alert("Favor Llenar todos los campos");
    }
    else
    {
      document.getElementById('Vtotal').value=Vtotal + " Pesos";
      document.getElementById('ganancia').value=ganancia + " Pesos";
      document.getElementById('descuento').value=descuento + " Pesos";
    }

 }