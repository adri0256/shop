import { PropsWithChildren } from "react";
import Navigation from "@/Components/Navigation";
import { User } from "@/types";

interface Props {
    user: User;
}

export const BaseLayout = ({user, children}: PropsWithChildren<Props>) => {
    return (
        <>
            <Navigation user={user} />
            <main style={{ marginTop: "9vh" }}>
                {children}
            </main>
            <footer>
                <p>Footer</p>
            </footer>
        </>
    );    
};