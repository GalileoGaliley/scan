import { endpoints } from 'src/endpoints';
import { axiosInstance as axios } from 'src/services/api';
import type {FetchUserRequest, FetchUserResponse} from 'src/store/user/user.types';

const {
  user: { user: fetchUserURL },
} = endpoints;

const fetchUserService = async (userToken: FetchUserRequest): Promise<FetchUserResponse> => {
  try {
    const { data } = await axios.post<FetchUserResponse>(fetchUserURL, userToken);
    return data
  } catch (error) {
    return Promise.reject(error);
  }
};

export { fetchUserService };
