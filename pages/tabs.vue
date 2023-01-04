<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet />
      <ion-tab-bar slot="bottom">
        <ion-tab-button
          tab="tab1"
          href="/tabs/simple"
          selected
        >
          <ion-icon :icon="ioniconsSquare" />
          <ion-label>Simple</ion-label>
        </ion-tab-button>
        <ion-tab-button
          tab="tab2"
          href="/tabs/menu"
        >
          <ion-icon :icon="ioniconsTriangle" />
          <ion-label>Menu</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="tab3"
          href="/tabs/split"
        >
          <ion-icon :icon="ioniconsEllipse" />
          <ion-label>Split</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="tab4"
          href="/tabs/fourth"
        >
          <ion-icon :icon="ioniconsSettings" />
          <ion-label>Fourth</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
