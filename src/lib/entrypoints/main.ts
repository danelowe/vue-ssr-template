import {createHead, Head} from "@vueuse/head";
import {createSSRApp} from 'vue'
import {Router} from "vue-router";
import {createStore, ModuleTree, Store} from "vuex";
import {createRouter} from '~/lib/router'
import storeModules from '~/store'
import {App} from 'vue'
// @ts-ignore
import AppComponent from 'App.vue'

export interface AppContext {
    app: App<HTMLElement>,
    router: Router,
    head: Head,
    store: Store<any> //@todo: add types
    isClient: boolean,
}

// SSR requires a fresh app instance per request, therefore we export a function that creates a fresh app instance.
export function createApp(): AppContext {
    const app = createSSRApp(AppComponent) as App<HTMLElement>
    const router = createRouter()
    app.use(router)
    const head = createHead()
    app.use(head)

    // setup store
    const isClient = !import.meta.env.SSR
    const modules: ModuleTree<any> = {}
    const initialState = (isClient && window && window.__INITIAL_STATE__) || {}
    Object.keys(storeModules).forEach((k) => {
        const sm = storeModules as ModuleTree<any>
        modules[k] = Object.prototype.hasOwnProperty.call(initialState, k)
            ? {...sm[k], state: initialState[k], namespaced: true}
            : {...sm[k], namespaced: true}
    })
    const store = createStore({modules})
    app.use(store)

    const ctx = {app, router, head, store, isClient}

    return ctx
}
