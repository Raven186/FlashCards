const React = require('react');
const Layout = require('../components/Layout');

function ThemePage({ title, theme }) {
  return (
    <Layout title={title}>
      <h1>Тема вопросов: {theme.name}</h1>
      <div className='card'>
        <div className='card-question'>
          <h2>Если готов жми НАЧАТЬ!</h2>
          <button data-id={theme.id} type='submit' className='theme-button'>
            НАЧАТЬ!
          </button>
        </div>
      </div>
    </Layout>
  )
}
module.exports = ThemePage