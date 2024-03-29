import axios from "axios";

export class HttpClient {
  baseUrl;

  constructor(url: string) {
    this.baseUrl = url;
  }

  async get(url: string) {
    return await axios.get(`${this.baseUrl}/${url}`);
  }
  async getById(url: string, id: string) {
    return await axios.get(`${this.baseUrl}/${url}/${id}`);
  }

  async post(url: string, body: object) {
    return await axios.post(`${this.baseUrl}/${url}`, body);
  }
  async postWithToken(url: string, body: object) {
    return await axios.post(`${this.baseUrl}/${url}`, body, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
  }
  async getByToken(url: string) {
    console.log(localStorage.getItem("token"));

    return await axios.get(`${this.baseUrl}/${url}`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
  }

  async getUserWithToken(url: string, token: string) {
    // console.log(localStorage.getItem("token"));

    return await axios.get(`${this.baseUrl}/${url}`, {
      headers: {
        Authorization: `${localStorage.getItem(token)}`,
      },
    });
  }

  async put(url: string, id: number | string, body: object) {
    return await axios.put(`${this.baseUrl}/${url}/${id}`, body);
  }
  async putWithToken(url: string, id: number | string, body: object) {
    // console.log(localStorage.getItem("token"));

    return await axios.put(`${this.baseUrl}/${url}/${id}`, body, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
  }

  async delete(url: string, id: number | string) {
    return await axios.delete(`${this.baseUrl}/${url}/${id}`);
  }
}
