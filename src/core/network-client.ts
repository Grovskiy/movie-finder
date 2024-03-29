import axios, { AxiosInstance } from 'axios'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API,
  params: {
    apikey: import.meta.env.VITE_API_KEY
  }
})

class ExampleClient {
  axiosClient: AxiosInstance

  constructor(axiosClient: AxiosInstance) {
    this.axiosClient = axiosClient
  }

  async get<T>(url: string, params: {}) {
    const response = await this.axiosClient.get(url, {
      params
    })
    return response.data as T
  }

  async post<TRequest, TResponse>(url: string, body: TRequest, params: {}) {
    const response = await this.axiosClient.post(url, body, {
      params
    })
    return response.data as TResponse
  }
}

export const exampleClient = new ExampleClient(axiosClient)
