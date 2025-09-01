// theme.init.js
import {
  applyEffectiveTheme,
  toggleTheme,
  setupSystemThemeObserver,
} from "./theme.core.js"

// ===================================================
// Função auxiliar (usada para desktop e mobile)
// ===================================================
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

// ===================================================
// Botões desktop e mobile
// ===================================================
const initDesktopThemeToggle = () => setupThemeButton("toggle__desktop")
const initMobileThemeToggle = () => setupThemeButton("toggle__mobile")

// ===================================================
// Inicializa todo o sistema de tema
// ===================================================
export const initTheme = () => {
  applyEffectiveTheme() // aplica o tema primeiro
  initDesktopThemeToggle() // depois inicializa botão desktop
  initMobileThemeToggle() // inicializa botão mobile
  setupSystemThemeObserver() // por último, observa mudanças do sistema
}
