import { Container, Col, Row } from 'react-bootstrap';
import './App.css';
import Product from './pages/Product';
import User from './pages/User';
import Search from './pages/Search';
import Detail from './pages/detail';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import { HiFilter } from 'react-icons/hi'

function App() {
  return (
  <div className='App'>
    <Container >
      <Row className="d-flex align-items-center justify-content-center" >
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Product />} />
              <Route path="/Product" element={<Product />} />
              <Route path="/search" element={<Search />} />
              <Route path="/User" element={<User />} />
              <Route path="/Detail/:id" element={<Detail />} />
          </Routes>
          <footer>
          <Col>
          <NavLink to="/Product" className="iconWrapper">
              <HiHome className="icon" />
              Movie
          </NavLink>
          </Col>
          <Col>
          <NavLink to="/Search" className="iconWrapper">
              <HiFilter className="icon" />
              Filter
              </NavLink>
          </Col>
          <Col>
          <NavLink to="/User" className="iconWrapper">
              <MdGroup className="icon" />
              Profile
              </NavLink>
          </Col>
          <Col>
          <NavLink to="/Detail" className="iconWrapper">
              <MdGroup className="icon" />
              Detail
              </NavLink>
          </Col>
          </footer>
        </BrowserRouter> 
      </Row>
    </Container>
  </div>
  );
}

export default App;