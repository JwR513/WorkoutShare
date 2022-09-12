import Client from './api'
import { Server } from '../components/globals'
import axios from 'axios'
import { idText } from 'typescript'

//authenticate user
export const SignInUser = async (data) => {
  try {
    const res = await Client.post(`/api/token/`, data)
    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.access)
    return res.data
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await axios.post(`${Server}/api/signup/`, data)
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

export const GetSplits = async () => {
  try {
    const res = await Client.get('/splits/')
    console.log(res)
    return res.data
  } catch (error) {
    return error
  }
}

export const CreateSplit = async (data) => {
  try {
    let res = await Client.post(`/splits/`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

// export const UpdateSplit = async () => {
//   try {
//     let res = await Client.put(`/splits/${split.id}`)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }
