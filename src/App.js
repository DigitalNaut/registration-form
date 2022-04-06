import './App.css';
import Gallery from './components/Gallery';

import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h3 className="App-header">Registration Form</h3>
        <RegistrationForm />
        <h3 className="App-header">Gallery</h3>
        <Gallery />
      </section>
    </div>
  );
}

export default App;
