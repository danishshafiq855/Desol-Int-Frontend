
import Interceptor from '../config/interceptor';

const authUser = async (data) => {
  let userToken = await Interceptor
    .post('/api/v1/users/login', data)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });
  return userToken;
};



export const UserActions = {
    authUser,
};

export default UserActions;
