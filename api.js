
function ajax(){
    $(function () {

        try {
            let count = [];
            $("table").on("change", ":checkbox", function () {
    
                var chkstatus=this.checked;
                let index=count.indexOf(this.id);
                let arritem=this.id;
                console.log(arritem,index);
                console.log(index);
    
                var promise2 = new Promise(function (resolve, reject) {
    
                    console.log(this.id);
                    if(chkstatus === true)
                    {
                        if(index==-1){
                            count.push(arritem);
                        }
    
                    }
                    else {
                        if(index!=-1){
                            count.splice(index,1);
                        }
    
                    }
                    console.log(count,chkstatus);
                    if (count.length==5) {
                        resolve("Congratulations! You have successfully completed 5 tasks.");
    
                    }
                });
                promise2
                    .then(function (r) {
                        alert(r);
                        count = [];
                    });
            });
  {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
     if(this.readyState==4 && this.status==200){
        var response = JSON.parse(this.responseText);
        var output="";
        for(var i=0;i<response.length;i++){
            if(response[i].completed == true){
                output += "<tr >"+
                          "<td class=topic>"+response[i].title +"</td>"+
                          "<td>&nbsp;<input type=checkbox class=form-input checkeddisabled></td>"
                          +"</tr>";

            }
            else if(response[i].completed == false){
                output += "<tr class='ids'>"+
                "<td class=topic>" + response[i].title +"</td>"+
                "<td>&nbsp;<input type=checkbox class =check onclick=validate()></td>"
                +"</tr>";

            }
        }

    }
    document.getElementById("demo").innerHTML = output;
};
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

  }}