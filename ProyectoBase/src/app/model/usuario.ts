import { HttpService } from '../service/http-service.service';

export class Usuario {
    public static endPoint = '/usuario';
    public nombre: string;
    public correo: string;
    public contrasena: string;
    public confirmacionContrasena: string;
}