// script.js
function SendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_r7d4c0f","template_alumqra",params).then(function (res){
        alert("Your Message Was Successfully Send");
    })
}
document.getElementById('downloadBtn').addEventListener('click', function() {
    var cvUrl = 'https://drive.google.com/uc?export=download&id=1Jt9uAzje20NBkwjQrm3BRbWsK2HR8b1U';
    download(cvUrl, 'cv.pdf');
});

function download(url, filename) {
    var element = document.createElement('a');
    element.setAttribute('href', url);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

