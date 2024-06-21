export type Task = {
    id?: number;
    name?: string;
    status?: string;
    description?: string;
    date_created?: string;
    date_to_finish?: string | null;
}