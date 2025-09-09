// Jeopardy Game Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the Jeopardy page
    if (document.getElementById('jeopardy')) {
        initJeopardy();
    }
});

function initJeopardy() {
    const questions = document.querySelectorAll('.jeopardy-question');
    const modal = document.getElementById('jeopardyModal');
    const closeBtn = document.getElementById('jeopardyClose');
    const modalValue = document.getElementById('modalValue');
    const modalQuestion = document.getElementById('modalQuestion');
    const modalAnswer = document.getElementById('modalAnswer');
    const correctBtn = document.getElementById('correctBtn');
    const wrongBtn = document.getElementById('wrongBtn');
    const scoreElement = document.getElementById('score');
    const resetBtn = document.getElementById('jeopardyReset');
    
    let currentScore = 0;
    let currentValue = 0;
    let currentQuestion = null;
    
    // Add click event to each question
    questions.forEach(question => {
        question.addEventListener('click', function() {
            // Don't do anything if already used
            if (this.classList.contains('used')) return;
            
            currentValue = parseInt(this.getAttribute('data-value'));
            const answer = this.getAttribute('data-answer');
            const questionText = this.textContent;
            
            modalValue.textContent = '$' + currentValue;
            modalQuestion.textContent = questionText;
            modalAnswer.textContent = answer;
            
            // Store reference to current question
            currentQuestion = this;
            
            // Show modal
            modal.style.display = 'flex';
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Correct button
    correctBtn.addEventListener('click', function() {
        currentScore += currentValue;
        scoreElement.textContent = currentScore;
        
        // Mark question as used
        if (currentQuestion) {
            currentQuestion.classList.add('used');
        }
        
        modal.style.display = 'none';
    });
    
    // Wrong button
    wrongBtn.addEventListener('click', function() {
        currentScore -= currentValue;
        scoreElement.textContent = currentScore;
        
        // Mark question as used
        if (currentQuestion) {
            currentQuestion.classList.add('used');
        }
        
        modal.style.display = 'none';
    });
    
    // Reset button
    resetBtn.addEventListener('click', function() {
        // Reset score
        currentScore = 0;
        scoreElement.textContent = currentScore;
        
        // Reset all questions
        questions.forEach(question => {
            question.classList.remove('used');
        });
    });
    
    // Close modal if clicked outside
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}
