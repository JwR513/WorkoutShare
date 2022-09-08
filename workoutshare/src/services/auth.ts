import Client from './api'

export const SignInPlayer = async (data: any) => {
  try {
    const res = await Client.post(`/api/token`, data)
    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.access)
    return res.data.username
  } catch (error) {
    throw error
  }
}

export const RegisterPlayer = async (data: any) => {
  try {
    const res = await Client.post(`/api/signup/`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/api/token/refresh/')
    return res.data
  } catch (error) {
    throw error
  }
}
