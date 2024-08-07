/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    user?: {
      username: string
      email: string
      firstName: string
      image: string
    }
  }
}
