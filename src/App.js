import './App.css';
import Image from './Image.js';
import List from './List';

function App() {
  return (
    <div>
      <div className='conteiner'>
          <h1>About me</h1>
        </div>
      <div className='conteiner'>
          <Image />
        </div>
      <div className='conteiner'>
          <p>Hello! My name is <span>Musya</span>. I am 1 year old. And I am looking for a home where I will be loved.</p>
        </div>
      <div className='list'>
          <List />
        </div>
    </div>
  );
}

export default App;
