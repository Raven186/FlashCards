const React = require('react')

function ThemeItem ({theme}) {
    return (
        <div className="card">
          {/* <img  className="card-img-top" alt={theme.name} /> */}
          <div className="card-body">
            <h5 className="card-title">{theme.name}</h5>
            <a href={`/${theme.id}`} className="btn btn-primary">
              Начать Викторину!
            </a>
          </div>
        </div>
      );
}

module.exports = ThemeItem