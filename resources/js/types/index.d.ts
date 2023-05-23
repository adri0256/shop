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
    image: string;
    name: string;
    price: number;
    quantity: number;
    category: string;
    description: string;
    currency: string;
    active: boolean;
    category_id: number;
    brand_id: number;
    created_at: string;
    updated_at: string;
};
