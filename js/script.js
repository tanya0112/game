prompt("Time to take revenge from Thanos.Are u ready?")

function rotates()
{
  let hero= document.querySelector("#hero");
  let villain= document.querySelector("#vil");
  let tool= document.querySelector("#tool");

  let toolstart={"left":"70%"};
  let toolend= {"left": "13%" , "top": "35%"}; 
  let options={"duration":2000};
  
function hitvillain()
  {
     let villainstart={transform:'rotate(0deg)'};
     let villainend={transform:'rotate(1000deg)'};
     let option={"duration":2500};
     villain.animate([villainstart,villainend],option);
  }
tool.animate([toolstart,toolend],options).onfinish=hitvillain;
}


function vanish()
{
  let hero= document.querySelector("#hero");
  let villain= document.querySelector("#vil");
  let tool= document.querySelector("#tool");

  let toolstart={"left":"70%"};
  let toolend= {"left": "13%" , "top": "35%"}; 
  let options={"duration":2000};
  
function hitvillain()
  {
     let villainstart={opacity:100};
     let villainend={opacity:0};
     let option={"duration":2500};
     villain.animate([villainstart,villainend],option);
  }
tool.animate([toolstart,toolend],options).onfinish=hitvillain;
}
  
function smaller()
{
  let hero= document.querySelector("#hero");
  let villain= document.querySelector("#vil");
  let tool= document.querySelector("#tool");

  let toolstart={"left":"70%"};
  let toolend= {"left": "13%" , "top": "35%"}; 
  let options={"duration":2000};
  
function hitvillain()
  {
     let villainstart={"height":"70%"};
     let villainend={"height":"0%"};
     let option={"duration":2500};
     villain.animate([villainstart,villainend],option);
  }
tool.animate([toolstart,toolend],options).onfinish=hitvillain;
}
  
   
function rv()
{
  let hero= document.querySelector("#hero");
  let villain= document.querySelector("#vil");
  let tool= document.querySelector("#tool");

  let toolstart={"left":"70%"};
  let toolend= {"left": "13%" , "top": "35%"}; 
  let options={"duration":2000};
  
function hitvillain()
  {
     let villainstart={transform:'rotate(0deg)',opacity:100};
     let villainend={transform:'rotate(1000deg)',opacity:0};
     let option={"duration":2500};
     villain.animate([villainstart,villainend],option);
  }
tool.animate([toolstart,toolend],options).onfinish=hitvillain;
}
   
   