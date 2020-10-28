import React from 'react';
import {IonPage, IonItem, IonLabel, IonRow, IonCol, IonButton, IonContent, IonInput} from '@ionic/react';
import NavHeader from '../components/Header/NavHeader.js';

const Forgot = () => {
    return (
        <IonPage>
            <NavHeader title="Forgot Password" />
            <IonContent>

                <IonItem lines="full">
                    <IonLabel position = "floating">Email</IonLabel>
                    <IonInput name="email" type="text" required></IonInput>
                </IonItem>

                <IonRow>
                    <IonCol>
                        <IonButton type="submit" color="primary" expand="block">Reset</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Forgot;