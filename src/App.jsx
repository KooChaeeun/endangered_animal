import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Animals from './pages/Animals';
import Report from './pages/Report';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App = () => {
    return (
        <>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/animals" element={<Animals />} />
                    <Route path="/report" element={<Report />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
};

export default App;
