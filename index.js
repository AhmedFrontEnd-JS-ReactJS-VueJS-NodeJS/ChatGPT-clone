const form = document.getElementById('openai-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const input = document.getElementById('openai-input').value;
  const chat = document.getElementById('openai-chat');

  // Send the user's message to the OpenAI API
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
      "prompt": input,
      'model': 'text-davinci-003',
      "max_tokens": 2048,
      "temperature": 0.5,
      // "top_p": 1,
      // "n": 1,
      // "stream": false,
      // "logprobs": null,
      //"stop": "\n"
    })
  });
  const data = await response.json();

    var txt = data.choices[0].text;
setTimeout(function(){
for (var i = 0; i <= txt.length; i++) {
  
    chat.innerHTML += txt.charAt(i);
}
    }, 50);
    
    console.log(data);



/*
  if(data != ''){
    // chat.innerHTML += `<p><strong>OpenAI:</strong> ${data.choices[0].text}</p>`;
    var i = 0;
    var txt = data.choices[0].text;
    var speed = 50;

    function typeWriter() {
      if (i < txt.length) {
        chat.innerHTML += txt.charAt(i);
        //document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        
      }
    }
  }
*/
  //console.log(data);

  // Display the response in the chat div element
  // chat.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
  


});
