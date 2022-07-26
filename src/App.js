import './App.css';
import TopBar from './TopBar';
import Content from './Content';
import Sidebar from './Sidebar';
import Footer from './Footer';

import './style.css';
// import Helloract from './assets/HelloReact.png'

function App() {
  return (
    <div className='page'>
      <TopBar />
      <Content />
      <Sidebar />
      <Footer />
      {/* <img src={Helloract} alt="HelloReact" /> */}
      <img src="/images/HelloReact.png" alt="HelloReact" />
    </div>

  )
}

export default App;
