
function handleClick(e){

if(e.value==="getir"){
document.querySelector("#content1").style.display="block"
document.querySelector("#content2").style.display="none"
document.querySelector("#content3").style.display="none"
}

else if(e.value==="trendyol"){
document.querySelector("#content1").style.display="none"
document.querySelector("#content2").style.display="block"
document.querySelector("#content3").style.display="none"
}
else {
    document.querySelector("#content1").style.display="none"
    document.querySelector("#content2").style.display="none"
    document.querySelector("#content3").style.display="block"
}

}

