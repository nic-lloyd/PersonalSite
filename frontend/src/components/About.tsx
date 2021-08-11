import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
  IonThumbnail,
} from "@ionic/react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="container">
      <IonCard className="card">
        <IonCardHeader>
          <IonCardTitle className="title">About Me</IonCardTitle>
        </IonCardHeader>
        <br />
        <IonCardContent className="biography">
          <p>
            I am a motivated developer who is interested in a fullstack web
            developer position. I have a Bachelors in Computer Science from
            Rowan University, class of 2021. In my free time I enjoy working on
            side projects with friends, hiking, and playing various video games.
            Below are a few side projects from my{" "}
            <a href="https://github.com/nic-lloyd/">Github</a> which I am
            especially proud of.
          </p>
        </IonCardContent>
      </IonCard>
      <IonGrid>
          <IonRow>
            <IonCol>
                <IonCard color='tertiary'>
                    <IonCardHeader>
                        <IonCardTitle className="title">
                            Tech Stack
                        </IonCardTitle>
                        <IonCardContent className='img-container'>
                            <img src='https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/nodejs-icon.svg' />
                            <img src='https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/mysql.svg' />
                            <img src='https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/react.svg' />
                            <img src='https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/express.svg' />
                        </IonCardContent>
                    </IonCardHeader>
                </IonCard>
            </IonCol>
            <IonCol>
            <IonCard color='tertiary'>
                    <IonCardHeader>
                        <IonCardTitle className="title">
                            Languages
                        </IonCardTitle>
                        <IonCardContent className='img-container'>
                            <img src='https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/nodejs-icon.svg' />
                            <img src='https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/mysql.svg' />
                            <img src='https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/react.svg' />
                            <img src='https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/express.svg' />
                        </IonCardContent>
                    </IonCardHeader>
                </IonCard>
            </IonCol>
          </IonRow>
      </IonGrid>
    </div>
  );
};

export default About;
