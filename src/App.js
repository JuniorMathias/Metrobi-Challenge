import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import Container from './components/layout/Container'
function App() {
  return (
    <Router>
      <Header />
      <Footer />
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
