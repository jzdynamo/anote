import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import store from '../src/renderer/store';
// import App from '../src/renderer/views/app';

// material-ui theme provider
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// 
// const muiTheme = getMuiTheme({
//   fontFamily: '"YaHei Consolas Hybrid", Consolas, 微软雅黑, "Meiryo UI", "Malgun Gothic", "Segoe UI", "Trebuchet MS", Helvetica, Monaco, courier, monospace !important',
//   palette: {
//     primary1Color: '#e78170'
//   }
// });

window.addEventListener('load', function() {
  render(
    // <Provider store={store}>
    //   <MuiThemeProvider muiTheme={muiTheme}>
    //     <App/>
    //   </MuiThemeProvider>
    // </Provider>,
    <div>hello world!</div>,
    document.getElementById('root')
  );
});
