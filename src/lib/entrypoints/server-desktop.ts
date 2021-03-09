import {IncomingMessage} from "http";
import DesktopApp from '~/components/apps/DesktopApp.vue'
import {renderApp, SSRManifest} from "~/lib/entrypoints/server";

export async function render(url: string, manifest: SSRManifest, request: IncomingMessage) {
    return renderApp(DesktopApp, url, manifest, request)
}
