const React = require('react');
const Layout = require('./Layout');

function ThemePage({title, theme, user, question}) {
    return (
        <Layout title={title}>
            <h1>Тема вопросов: {theme.name}</h1>
            <div className='card'>
                <img src={question.img}/>
                <div className='card-question'>
                    <h5>{question.name}</h5>
                    <input className='input-value'/>
                    <button type='submit' className='sumbit-button'>
                        ЖМАЙ!
                    </button>
                </div>
            </div>
        </Layout>
    )
}
module.exports = ThemePage