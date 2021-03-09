import {IncomingMessage} from "http";
import MobileApp from '~/components/apps/MobileApp.vue'
import {renderApp, SSRManifest} from "~/lib/entrypoints/server";

export async function render(url: string, manifest: SSRManifest, request: IncomingMessage) {
    return renderApp(MobileApp, url, manifest, request)
}
