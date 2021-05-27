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
  searchCompaniesFromText(text) {
    const url = `/company/search/page?page=1&per_page=30&probe=${text}`;
    return this.searchCompaniesFromUrl(url);
  },
  async searchCompaniesFromUrl(url) {
    const results = await apiClient.get(url);
    return results ? results.data : null;
  },
};
