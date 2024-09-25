function getinput(id){
  const x  = document.getElementById(id)
  return x

}

function getclass(id){

    const x = document.getElementById(id).classList
    return x

}


// function oneshot(button_id,input_value,showing_value,string_value){
//    const sv = string_value
//     document.getElementById('button_id').addEventListener('click',function(event){
//         event.preventDefault();// vejal to beggineer
//     const y1 = parseFloat(getinput('input_value').value)
//     const w1 = parseFloat( getinput('showing_value').innerText)
//     const t = parseFloat( getinput('total').innerText)
//     if(y1 <= 0 || isNaN(y1)){
//         return alert("wrong Input")
//     }
//     else{
//         const new_t = t - y1;
//        getinput('total').innerText = new_t;
//         const w1_new = y1+w1;
//         getinput('showing_value').innerText = w1_new
//         const div = document.createElement('div')
//         div.innerHTML = `
//         <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle" open>
//           <div class="modal-box bg-white ">
//           <div>
//             <h3 class="text-lg font-bold text-black">Congrats!</h3>
//             <img src= "coin.png"> <img>
//             <p class="py-4">You have donated for humankind .</p>
//             <p class = "font-bold" > successfully </p>
//            </div>
//             <div class="modal-action">
//               <form method="dialog">
//                 <button class="btn bg-slate-100">Close Confirmation</button>
//               </form>
//             </div>
//           </div>
//         </dialog>
//     `;
//     getinput('mod1').appendChild(div)
//      //add to  history
//      // Get the current time
//     const now = new Date();
//      const div2 = document.createElement('div');
//     //  const q = document.createElement('p');
//     //  q.innerText = `${y1} is added and New balance is ${new_t}`;
//     //  div2.appendChild(q)
//     //  document.getElementById('hist').appendChild(div2)
//     div2.innerHTML = `
    
//     <h3 class= "font-black text-black"> ${y1} taka is donated for ${sv},Bangladesh</h3>
//     <p class= "text-black">Date ${now}  </p>
    
//     `   
//     document.getElementById('history').appendChild(div2)
//     }
    
    
    
//     })
// }