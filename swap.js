document.getElementById('bt-2').addEventListener('click',function(){

    getclass('history').remove('hidden')
    
    getclass('cards').add('hidden')
    
    })
    
    document.getElementById('bt-1').addEventListener('click',function(){

        getclass('history').add('hidden')
    
        getclass('cards').remove('hidden')

      
        
        })