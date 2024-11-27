function GenerateAnswer() {

    response = responses[Math.floor(Math.random() * responses.length)];
    document.getElementById('outputDiv').innerHTML = response;
  }
  function shake(){

    var ball= document.getElementById("ball")
    var messageText = document.getElementById("message")
 
   
    if(messageText != null){
     messageText.parentNode.removeChild(messageText);
    }
    
  
    ball.classList.add("shake");
 
  
    setTimeout(function(){ ball.classList.remove("shake"); }, 1500);
    
  
    setTimeout(function(){ getFortune(); }, 1500);
 }
 
 
 function getFortune(){
   
     var fortunes = ['It is certain', 'It is decidedly so', 'Reply hazy try again', 'cannot predict now', 'Do not count on it', 'My sources say no', 'Signs point to yes', 'Outlook not so good']
 
   
     var fortune = fortunes[Math.floor(Math.random()*fortunes.length)];
 
     var parent = document.getElementById("fortune");
     var newMessage = document.createElement("div");
     newMessage.setAttribute('id', "message");
     newMessage.innerHTML = "\""+fortune+"\"";
     parent.appendChild(newMessage);
 }