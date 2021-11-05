import {AxiosResponse} from "axios";
import {axios} from './index'
import {ILoginData} from "../store/auth/types";


export interface ILoginResponse {
  id: string
  username: string
  fullName: string
  avatar: string
  token: string
}

class AuthAPI {

  async login(loginData: ILoginData): Promise<ILoginResponse> {
    const response = await axios.post<ILoginData, AxiosResponse<{ user: ILoginResponse }>>('auth/login', loginData)
    return response.data.user
  }

  async me():Promise<ILoginResponse> {
    const response = await axios.get<{user:ILoginResponse}>('auth/me')
    return response.data.user
  }
}

export default new AuthAPI()