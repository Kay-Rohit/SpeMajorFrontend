//process.env is used to fetch the environment variable of the system and thus fetch the ip

const url = process.env.HOST_IP;
export const baseUrl = `http://${url}:5000`;