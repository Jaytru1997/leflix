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
        
        <!-- <ExploreContainer name="Profile page" /> -->
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  // import ExploreContainer from '@/components/ExploreContainer.vue';
  
  export default {
    name: 'Tab4Page',
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
  };
  </script>
  