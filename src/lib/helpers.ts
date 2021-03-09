export function buildParams() {
    const [pDevice, pPlatform] = (process.env.VITE_BUILD_TARGET || 'mobile:client').split(':')
    const device = pDevice === 'desktop' ? 'desktop' : 'mobile'
    const platform = pPlatform === 'server' ? 'server' : 'client'
    return { device, platform }
}
