import { BaseLayout } from "@/Layouts/BaseLayout";
import { Items, PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Box, Container, CssBaseline } from "@mui/material";

const Details = ({ auth, item }: PageProps<{ item: Items }>) => {
    console.log(item);
    return (
        <BaseLayout user={auth.user}>
            <Head title={item.name} />
            <CssBaseline />
            <Container sx={{ marginTop: 2.2 }}>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    <h1>Details Page</h1>
                    <h2>{item.name}</h2>
                    <h3>{item.description}</h3>
                    <h4>{item.price}</h4>
                    <h5>{item.quantity}</h5>
                </Box>
            </Container>
        </BaseLayout>
    );
}

export default Details;