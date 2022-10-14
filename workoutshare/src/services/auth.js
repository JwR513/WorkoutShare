import Client from './api'

//authenticate user
export const SignInUser = async (data) => {
  try {
    const res = await Client.post(`/api/user/login`, data)
    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('userId', res.data.user.id)
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post(`/api/user/reg`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/api/user/users/session')
    return res.data
  } catch (error) {
    throw error
  }
}

export const createSplit = async (info) => {
  try {
    let res = await Client.post(`/api/split/create`, info)
    localStorage.setItem('splitId', res.data.id)
    return res.data
  } catch (error) {
    throw error
  }
}

export const createUserSplit = async (body) => {
  try {
    let res = await Client.post(`/api/usersplit/create`, body)
    console.log(res.data)
  } catch (error) {
    throw error
  }
}
