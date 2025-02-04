import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Container from './components/layout/Container';
import Hero from './components/hero/Hero';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import ExtraContent from './components/extra/ExtraContent';

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>

      <div className="pt-16 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 flex-none">
          <Hero />
        </div>

        <div className="flex-1">
          <Main />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:flex lg:flex-none lg:w-1/3 ">
          <Sidebar />
        </div>
        <div className="flex-1">
          <ExtraContent />
        </div>
      </div>

      <Container>
        <Routes>
          <Route exact path="/" />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
