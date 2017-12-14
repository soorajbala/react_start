'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
    'h1',
    { className: 'header',
        id: 'title',
        style: {
            backgroundColor: 'red',
            padding: '10px'
        } },
    'Sweet rascal '
), document.getElementById('react-conatiner'));
