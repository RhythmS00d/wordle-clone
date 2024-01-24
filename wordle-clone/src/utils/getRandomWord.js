import axios from "axios";

const URL = "https://random-word-api.herokuapp.com/word?length=5";

const getRandomWord = async () => {
  const response = await axios.get(URL).then((resp) => resp.data);

  return response[0];
};

const services = { getRandomWord };

export default services;