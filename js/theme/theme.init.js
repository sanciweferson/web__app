import {
  applyEffectiveTheme,
  toggleTheme,
  setupSystemThemeObserver,
} from "./theme.core.js"

// Função auxiliar para configurar os botões de tema
const setupThemeButton = (buttonId) => {
  const button = document.getElementById(buttonId)
  if (!button) return

  const updateAriaLabel = (isDark) => {
    button.setAttribute(
      "aria-label",
      isDark ? "Alternar para tema claro" : "Alternar para tema escuro"
    )
  }

  button.addEventListener("click", () => {
    toggleTheme()
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark"
    updateAriaLabel(isDark)
  })

  const isDark = document.documentElement.getAttribute("data-theme") === "dark"
  updateAriaLabel(isDark)
}

const initDesktopThemeToggle = () => setupThemeButton("toggle__desktop")
const initMobileThemeToggle = () => setupThemeButton("toggle__mobile")

export const initTheme = () => {
  applyEffectiveTheme() // Aplica o tema primeiro

  // Espera o DOM aplicar o tema antes de configurar os botões
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initDesktopThemeToggle()
      initMobileThemeToggle()
      setupSystemThemeObserver()
    })
  } else {
    initDesktopThemeToggle()
    initMobileThemeToggle()
    setupSystemThemeObserver()
  }
}
