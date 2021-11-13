export interface Presupuesto{
    efectivo: Efectivo;
    capitalOperativo:CapitalOperativo;
    capitalInversion:CapitalInversion;
}

export interface DetalleEfectivo{
    tipo:string;
    detalle:string;
    procedencia:string;
    aporte:string
}
export interface Efectivo{
    total:number;
    detalle:DetalleEfectivo
}
export interface CapitalOperativo{
    manoObra: Detalle[];
    prima:Detalle[];
    promocion:Detalle[];
    operativos:Detalle[];
    total:number
}
export interface CapitalInversion{
    infraestructura:Detalle[];
    maquinaria:Detalle[];
    legales:Detalle[];
    total:number
}
export interface Detalle{
    cantidad:number;
    unidad:string;
    detalle:string;
    aporte?:number;
    inversion?:number;
}