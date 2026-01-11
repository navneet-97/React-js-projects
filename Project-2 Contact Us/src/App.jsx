import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactHeader from './components/ContactHeader/ContactHeader'
import NavBar from './components/NavBar/NavBar'

function App() {
  return <div>
    <NavBar />
    <main className='main'>
      <ContactHeader />
      <ContactForm />
    </main>
  </div>
}

export default App
