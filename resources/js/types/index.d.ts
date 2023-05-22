export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export type Items<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    id: number;
    img: string;
    title: string;
    content: string;
    price: number;
    quantity: number;
    category: string;
    desc: string;
    currency: string;
};
