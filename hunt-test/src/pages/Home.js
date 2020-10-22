import React from "react";
import {IonPage, IonContent} from "@ionic/react";
import LargeHeader from '../components/Header/LargeHeader';
import SmallHeader from '../components/Header/SmallHeader';

const Home = () => {
    return (
        <IonPage>
            <SmallHeader title="Home" />
            <IonContent fullscreen>
                <LargeHeader title="Home" />
            </IonContent>
        </IonPage>
    );
};

export default Home;