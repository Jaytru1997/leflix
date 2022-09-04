<template>
  <ion-page class="page">
    <ion-content>
      <ion-grid class="container">
        <ion-text color="light" class="ion-text-center text">
            <h1 class="heading">Welcome to Leflix</h1>
            <p >The best streaming app of the century to make your day great</p>
        </ion-text>
        <ion-button class="get-started ion-text-capitalize" fill="solid" size="large" expand="block"
           href="/auth">Get Started</ion-button
        >
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonGrid, IonButton, IonText, } from "@ionic/vue";

export default {
  name: "StartPage",
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonButton,
    IonText,
  },
  setup() {
    return {
    }
  }
};
</script>

<style scoped>
ion-content {
  --background: none;
  background-image: url("@/assets/img/banner.svg");
  background-repeat: repeat-y;
  background-position: center;
  background-attachment: fixed;
  box-shadow: 0px -70px 200px 80px inset;
}
.container {
    
    margin: 60vh 0px 0px 0px;
}
.heading {
    font-weight: 700;
}
.get-started {
    margin: 60px 20px 0px 20px;
  --background: none;
  background-color: #e21221;
  border-radius: 40px;
}
</style>
