import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TitlePage from '../components/TitlePage'
import About from '../components/About'
import Projects from '../components/Projects'
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TitlePage />
        <About />
        <Projects />
      </IonContent>
    </IonPage>
  );
};

export default Home;
