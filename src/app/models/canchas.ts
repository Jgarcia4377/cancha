export class Canchas{
    constructor(
        public _id: String,
        public nombre: String,
        public largo: Number,
        public ancho: Number,
        public cesped: String,
        public numeroJugadores: Number,
        public estado: Boolean,
        public establecimiento: String,
        public misTarifas: Array<any>
    ){}
   
}
