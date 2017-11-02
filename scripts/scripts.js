(function(){
	let sent = document.getElementById("sentence");
  let sentForm = document.getElementById("sentence-form");
  let space = document.getElementById("space-for-paragraphs");
  let textstored = localStorage.textst;
  
  console.log(`Name on page load: ${textstored}`);

     

  function doStuff(ev) {
	  
	   if(sent.value === "") {
      alert("Please enter some text, your last message was " + textstoredmessage());
      sentForm.focus();
    }
	else {
    let para = document.createElement("p");
    let txt = document.createTextNode(sent.value + textstored);
    para.appendChild(txt);
    space.appendChild(para);
    ev.preventDefault();
	
	textstored = sent.value;
	console.log(`Name on page load: ${textstored}`);
	
	}
  }
  
  function textstoredmessage() {
	  if(textstored === "") {
		  let message = "no previous message";
		  return message;
	  }
	  else {
	  return textstored 
	  }
  }
  
 
  sentForm.addEventListener("submit", doStuff);
	
}());