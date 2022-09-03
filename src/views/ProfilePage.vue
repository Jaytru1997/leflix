<template>
    <ion-page>
      <ion-header class="ion-no-border">
        <ion-toolbar>
          <ion-title>Profile</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Profile</ion-title>
          </ion-toolbar>
        </ion-header>
        
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  
  export default {
    name: 'ProfilePage',
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
  };
  </script>
  