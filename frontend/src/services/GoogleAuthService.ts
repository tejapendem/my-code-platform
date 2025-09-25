import type { User } from "../types/auth"

declare global {
  interface Window {
    google: any
  }
}

export class GoogleAuthService {
  private static instance: GoogleAuthService
  private user: User | null = null
  private clientId = "853420507974-5lchdvh5npm5hepibq9kno0uijvvr44b.apps.googleusercontent.com" // Replace with your actual Google Client ID

  static getInstance(): GoogleAuthService {
    if (!GoogleAuthService.instance) {
      GoogleAuthService.instance = new GoogleAuthService()
    }
    return GoogleAuthService.instance
  }

  async initializeGoogleAuth(): Promise<void> {
    return new Promise((resolve) => {
      if (typeof window !== "undefined" && window.google) {
        window.google.accounts.id.initialize({
          client_id: this.clientId,
          callback: this.handleCredentialResponse.bind(this),
          auto_select: false,
          cancel_on_tap_outside: true,
        })
        resolve()
      } else {
        // Wait for Google script to load
        const checkGoogle = setInterval(() => {
          if (typeof window !== "undefined" && window.google) {
            clearInterval(checkGoogle)
            window.google.accounts.id.initialize({
              client_id: this.clientId,
              callback: this.handleCredentialResponse.bind(this),
              auto_select: false,
              cancel_on_tap_outside: true,
            })
            resolve()
          }
        }, 100)
      }
    })
  }

  private handleCredentialResponse(response: any) {
    try {
      // Decode the JWT token to get user info
      const payload = JSON.parse(atob(response.credential.split(".")[1]))

      const user: User = {
        id: payload.sub,
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
      }

      this.user = user
      localStorage.setItem("auth-user", JSON.stringify(user))

      // Trigger a custom event to notify the app of successful login
      window.dispatchEvent(new CustomEvent("googleAuthSuccess", { detail: user }))
    } catch (error) {
      console.error("Error handling credential response:", error)
      window.dispatchEvent(new CustomEvent("googleAuthError", { detail: error }))
    }
  }

  async signInWithGoogle(): Promise<User> {
    return new Promise((resolve, reject) => {
      const handleSuccess = (event: any) => {
        window.removeEventListener("googleAuthSuccess", handleSuccess)
        window.removeEventListener("googleAuthError", handleError)
        resolve(event.detail)
      }

      const handleError = (event: any) => {
        window.removeEventListener("googleAuthSuccess", handleSuccess)
        window.removeEventListener("googleAuthError", handleError)
        reject(event.detail)
      }

      window.addEventListener("googleAuthSuccess", handleSuccess)
      window.addEventListener("googleAuthError", handleError)

      // Show Google One Tap or redirect to Google OAuth
      if (typeof window !== "undefined" && window.google) {
        window.google.accounts.id.prompt((notification: any) => {
          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            // Fallback to popup
            window.google.accounts.oauth2
              .initTokenClient({
                client_id: this.clientId,
                scope: "email profile",
                callback: (tokenResponse: any) => {
                  this.fetchUserProfile(tokenResponse.access_token).then(resolve).catch(reject)
                },
              })
              .requestAccessToken()
          }
        })
      }
    })
  }

  private async fetchUserProfile(accessToken: string): Promise<User> {
    try {
      const response = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      const profile = await response.json()

      const user: User = {
        id: profile.id,
        email: profile.email,
        name: profile.name,
        picture: profile.picture,
      }

      this.user = user
      localStorage.setItem("auth-user", JSON.stringify(user))
      return user
    } catch (error) {
      throw new Error("Failed to fetch user profile")
    }
  }

  signOut(): void {
    this.user = null
    localStorage.removeItem("auth-user")

    if (typeof window !== "undefined" && window.google) {
      window.google.accounts.id.disableAutoSelect()
    }
  }

  getCurrentUser(): User | null {
    if (this.user) return this.user

    const stored = localStorage.getItem("auth-user")
    if (stored) {
      try {
        this.user = JSON.parse(stored)
        return this.user
      } catch {
        localStorage.removeItem("auth-user")
      }
    }

    return null
  }
}
