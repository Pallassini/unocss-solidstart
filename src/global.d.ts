/// <reference types="@solidjs/start/env" />
// types/unocss.d.ts
import 'solid-js'

declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> {
      // Attributi UnoCSS
      bg?: string
      text?: string
      font?: string
      p?: string
      m?: string
      border?: string
      flex?: string
      grid?: string
      pos?: string
      w?: string
      h?: string
      hover?: string
      // Aggiungi altri attributi usati comunemente
    }
  }
}
