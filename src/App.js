import './App.css';
import Header from './components/Header';
import Appointment from './components/Appointment';
import Packages from './components/Packages';
import BookedTests from './components/BookedTests';
import LupinDiagnostics from './components/LupinDiagnostics';
import PeopleAboutus from './components/PeopleAboutus';
import LupinDiagnosticsVideos from './components/LupinDiagnosticsVideos';
import LatestArticles from './components/LatestArticles';
import FAQs from './components/FAQs'
import HealthPackages from './components/HealthPackages';
import Contactus from './components/Contactus';


function App() {
  return (
    <div>
    <Header />
    <Appointment />
    <Packages />
    <BookedTests />
    <LupinDiagnostics />
    <PeopleAboutus />
    <LupinDiagnosticsVideos />
    <LatestArticles />
    <FAQs />
    <HealthPackages />
    <Contactus /> 


  
    </div>
  )
}

export default App;
