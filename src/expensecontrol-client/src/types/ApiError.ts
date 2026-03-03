
// tipo da resposta de erro do backend
export type ApiError = {
    message: string;
    status: number;
    statckTrace: string;
}