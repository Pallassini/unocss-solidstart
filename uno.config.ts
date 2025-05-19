// uno.config.ts
import { defineConfig, presetUno, presetIcons, presetWebFonts, presetAttributify } from 'unocss';

export default defineConfig({
  
  content: {
    filesystem: ['./src/**/*.{html,js,ts,jsx,tsx}']
  },
  presets: [
        presetAttributify(), 
    presetUno(),
    presetIcons({
      scale: 1.2,
      collections: {
        // Puoi aggiungere collezioni di icone qui
      }
    }),
    presetWebFonts({
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono']
      }
    })
  ],
  shortcuts: {
    // Definisci shortcut personalizzati
    'btn': 'px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600',
    'card': 'p-4 rounded-lg shadow-md bg-white dark:bg-gray-700'
  },
  theme: {
    colors: {
      // Personalizza i colori
      'primary': '#3b82f6',
      'secondary': '#10b981'
    }
  }
});