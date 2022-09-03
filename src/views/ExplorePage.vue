<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Explore</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default {
  name: 'ExplorePage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
};
</script>
