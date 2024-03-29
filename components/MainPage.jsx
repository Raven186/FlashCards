const React = require('react');
const Layout = require('./Layout');
const ThemeItem = require('./ThemeItem')

function MainPage({ title, user, themes }) {
  return (
    <Layout title={title} user={user}>
      <div className="nav__profile">
        <p>Hello, {user.name}</p>
      </div>
      <h1>ВИКТОРИНА!</h1>
      <div>
        {themes.map((theme) => (
          <ThemeItem key={theme.id} theme={theme} />
        ))}
      </div>
    </Layout>
  )
};

module.exports = MainPage;