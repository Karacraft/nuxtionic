<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Menu Page</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header>
          Navigate
        </ion-list-header>
        <ion-menu-toggle auto-hide="false">
          <ion-item button>
            <ion-icon
              :icon="ioniconsHome"
            >
              <ion-label>Home</ion-label>
            </ion-icon>
          </ion-item>
          <ion-item button>
            <ion-icon
              :icon="ioniconsSettings"
            >
              <ion-label>Settings</ion-label>
            </ion-icon>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-page
    id="main-content"
    class="ion-page"
  >
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-buttons slot="start">
          <ion-menu-toggle>
            <ion-button>
              <ion-icon
                slot="icon-only"
                :icon="ioniconsMenu"
              />
            </ion-button>
          </ion-menu-toggle>
        </ion-buttons>
        <ion-title>Header</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <Explore name="Menu View Pane" />
    </ion-content>
  </ion-page>
</template>
