const maxLength=200;
document.getElementById('ask').maxLength = maxLength;
document.getElementById("ask").addEventListener('input',()=>{
    var getCharacter = document.getElementById('ask').value.length;
    console.log("length: ", getCharacter)
    var characterLeft = maxLength - getCharacter;
    document.getElementById('numCharLeft').innerHTML = characterLeft; 
});
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
  });
document.getElementById("button-submit").addEventListener('click',()=>{
    var check = document.getElementById('ask').value.length;
    var form = document.getElementById('form');
    if(check==0){
        document.getElementById('er').innerHTML = "None character"
    }else{
        document.getElementById('er').innerHTML = ""
        form.submit();
    }
});