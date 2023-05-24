import { BaseLayout } from "@/Layouts/BaseLayout";
import { Items, PageProps } from "@/types";
import { Box, Pagination, PaginationItem } from "@mui/material";
import { Head, Link } from "@inertiajs/react";
import Card from "@/Components/Card";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useEffect } from "react";

const Shop: React.FC<PageProps<{ items: any }>> = ({ auth, items }) => {
    
    useEffect(() => {
        console.log(items);
    }, [items]);

    return (
        <BaseLayout user={auth.user}>
            <Head title="Shop" />
            <CssBaseline />
            <Container sx={{ marginTop: 2.2 }}>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {items.data.map((item: Items) => (
                        <Card key={item.id} {...item} />
                    ))}
                </Box>
                <Box sx={{ marginTop: 2 }}>
                    <Pagination
                        count={items.last_page}
                        page={items.current_page}
                        renderItem={(item) => (
                            <PaginationItem
                                component={Link}
                                href={`/Shop?page=${item.page}`}
                                {...item}
                            />
                        )}
                    />
                </Box>
            </Container>
        </BaseLayout>
    );
}

export default Shop;