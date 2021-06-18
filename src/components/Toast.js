import React from "react";
import { IonToast } from "@ionic/react";

const Toast = ({ message, isOpen }) => (
  <IonToast isOpen={isOpen} message={message} duration={500} />
);

export default Toast;
