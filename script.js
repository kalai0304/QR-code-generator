
function generateQR(){
    
    if(document.getElementById("btn").innerHTML == "Try another"){
        console.log("btn value is equal to try another");
        document.getElementById("qrText").value="";
        document.getElementById("qrImage").src="";
        // back to normal text
        document.getElementById('btn').innerHTML="Generate QR Code"
    }else{
        let qrText=document.getElementById("qrText").value;
        let imgBox=document.getElementById("imgBox");
        let qrImage=document.getElementById("qrImage");
        console.log(qrText)

        if(qrText.length > 0){
            qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +(qrText);
            console.log(qrImage.src);
            imgBox.classList.add("show-img");
            document.getElementById("btn").innerHTML='Try another';
        }

    }
    
    // qrText.value="";
}
