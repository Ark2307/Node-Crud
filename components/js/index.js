

$("#add_user").submit(function(event){
    alert("Your request has been received.");
})

$("#update_user").submit(function(event){
    event.preventDefault() ;
    var arr = $(this).serializeArray() ;
    var obj = {} 

    $.map(arr , function(data , itr){
        obj[data['name']] = data['value']
    })

    var request = {
        "url" : `http://localhost:3000/api/users/${obj.id}` ,
        "method" : "PUT",
        "data" : obj
    }
     
    $.ajax(request).done(function(response){
        alert("Your profile has been updated");
    })
})

// delete only on the homepage
if(window.location.pathname == "/"){
    $onDelete = $(".table tbody td a.delete")
    $onDelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}` ,
            "method" : "DELETE"
        }

        if(confirm("Are you sure you want to delete this record?")){
     
            $.ajax(request).done(function(response){
            alert("The profile has been deleted") ;
            location.reload();
            })
        }
    })
}