const React = require('react');
const Layout = require('./Layout');
const ThemeItem = require('./ThemeItem')

function MainPage({ title , user, theme}) {
  return (
    <Layout title={title} user={user}>
      <div className="nav__profile">
          <p>Hello, {user.name}</p>
            </div>
      <h1>ВИКТОРИНА!</h1>
      <div>
        {theme.map((theme) => (
          <ThemeItem key={theme.id} theme={theme} />
        ))}
      </div>
    </Layout>
  )
};

module.exports = MainPage;