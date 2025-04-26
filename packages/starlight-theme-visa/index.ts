import type { StarlightPlugin } from '@astrojs/starlight/types'

import { overrideComponents } from './libs/starlight'

export default function starlightThemeVisaPlugin(): StarlightPlugin {
  return {
    name: 'starlight-theme-visa',
    hooks: {
      'config:setup'({ config, logger, updateConfig }) {
        const userExpressiveCodeConfig =
          !config.expressiveCode || config.expressiveCode === true ? {} : config.expressiveCode

        updateConfig({
          components: overrideComponents(config, ['LanguageSelect', 'Pagination', 'ThemeSelect'], logger),
          customCss: [
            ...(config.customCss ?? []),
            'starlight-theme-visa/styles/layers',
            'starlight-theme-visa/styles/theme',
            'starlight-theme-visa/styles/base',
            ...(config.markdown?.headingLinks === false ? [] : ['starlight-theme-visa/styles/anchors']),
          ],
          expressiveCode:
            config.expressiveCode === false
              ? false
              : {
                  themes: ['vitesse-dark', 'vitesse-light'],
                  ...userExpressiveCodeConfig,
                  styleOverrides: {
                    borderColor: 'var(--sl-rapide-ui-border-color)',
                    borderRadius: '0.5rem',
                    ...userExpressiveCodeConfig.styleOverrides,
                    frames: {
                      editorActiveTabIndicatorTopColor: 'unset',
                      editorActiveTabIndicatorBottomColor: 'var(--sl-color-gray-3)',
                      editorTabBarBorderBottomColor: 'var(--sl-rapide-ui-border-color)',
                      frameBoxShadowCssValue: 'unset',
                      ...userExpressiveCodeConfig.styleOverrides?.frames,
                    },
                    textMarkers: {
                      backgroundOpacity: '40%',
                      markBackground: 'var(--sl-rapide-ec-marker-bg-color)',
                      markBorderColor: 'var(--sl-rapide-ec-marker-border-color)',
                      ...userExpressiveCodeConfig.styleOverrides?.textMarkers,
                    },
                  },
                },
        })
      },
    },
  }
}
