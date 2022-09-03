<template>
    <ion-page>
      <ion-content>
        <ion-grid class="container">
          <!-- <ion-header class="flex ion-no-border">
            <div class="title flex ai-c jc-c">
              <h1>Select User</h1>
            </div>
          </ion-header> -->
        </ion-grid>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonContent, IonGrid, } from "@ionic/vue";
  export default {
    name: 'StartPage',
    components: {
      IonPage,
      IonContent,
      IonGrid,
    },
  };
  </script>