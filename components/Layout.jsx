const React = require("react");
function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/Styles/style.css" />
        <script defer src="/scripts/Begin.js" />
      </head>
      <body>
        <button type='submit' className='sumbit-button'>
          <a href={`/`}>ДОМОЙ!</a>
        </button>
        {children}
      </body>
    </html>
  )
};

module.exports = Layout;