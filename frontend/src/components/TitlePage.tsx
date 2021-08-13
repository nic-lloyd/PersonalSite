import { IonCard, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonRow } from "@ionic/react";
import "./TitlePage.css";

const TitlePage: React.FC = () => {
  return (
    <IonContent color="primary" className="content">
      <IonGrid>
        <IonRow />
        <IonRow>
          <IonCol className='content'>
            <IonCard color='primary'>
              <IonCardTitle>Nicolas Lloyd</IonCardTitle>
              <IonCardSubtitle>aspiring fullstack web developer</IonCardSubtitle>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow />
      </IonGrid>
    </IonContent>
  );
};

export default TitlePage;
