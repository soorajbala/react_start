const { render } = ReactDOM

render(<
    h1 className = 'header'
    id = 'title'
    style = {
        {
            backgroundColor: 'red',
            padding: '10px'
        }
    } >
    Sweet rascal da </h1>,
    document.getElementById('react-conatiner')
)