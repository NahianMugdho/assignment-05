document.getElementById('ndb').addEventListener('click',function(event){
    event.preventDefault();// vejal to beggineer
const y1 = parseFloat(getinput('nd').value)
const w1 = parseFloat( getinput('ndx').innerText)
const t = parseFloat( getinput('total').innerText)
const new_t = t - y1;
if(y1 <= 0 || isNaN(y1) || new_t <= 0 ){
    alert("wrong Input or the balance is insufficient")
}
else{
    
    getinput('total').innerText = new_t;
    const w1_new = y1+w1;
    getinput('ndx').innerText = w1_new
    const div = document.createElement('div')
    div.innerHTML = `
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle" open>
      <div class="modal-box bg-white flex flex-col items-center justify-center text-center">
      <div>
        <h3 class="text-lg font-bold text-black">Congrats!</h3>
        <div class="flex items-center justify-center">
        <img src= "coin.png"> <img></div>
        <p class="py-4">You have donated for humankind .</p>
        <p class = "font-bold" > successfully </p>
       </div>
        <div class="modal-action flex justify-center">
          <form method="dialog">
            <button class="btn bg-slate-100">Close Confirmation</button>
          </form>
        </div>
      </div>
    </dialog>
`;
getinput('mod1').appendChild(div)
 //add to  history
 // Get the current time
const now = new Date();
 const div2 = document.createElement('div');
//  const q = document.createElement('p');
//  q.innerText = `${y1} is added and New balance is ${new_t}`;
//  div2.appendChild(q)
//  document.getElementById('hist').appendChild(div2)
div2.innerHTML = `

<h3 class= "font-black text-black"> ${y1} taka is donated for flood relief of Noakhali,Bangladesh</h3>
<p class= "text-black">Date ${now}  </p>

`   
document.getElementById('history').appendChild(div2)
}



})

// oneshot(button_id,input_value,showing_value,string_value)
// oneshot("fdb","fd","fdx","string_value")
document.getElementById('fdb').addEventListener('click',function(event){
    event.preventDefault();// vejal to beggineer
const y1 = parseFloat(getinput('fd').value)
const w1 = parseFloat( getinput('fdx').innerText)
const t = parseFloat( getinput('total').innerText)
const new_t = t - y1;
if(y1 <= 0 || isNaN(y1) || new_t <= 0 ){
    alert("wrong Input or the balance is insufficient")
}
else{
    const new_t = t - y1;
    getinput('total').innerText = new_t;
    const w1_new = y1+w1;
    getinput('fdx').innerText = w1_new
    const div = document.createElement('div')
    div.innerHTML = `
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle" open>
      <div class="modal-box bg-white flex flex-col items-center justify-center text-center">
      <div>
        <h3 class="text-lg font-bold text-black">Congrats!</h3>
        <div class="flex items-center justify-center">
        <img src= "coin.png"> <img></div>
        <p class="py-4">You have donated for humankind .</p>
        <p class = "font-bold" > successfully </p>
       </div>
        <div class="modal-action flex justify-center">
          <form method="dialog">
            <button class="btn bg-slate-100">Close Confirmation</button>
          </form>
        </div>
      </div>
    </dialog>
`;
getinput('mod1').appendChild(div)
 //add to  history
 // Get the current time
const now = new Date();
 const div2 = document.createElement('div');
//  const q = document.createElement('p');
//  q.innerText = `${y1} is added and New balance is ${new_t}`;
//  div2.appendChild(q)
//  document.getElementById('hist').appendChild(div2)
div2.innerHTML = `

<h3 class= "font-black text-black"> ${y1} taka is donated for flood relief of Feni,Bangladesh</h3>
<p class= "text-black">Date ${now}  </p>

`   
document.getElementById('history').appendChild(div2)
}



})



document.getElementById('qdb').addEventListener('click',function(event){
    event.preventDefault();// vejal to beggineer
const y1 = parseFloat(getinput('qd').value)
const w1 = parseFloat( getinput('qdx').innerText)
const t = parseFloat( getinput('total').innerText)
const new_t = t - y1;
if(y1 <= 0 || isNaN(y1) || new_t <= 0 ){
    alert("wrong Input or the balance is insufficient")
}
else{
    const new_t = t - y1;
    getinput('total').innerText = new_t;
    const w1_new = y1+w1;
    getinput('qdx').innerText = w1_new
    const div = document.createElement('div')
    div.innerHTML = `
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle" open>
      <div class="modal-box bg-white flex flex-col items-center justify-center text-center">
      <div>
        <h3 class="text-lg font-bold text-black">Congrats!</h3>
        <div class="flex items-center justify-center">
        <img src= "coin.png"> <img></div>
        <p class="py-4">You have donated for humankind .</p>
        <p class = "font-bold" > successfully </p>
       </div>
        <div class="modal-action flex justify-center">
          <form method="dialog">
            <button class="btn bg-slate-100">Close Confirmation</button>
          </form>
        </div>
      </div>
    </dialog>
`;
getinput('mod1').appendChild(div)
 //add to  history
 // Get the current time
const now = new Date();
 const div2 = document.createElement('div');
//  const q = document.createElement('p');
//  q.innerText = `${y1} is added and New balance is ${new_t}`;
//  div2.appendChild(q)
//  document.getElementById('hist').appendChild(div2)
div2.innerHTML = `

<h3 class= "font-black text-black"> ${y1} taka is donated for Aid for Injured in the Quota Movement,Bangladesh</h3>
<p class= "text-black">Date ${now}  </p>

`   
document.getElementById('history').appendChild(div2)
}

})
document.getElementById('blog-btn').addEventListener('click',function(){

  window.location.href = './faq.html';

})

