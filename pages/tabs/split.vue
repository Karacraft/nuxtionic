<script setup>
import Explore from '~~/components/Explore.vue'

</script>

<template>
  <ion-page>
    <ion-split-pane
      when="sm"
      content-id="main-content"
    >
      <ion-menu content-id="main-content">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-list>
            <ion-list-header> Navigate </ion-list-header>
            <ion-menu-toggle auto-hide="false">
              <ion-item button>
                <ion-icon
                  slot="start"
                  :icon="ioniconsHome"
                />
                <ion-label> Home </ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>

      <div
        id="main-content"
        class="ion-page"
      >
        <ion-header>
          <ion-toolbar>
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
          <Explore name="Split Pane" />
        </ion-content>
      </div>
    </ion-split-pane>
  </ion-page>
</template>
