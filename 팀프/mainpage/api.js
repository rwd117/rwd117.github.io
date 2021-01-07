const logo=document.getElementById("jslogo");

function goMain(){

    location.href = location.href;
    console.log(location.href);
}



logo.addEventListener("click",goMain);








// var url_string =window.location.href;
// var url = new URL(url_string);
// var name = url.searchParams.get("name");

// if (name == "blog") {
//      location.href="/w/blog";
// }