const categories = [
cell.innerText = '$' + clue.value;
cell.addEventListener('click', onClueClick);
col.appendChild(cell);
});
catRow.appendChild(col);
});
boardEl.appendChild(catRow);
}


function onClueClick(e){
const btn = e.currentTarget;
if(btn.disabled) return;
const q = btn.dataset.q;
const a = btn.dataset.a;
const value = Number(btn.dataset.value);
clueText.innerText = q;
answerText.innerText = a;
modal.classList.remove('hidden');
showAnswerBtn.classList.remove('hidden');
answerText.classList.add('hidden');
modal.dataset.value = value;
modal.dataset.buttonId = '';
btn.disabled = true;
}


showAnswerBtn.addEventListener('click', ()=>{
answerText.classList.remove('hidden');
showAnswerBtn.classList.add('hidden');
});


correctBtn.addEventListener('click', ()=>{
const v = Number(modal.dataset.value||0);
score += v;
updateScore();
closeModal();
});


wrongBtn.addEventListener('click', ()=>{
const v = Number(modal.dataset.value||0);
score -= v;
updateScore();
closeModal();
});


closeBtn.addEventListener('click', closeModal);


function closeModal(){
modal.classList.add('hidden');
}


function updateScore(){
scoreDisplay.innerText = 'Score: ' + score;
}


resetBtn.addEventListener('click', ()=>{
score = 0;
updateScore();
createBoard();
});


createBoard();
updateScore();
