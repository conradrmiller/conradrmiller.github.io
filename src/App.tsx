import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Links from './components/Links';
import Projects from './components/Projects';
import { ScrollRestoration } from 'react-router-dom';

function App() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Links />
            <ScrollRestoration />
        </main>
    );
}

export default App;
