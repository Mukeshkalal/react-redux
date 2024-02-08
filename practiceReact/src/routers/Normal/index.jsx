import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import About from "../../pages/About"
import Home from "../../pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "../../pages/Blog";
function Normal() {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default Normal
