
import Interceptor from '../config/interceptor';

const addVehicle = async (data) => {
  let vehicle = await axios
    .post('https://hook.us1.make.com/vbv61km18q7d3k7fps1psrg3qyr3643p', data)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });
  return vehicle;
};



export const vehicleActions = {
    addVehicle,
};

export default vehicleActions;
