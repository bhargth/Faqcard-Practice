'Use strict';
const answericon =document.querySelector('.answericon');
const faqanswer=document.querySelector('.faqanswer');
const btncloseanswer=document.querySelector('.close-answer');

answericon.addEventListener('click', function(){
    console.log('button clicked');
    faqanswer.classList.remove('hidden')
    });
    
    btncloseanswer.addEventListener('click', function(){
        faqanswer.classList.add('hidden')
    });
