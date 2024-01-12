const cardQuestion = document.querySelector('.card-question');
const answerButton = document.querySelector('.Answer')
if (answerButton) {
  try {
    answerButton.addEventListener('submit', async (e) => {
      console.log(12313);
      e.preventDefault();
      const { id } = e.target.dataset;
      const { answer } = e.target;
      const res = await fetch('/answers', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          question_id: id,
          answer: answer.value
        })
      })
      const data = await res.json()
      console.log(document.querySelector('.nasw'));
      document.querySelector('.nasw').innerHTML = data.message
    })
  } catch (error) {

  }
}

if (cardQuestion) {
  try {
    cardQuestion.addEventListener('submit', async (e) => {
      e.preventDefault()
      const { question } = e.target
    })
  } catch (error) {

  }
}