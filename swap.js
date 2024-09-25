document.getElementById('bt-2').addEventListener('click',function(){
    
    getclass('history').remove('hidden')
    
    getclass('cards').add('hidden')   
    document.getElementById('bt-2').classList.remove('bg-slate-300');
    document.getElementById('bt-2').classList.add('bg-[#B4F461]');
    document.getElementById('bt-1').classList.remove('bg-[#B4F461]');
    document.getElementById('bt-1').classList.add(' bg-slate-300 ');
    
    })
    
    document.getElementById('bt-1').addEventListener('click',function(){

        getclass('history').add('hidden')
    
        getclass('cards').remove('hidden')

        getclass('bt-1').remove('bg-slate-300');
        document.getElementById('bt-1').classList.add('bg-[#B4F461]');
        document.getElementById('bt-2').classList.remove('bg-[#B4F461]');
        document.getElementById('bt-2').classList.add(' bg-slate-300 ');
        
        })