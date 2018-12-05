export interface Usuario {
    nombre:string,
    apellido:string,
    correo:string,
    telefono?:string,
    tipo:number,
    usuario:string,
    contra:string,
    token?:string,
    error?:number
}
