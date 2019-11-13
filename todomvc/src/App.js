import React, { useState } from 'react';

import '../node_modules/todomvc-common/base.css';
import '../node_modules/todomvc-app-css/index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import TodoProvider from './TodoProvider';

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </section>
    </TodoProvider>
  );
}

export default App;
