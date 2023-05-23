import { BaseLayout } from "@/Layouts/BaseLayout";
import { Items, PageProps } from "@/types";
import { Box, Button, Pagination, PaginationItem, Typography } from "@mui/material";
import { Head, Link } from "@inertiajs/react";
import ShopCard from "@/Components/Card";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import axios from "axios";
import { useEffect } from "react";

/*
 * Temporary data
 * */
/*
const items = [
    {
        id: 1,
        title: 'Item 1',
        price: 100,
        currency: "Ft",
        desc: "This is a product! ...",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci alias aliquid amet aperiam asperiores atque autem blanditiis commodi consequatur consequuntur corporis cumque cupiditate delectus deleniti dicta dignissimos dolorum ducimus ea earum eius eligendi eos error esse est et eum eveniet excepturi exercitationem expedita explicabo facere fugiat fugit harum hic id illum impedit in incidunt ipsa ipsum iste itaque iure iusto labore laboriosam laborum laudantium libero magnam magni maiores maxime minima minus molestiae mollitia natus necessitatibus nemo neque nihil nisi nobis non nostrum nulla numquam obcaecati odio officia officiis omnis optio pariatur perferendis perspiciatis placeat porro possimus praesentium provident quae quam quasi qui quia quibusdam quisquam quod quos ratione recusandae rem repellat repellendus reprehenderit repudiandae rerum saepe sapiente sed sequi similique sit soluta sunt suscipit tempora tenetur totam ullam unde vel veniam veritatis voluptas voluptate voluptatem voluptates voluptatibus voluptatum!",
        img: 'https://picsum.photos/200/300',
        category: "none",
        quantity: 1
    },
    {
        id: 2,
        title: 'Item 2',
        price: 200,
        currency: "Ft",
        desc: "This is a product! ...",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci alias aliquid amet aperiam asperiores atque autem blanditiis commodi consequatur consequuntur corporis cumque cupiditate delectus deleniti dicta dignissimos dolorum ducimus ea earum eius eligendi eos error esse est et eum eveniet excepturi exercitationem expedita explicabo facere fugiat fugit harum hic id illum impedit in incidunt ipsa ipsum iste itaque iure iusto labore laboriosam laborum laudantium libero magnam magni maiores maxime minima minus molestiae mollitia natus necessitatibus nemo neque nihil nisi nobis non nostrum nulla numquam obcaecati odio officia officiis omnis optio pariatur perferendis perspiciatis placeat porro possimus praesentium provident quae quam quasi qui quia quibusdam quisquam quod quos ratione recusandae rem repellat repellendus reprehenderit repudiandae rerum saepe sapiente sed sequi similique sit soluta sunt suscipit tempora tenetur totam ullam unde vel veniam veritatis voluptas voluptate voluptatem voluptates voluptatibus voluptatum!",
        img: 'https://picsum.photos/200/300',
        category: "none",
        quantity: 1
    },
    {
        id: 3,
        title: 'Item 3',
        price: 300,
        currency: "Ft",
        desc: "This is a product! ...",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci alias aliquid amet aperiam asperiores atque autem blanditiis commodi consequatur consequuntur corporis cumque cupiditate delectus deleniti dicta dignissimos dolorum ducimus ea earum eius eligendi eos error esse est et eum eveniet excepturi exercitationem expedita explicabo facere fugiat fugit harum hic id illum impedit in incidunt ipsa ipsum iste itaque iure iusto labore laboriosam laborum laudantium libero magnam magni maiores maxime minima minus molestiae mollitia natus necessitatibus nemo neque nihil nisi nobis non nostrum nulla numquam obcaecati odio officia officiis omnis optio pariatur perferendis perspiciatis placeat porro possimus praesentium provident quae quam quasi qui quia quibusdam quisquam quod quos ratione recusandae rem repellat repellendus reprehenderit repudiandae rerum saepe sapiente sed sequi similique sit soluta sunt suscipit tempora tenetur totam ullam unde vel veniam veritatis voluptas voluptate voluptatem voluptates voluptatibus voluptatum!",
        img: 'https://picsum.photos/200/300',
        category: "none",
        quantity: 1
    },
    {
        id: 4,
        title: 'Item 4',
        price: 400,
        currency: "Ft",
        desc: "This is a product! ...",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci alias aliquid amet aperiam asperiores atque autem blanditiis commodi consequatur consequuntur corporis cumque cupiditate delectus deleniti dicta dignissimos dolorum ducimus ea earum eius eligendi eos error esse est et eum eveniet excepturi exercitationem expedita explicabo facere fugiat fugit harum hic id illum impedit in incidunt ipsa ipsum iste itaque iure iusto labore laboriosam laborum laudantium libero magnam magni maiores maxime minima minus molestiae mollitia natus necessitatibus nemo neque nihil nisi nobis non nostrum nulla numquam obcaecati odio officia officiis omnis optio pariatur perferendis perspiciatis placeat porro possimus praesentium provident quae quam quasi qui quia quibusdam quisquam quod quos ratione recusandae rem repellat repellendus reprehenderit repudiandae rerum saepe sapiente sed sequi similique sit soluta sunt suscipit tempora tenetur totam ullam unde vel veniam veritatis voluptas voluptate voluptatem voluptates voluptatibus voluptatum!",
        img: 'https://picsum.photos/200/300',
        category: "none",
        quantity: 1
    },
    {
        id: 5,
        title: 'Item 5',
        price: 500,
        currency: "Ft",
        desc: "This is a product! ...",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci alias aliquid amet aperiam asperiores atque autem blanditiis commodi consequatur consequuntur corporis cumque cupiditate delectus deleniti dicta dignissimos dolorum ducimus ea earum eius eligendi eos error esse est et eum eveniet excepturi exercitationem expedita explicabo facere fugiat fugit harum hic id illum impedit in incidunt ipsa ipsum iste itaque iure iusto labore laboriosam laborum laudantium libero magnam magni maiores maxime minima minus molestiae mollitia natus necessitatibus nemo neque nihil nisi nobis non nostrum nulla numquam obcaecati odio officia officiis omnis optio pariatur perferendis perspiciatis placeat porro possimus praesentium provident quae quam quasi qui quia quibusdam quisquam quod quos ratione recusandae rem repellat repellendus reprehenderit repudiandae rerum saepe sapiente sed sequi similique sit soluta sunt suscipit tempora tenetur totam ullam unde vel veniam veritatis voluptas voluptate voluptatem voluptates voluptatibus voluptatum!",
        img: 'https://picsum.photos/200/300',
        category: "none",
        quantity: 1
    },
    {
        id: 6,
        title: 'Item 6',
        price: 600,
        currency: "Ft",
        desc: "This is a product! ...",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci alias aliquid amet aperiam asperiores atque autem blanditiis commodi consequatur consequuntur corporis cumque cupiditate delectus deleniti dicta dignissimos dolorum ducimus ea earum eius eligendi eos error esse est et eum eveniet excepturi exercitationem expedita explicabo facere fugiat fugit harum hic id illum impedit in incidunt ipsa ipsum iste itaque iure iusto labore laboriosam laborum laudantium libero magnam magni maiores maxime minima minus molestiae mollitia natus necessitatibus nemo neque nihil nisi nobis non nostrum nulla numquam obcaecati odio officia officiis omnis optio pariatur perferendis perspiciatis placeat porro possimus praesentium provident quae quam quasi qui quia quibusdam quisquam quod quos ratione recusandae rem repellat repellendus reprehenderit repudiandae rerum saepe sapiente sed sequi similique sit soluta sunt suscipit tempora tenetur totam ullam unde vel veniam veritatis voluptas voluptate voluptatem voluptates voluptatibus voluptatum!",
        img: 'https://picsum.photos/200/300',
        category: "none",
        quantity: 1
    },
    {
        id: 7,
        title: 'Item 7',
        price: 700,
        currency: "Ft",
        desc: "This is a product! ...",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci alias aliquid amet aperiam asperiores atque autem blanditiis commodi consequatur consequuntur corporis cumque cupiditate delectus deleniti dicta dignissimos dolorum ducimus ea earum eius eligendi eos error esse est et eum eveniet excepturi exercitationem expedita explicabo facere fugiat fugit harum hic id illum impedit in incidunt ipsa ipsum iste itaque iure iusto labore laboriosam laborum laudantium libero magnam magni maiores maxime minima minus molestiae mollitia natus necessitatibus nemo neque nihil nisi nobis non nostrum nulla numquam obcaecati odio officia officiis omnis optio pariatur perferendis perspiciatis placeat porro possimus praesentium provident quae quam quasi qui quia quibusdam quisquam quod quos ratione recusandae rem repellat repellendus reprehenderit repudiandae rerum saepe sapiente sed sequi similique sit soluta sunt suscipit tempora tenetur totam ullam unde vel veniam veritatis voluptas voluptate voluptatem voluptates voluptatibus voluptatum!",
        img: 'https://picsum.photos/200/300',
        category: "none",
        quantity: 1
    },
    {
        id: 8,
        title: 'Item 8',
        price: 800,
        currency: "Ft",
        desc: "This is a product! ...",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci alias aliquid amet aperiam asperiores atque autem blanditiis commodi consequatur consequuntur corporis cumque cupiditate delectus deleniti dicta dignissimos dolorum ducimus ea earum eius eligendi eos error esse est et eum eveniet excepturi exercitationem expedita explicabo facere fugiat fugit harum hic id illum impedit in incidunt ipsa ipsum iste itaque iure iusto labore laboriosam laborum laudantium libero magnam magni maiores maxime minima minus molestiae mollitia natus necessitatibus nemo neque nihil nisi nobis non nostrum nulla numquam obcaecati odio officia officiis omnis optio pariatur perferendis perspiciatis placeat porro possimus praesentium provident quae quam quasi qui quia quibusdam quisquam quod quos ratione recusandae rem repellat repellendus reprehenderit repudiandae rerum saepe sapiente sed sequi similique sit soluta sunt suscipit tempora tenetur totam ullam unde vel veniam veritatis voluptas voluptate voluptatem voluptates voluptatibus voluptatum!",
        img: 'https://picsum.photos/200/300',
        category: "none",
        quantity: 1
    },
    {
        id: 9,
        title: 'Item 9',
        price: 900,
        currency: "Ft",
        desc: "This is a product! ...",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci alias aliquid amet aperiam asperiores atque autem blanditiis commodi consequatur consequuntur corporis cumque cupiditate delectus deleniti dicta dignissimos dolorum ducimus ea earum eius eligendi eos error esse est et eum eveniet excepturi exercitationem expedita explicabo facere fugiat fugit harum hic id illum impedit in incidunt ipsa ipsum iste itaque iure iusto labore laboriosam laborum laudantium libero magnam magni maiores maxime minima minus molestiae mollitia natus necessitatibus nemo neque nihil nisi nobis non nostrum nulla numquam obcaecati odio officia officiis omnis optio pariatur perferendis perspiciatis placeat porro possimus praesentium provident quae quam quasi qui quia quibusdam quisquam quod quos ratione recusandae rem repellat repellendus reprehenderit repudiandae rerum saepe sapiente sed sequi similique sit soluta sunt suscipit tempora tenetur totam ullam unde vel veniam veritatis voluptas voluptate voluptatem voluptates voluptatibus voluptatum!",
        img: 'https://picsum.photos/200/300',
        category: "none",
        quantity: 1
    },
    {
        id: 10,
        title: 'Item 10',
        price: 1000,
        currency: "Ft",
        desc: "This is a product! ...",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci alias aliquid amet aperiam asperiores atque autem blanditiis commodi consequatur consequuntur corporis cumque cupiditate delectus deleniti dicta dignissimos dolorum ducimus ea earum eius eligendi eos error esse est et eum eveniet excepturi exercitationem expedita explicabo facere fugiat fugit harum hic id illum impedit in incidunt ipsa ipsum iste itaque iure iusto labore laboriosam laborum laudantium libero magnam magni maiores maxime minima minus molestiae mollitia natus necessitatibus nemo neque nihil nisi nobis non nostrum nulla numquam obcaecati odio officia officiis omnis optio pariatur perferendis perspiciatis placeat porro possimus praesentium provident quae quam quasi qui quia quibusdam quisquam quod quos ratione recusandae rem repellat repellendus reprehenderit repudiandae rerum saepe sapiente sed sequi similique sit soluta sunt suscipit tempora tenetur totam ullam unde vel veniam veritatis voluptas voluptate voluptatem voluptates voluptatibus voluptatum!",
        img: 'https://picsum.photos/200/300',
        category: "none",
        quantity: 1
    },
];
*/

const Shop: React.FC<PageProps<{ items: any }>> = ({ auth, items }) => {
    
    useEffect(() => {
        console.log(items);
    }, [items]);

    return (
        <BaseLayout user={auth.user}>
            <Head title="Shop" />
            <CssBaseline />
            <Container id='asd' sx={{ marginTop: 2.2 }}>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {items.data.map((item: Items) => (
                        <ShopCard key={item.id} {...item} />
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