<template>
  <ion-page class="">
    <ion-header class="ion-no-border">
      <ion-toolbar >
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>
    
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default {
  name: 'HomePage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
};
</script>
