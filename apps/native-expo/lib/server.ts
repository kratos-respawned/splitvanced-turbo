import axois from "axios";

export const server = axois.create({
  baseURL: "http://192.168.1.12:3000/",
});
