<template>
  <ion-page>
    <ion-grid>
      <ion-row>
        <img src="@/assets/icon/logo.svg" alt="Leflix Logo" />
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-spinner name="bubbles"></ion-spinner>
      </ion-row>
    </ion-grid>
  </ion-page>
</template>

<script>
import { IonPage, IonGrid, IonRow, IonSpinner } from "@ionic/vue";

export default {
  name: "LoadingScreen",
  components: { IonPage, IonGrid, IonRow, IonSpinner },
  data() {
    return {};
  },
  methods: {
    delayLoader(delay) {
      setTimeout(function () {
        // console.log(router)
      }, delay);
    },
  },
  async mounted() {
    const delay = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
        reject()
      }, 3000);
    });

    await delay
    this.$router.push("/start")
  },
};
</script>

<style scoped>
ion-grid {
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
}
ion-spinner {
  margin-top: 150px;
  --color: #e21221;
  transform: scale(2);
}
</style>
