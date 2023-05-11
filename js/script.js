//script.jis

function SendMail(){
    var params = {
        from_name : document.getElementById("name").value,
        from_name : document.getElementById("email").value,
        from_name : document.getElementById("subject").value,
        from_name : document.getElementById("body").value
    };
  
    const serviceID = "service_ar8kncl";
    const templateID = "template_xrhgjzd"

    emaljs
    .send(serviceID,templateID,params)
    .then((res) => {
        document.getElementById("name").value = "" ;
        document.getElementById("email").value = "" ;
        document.getElementById("subject").value = "" ;
        document.getElementById("body").value = "" ;
        console.log(res);
        alert ("Your Message Sent Successfully")
    })
    .catch((err) => console.log(err));
}    