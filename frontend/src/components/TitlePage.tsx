import { IonContent, IonGrid, IonRow } from '@ionic/react'
import './TitlePage.css'

const TitlePage: React.FC = () => {
    return (
        <IonContent color="primary" className='content'>
            <h1>Nicolas Lloyd</h1>
            <h3>aspiring fullstack web developer</h3>
        </IonContent>
    )
}

export default TitlePage