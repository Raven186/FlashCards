const React = require("react");
function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/Styles/style.css" />
        <script src="/Scripts/add.js" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
};

module.exports = Layout;