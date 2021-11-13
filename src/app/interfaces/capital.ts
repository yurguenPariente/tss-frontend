export interface Presupuesto{
    efectivo: Efectivo;
    capitalOperativo:CapitalOperativo;
    capitalInversion:CapitalInversion;
}

export interface DetalleEfectivo{
    detalle:string;
    procedencia:string;
    aporte:number
}
export interface Efectivo{
    total:number;
    detalle:DetalleEfectivo[]
}
export interface CapitalOperativo{
    manoObra: CapitalO;
    prima:CapitalO;
    promocion:CapitalO;
    operativos:CapitalO;
}
export interface CapitalO{
    detalles:Detalle[],
    totalInvertido:number,
    totalPropio:number
}

export interface CapitalInversion{
    infraestructura:CapitalO;
    maquinaria:CapitalO;
    legales:CapitalO;
}
export interface Detalle{
    cantidad:number;
    unidad:string;
    detalle:string;
    aporte?:number;
    inversion?:number;
}