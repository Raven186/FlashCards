const React = require('react');
const Layout = require('./Layout');

function QuestionPage({ title, theme, question, index }) {
    return (
        <Layout title={title}>
            <h1>Тема вопросов: {theme.name}</h1>
            <div className='card'>
                <div className='card-question'>
                    <img src={question.img} />
                    <h2>{question.question}</h2>
                    <form className='Answer' data-id={question.id}>
                        <input name='answer' className='input-value' />
                        <button type='submit'>ПРОВЕРКА!</button>
                        <a href={`/${theme.id}/${+index + 1}`}>ДАЛЕЕ!</a>
                    </form>
                </div>
            </div>
            <h1 className='nasw'></h1>
        </Layout>
    )
}
module.exports = QuestionPage