import {
  applyEffectiveTheme,
  toggleTheme,
  setupSystemThemeObserver,
} from "./theme.core.js"

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
  applyEffectiveTheme() // aplica tema primeiro
  initDesktopThemeToggle() // depois configura botão desktop
  initMobileThemeToggle() // depois configura botão mobile
  setupSystemThemeObserver() // observa mudanças do sistema
}
