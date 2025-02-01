import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Container from './components/layout/Container';
import Hero from './components/hero/Hero';
import Sidebar from './components/sidebar/Sidebar'
function App() {
  return (
    <Router>
      <Header />
      <div className="pt-16">
        <Hero />
      </div>
      <Sidebar />
      <Container>
        <Routes>
          <Route exact path="/">
          </Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
