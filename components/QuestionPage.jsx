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
                    <input className='input-value' />
                    <button type='submit' className='sumbit-button'>
                        <a href={`/${theme.id}/${+index + 1}`}>ЖМАЙ!</a>
                    </button>
                </div>
            </div>
        </Layout>
    )
}
module.exports = QuestionPage