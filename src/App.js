import './App.css';
import Header from './Header.jsx'
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <div>
      <header style={{height:"100%"}}>
        <Header />
      </header>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
