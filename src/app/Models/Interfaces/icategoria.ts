import { IVacante } from "./ivacante";

export interface ICategoria {
    idCategoria?: number;
    nombre: string;
    descripcion: string;
    vacantes: IVacante[];

}
