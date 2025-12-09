const apiService = (url) => ({
  async getHeroes() {
    try {
      const response = await fetch(`${url}/heroes/list`);
      if (!response.ok)
        throw new Error("[API] Something go wrong with fetching");
      return await response.json();
    } catch (e) {
      throw new Error(`[API]: ${e}`);
    }
  },
});

export default apiService;
