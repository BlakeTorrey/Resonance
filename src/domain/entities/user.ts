
export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    emailUpdates: boolean;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}