import { DataTypes } from "./Types";

const protocol = "https";
const hostname = "empresas.ioasys.com.br";
const api = "api/v1";
const baseUrl = `${protocol}://${hostname}/${api}`;

export const RestUrls = {
  [DataTypes.ENTERPRISES]: `${baseUrl}/enterprises`,
  [DataTypes.AUTHENTICATION]: `${baseUrl}/users/auth/sign_in`
};
