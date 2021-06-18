import React from 'react';
import { IonButton } from '@ionic/react';


const Button = ({children, onClick}) => (
    <IonButton onClick={onClick}>{children}</IonButton>
)

export default Button;