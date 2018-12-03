export class User{
    constructor(
        public _id:string,
        public nombres: string,
        public apellidos: string,
        public correo: string,
        public contrasena: string,
        public fechaNacimiento: string,
        public sexo: string,
        public rol: string,
        public imagen: string,
        public gettoken: string
    ){}
   
}
