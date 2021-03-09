/* eslint-disable import/no-duplicates */
import { Store as VuexStore } from 'vuex'

declare global {
  interface Window {
    // For sending initial state from SSR vuex to client vuex
    __INITIAL_STATE__: any
  }
}

declare interface Event {
  // So we can flag events as having had an interaction previously.
  // When event bubbles up, the listener can decide whether to respond or not.
  hadInteraction: boolean;
}

declare module '*.vue' {
  // import Vue from 'vue'
  export default PublicAPIComponent
}

declare module 'vuex' {
  declare interface Store<S> extends VuexStore<S> {
    $client: any;
  }
}
