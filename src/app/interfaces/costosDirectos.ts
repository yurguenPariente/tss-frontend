
export interface CostosDirectos {
    productos: Producto[];
    mubTotal: number;
}   

export interface Producto{
    tipo:string;
    cantidad: number;
    unidadVenta: string;
    frecuencia: number,
    precioV: number;
    precioC: number;
    totalC: number;
    totalV: number;
    mub: number;
    insumos: Insumo[];
}

export interface Insumo{
    nombre: string;
    cantidad: number;
    unidadesProducidas: number;
    precioU: number;
    total: number;
}