import { PageProps } from '@/types';
import { BaseLayout } from '@/Layouts/BaseLayout';
import { Head } from '@inertiajs/react';

const Home = ({auth}: PageProps) => {
    return (
        <BaseLayout user={auth.user}>
            <Head title='Home' />
                <h1>Home</h1>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet odio eget purus luctus posuere. Quisque vitae pretium nisl. Suspendisse mollis hendrerit felis quis volutpat. Sed hendrerit commodo dolor, vel mattis lacus varius eget. In eu neque pellentesque, pretium urna sit amet, porttitor urna. Donec fermentum elit lectus, vel hendrerit magna fermentum eu. Nullam mi eros, viverra at laoreet a, efficitur sed nisl. Integer sed nibh turpis. Sed a imperdiet augue, at vestibulum enim.</p>

                <p>Curabitur dapibus ligula non ultrices viverra. Sed nec leo sem. Vivamus eget odio sit amet orci finibus imperdiet. Aenean rhoncus vitae lectus eu pharetra. Donec et lacus suscipit, commodo eros eu, commodo nibh. Mauris eget imperdiet lacus, eget elementum risus. Vestibulum eu ligula nec ante gravida laoreet et non massa. Maecenas sed semper magna, tempor aliquam est. Nulla porttitor rhoncus leo vitae tristique. Praesent suscipit venenatis accumsan.</p>

                <p>Aliquam vulputate arcu ac tellus interdum, quis sodales sapien ultrices. Mauris sodales accumsan auctor. Donec ac hendrerit libero, vel tempor dolor. Vivamus quis risus varius, sollicitudin enim non, sagittis ligula. Maecenas mi neque, malesuada pharetra tempus nec, placerat id eros. Aliquam diam metus, dapibus non dui sollicitudin, facilisis auctor dolor. Cras in hendrerit nibh. Nam tincidunt fringilla odio suscipit tincidunt. Donec condimentum, velit sit amet viverra auctor, lectus enim aliquam risus, eu malesuada leo dolor in est. In vel sapien id ipsum aliquam tristique. Suspendisse ultrices nibh egestas, maximus velit ut, condimentum nibh. Nunc vel ultrices arcu, at scelerisque elit.</p>

                <p>Mauris ac dapibus lorem, feugiat feugiat enim. Duis semper, odio eget semper pharetra, eros orci semper urna, ac luctus felis augue auctor ex. Proin eget massa urna. Phasellus ut tortor lacus. Donec condimentum molestie ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla et pharetra dui, vel ullamcorper leo. Curabitur nec lacus ipsum. Praesent eu sagittis tortor. Quisque egestas tempor mi a varius. Nulla varius felis sed quam commodo, pulvinar mollis ipsum pretium.</p>

                <p>Sed posuere, nunc in auctor ultrices, ante diam semper purus, in commodo dui risus ac sapien. Nam elementum dui nec ultricies vestibulum. Vivamus vel quam eros. Ut aliquet pulvinar arcu, scelerisque commodo urna hendrerit vel. In hac habitasse platea dictumst. Donec turpis dui, lobortis at quam sit amet, gravida efficitur nunc. Nunc suscipit sagittis quam, in aliquet sapien rhoncus ac.</p>

                <p>Vestibulum in est imperdiet, dignissim elit in, cursus justo. Nam commodo vulputate luctus. Quisque metus mauris, vulputate id nulla quis, venenatis varius tellus. In quis velit vel ex fermentum eleifend. Donec tristique, lacus at rhoncus euismod, diam odio tincidunt diam, quis bibendum purus turpis eu leo. Pellentesque enim ligula, tempus sit amet auctor non, porta non elit. Etiam nec dapibus lacus.</p>

                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sit amet purus nec est varius suscipit quis id nunc. Duis tortor magna, hendrerit eu diam quis, convallis tincidunt libero. Mauris faucibus metus arcu, at consectetur purus aliquet quis. Curabitur sed laoreet felis. Cras sed neque a ligula viverra vehicula at nec mauris. Quisque convallis tincidunt finibus. Integer sodales ante et arcu venenatis, vel consectetur justo hendrerit. Nulla non est sed dolor consequat accumsan a eget odio. Vestibulum lacus lectus, sagittis sed metus sit amet, congue finibus sapien. In mattis ex turpis, ac sodales ligula tempor vitae. Quisque nec mi massa. Curabitur egestas est arcu, id ultricies libero egestas et. In hac habitasse platea dictumst.</p>

                <p>Pellentesque blandit consequat justo. In hac habitasse platea dictumst. Maecenas velit ligula, hendrerit nec dignissim et, venenatis varius dolor. Integer posuere, est ut laoreet feugiat, arcu sapien gravida tellus, eget eleifend metus libero quis ipsum. Nulla nec dolor bibendum, molestie nisl ut, tincidunt erat. Maecenas porta est vitae elit dapibus sollicitudin. Nunc lectus ipsum, viverra non urna non, cursus placerat libero. Curabitur sapien ex, iaculis porta orci vitae, porttitor suscipit lacus.</p>

                <p>Suspendisse posuere nunc dui. Phasellus commodo et magna et tincidunt. Duis in consequat ante. Cras vitae ipsum velit. Sed odio sem, pretium at ante eget, viverra feugiat mi. Praesent porttitor nunc a diam tristique sollicitudin. Fusce ultrices, sem id eleifend porta, sem nibh rutrum libero, et eleifend felis justo vitae metus. Sed libero lacus, dignissim vitae enim sit amet, scelerisque gravida velit. Morbi pretium lorem id sem rhoncus hendrerit. Nunc accumsan lorem at lacinia sagittis. Donec ornare risus id nisi fringilla, a gravida sem porta. Donec feugiat tellus a volutpat euismod. Aenean tincidunt finibus mattis. Cras faucibus ornare sollicitudin. Donec eu erat non magna pulvinar lacinia. Proin non porttitor tortor, vitae congue sapien.</p>

                <p>Suspendisse sapien dui, tincidunt quis volutpat vitae, dictum eu tortor. Mauris nec diam est. Sed a ligula ut enim vestibulum volutpat. Nulla in diam augue. Phasellus vulputate felis magna, id lacinia ipsum eleifend quis. Nulla interdum sollicitudin urna, a vestibulum tellus tristique eu. Vestibulum vulputate vel metus a dictum. Cras eu faucibus justo, eu ullamcorper lacus. Nulla facilisi. Pellentesque dui nibh, feugiat in nisl eget, iaculis facilisis arcu.</p>
        </BaseLayout>
    );    
};

export default Home;