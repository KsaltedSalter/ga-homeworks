import axios from 'axios'
import { getToken } from './auth'

const baseUrl = 'https://ga-winebored.herokuapp.com'

export const getAllWines = () => {
  return axios.get(`${baseUrl}/Wines`)
}

export const getSingleWine = (id) => {
  return axios.get(`${baseUrl}/wines/${id}`)
}

// auth

export const registerUser = (formData) => {
  return axios.post(`${baseUrl}/register`, formData)
}

export const loginUser = (formData) => {
  return axios.post(`${baseUrl}/login`, formData)
}

// create

export const createWine = (formData) => {
  const requestConfig = {
    // eslint-disable-next-line comma-dangle
    headers: { Authorization: `Bearer ${getToken()}` },
  }
  return axios.post(`${baseUrl}/wines`, formData, requestConfig)
}

// edit

export const editWine = (id, formData) => {
  const requestConfig = {
    // eslint-disable-next-line comma-dangle
    headers: { Authorization: `Bearer ${getToken()}` },
  }
  return axios.put(`${baseUrl}/wines/${id}`, formData, requestConfig)
}
