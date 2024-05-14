import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Links from './components/Links';

function App() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <About />
            <Skills />
            <Links />
        </main>
    );
}

export default App;
