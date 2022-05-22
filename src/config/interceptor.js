import axios from "axios";

const Interceptor = () => {
	
	const defaultOptions = {
		baseURL: process.env.REACT_APP_BASE_URL,
	};

	let instance = axios.create(defaultOptions);
	instance.interceptors.request.use(function (config) {
		const token = localStorage.getItem("token");
		config.headers = {
			Authorization: token ? `Bearer ${token}` : "",
			"Content-Type": "application/json",
		};
		return config;
	});

	instance.interceptors.response.use(
		function (successRes) {
			return successRes;
		},
		function (error) {
			if (error.response.status === 403) {
				alert("Session is expired please login again!");
				localStorage.removeItem("token");
				window.location.replace("/login");
			} else {
				return error.response;
			}
		}
	);
	return instance;
};

export default Interceptor();
