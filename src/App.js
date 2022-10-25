import '././css/main.css';
import Header from './component/Header';
import Intro from './component/Intro';
import Interactive from './component/Interactive';
import Creation from './component/Creation';
import Footer from './component/Footer';

function App() {
  return (
    <div className='appContainer'>
      <Header /> 
      <Intro />
      <Interactive />
      <Creation />
      <Footer />
    </div>
  );
}

export default App;
