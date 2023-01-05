<script setup>
const beforeTabChange = (e) => {
  console.info('Before Tab Change...', e)
}
const afterTabChange = (e) => {
  console.info('After Tab Change...', e)
}

onMounted(() => {
})
</script>

<template>
  <ion-page>
    <ion-tabs
      @ionTabsWillChange="beforeTabChange"
      @ionTabsDidChange="afterTabChange"
    >
      <ion-router-outlet />
      <ion-tab-bar
        slot="bottom"
        color="secondary"
        mode="md"
      >
        <ion-tab-button
          tab="tab1"
          href="/tabs/simple"
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
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
