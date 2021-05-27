import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://test.enthic.fr:5432",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async getCompanyDataBySiren(siren) {
    const url = `/company/siren/${siren}`;
    let results = null;
    try {
      results = await apiClient.get(url);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return null;
      }
      console.log("Error", error);
    }
    return results ? results.data : null;
  },
};
