import {StyleBlockquote, StyleH3} from '@/components/typography';
import BannerArea from "@/pages/home/banner-area.tsx";
import CardArea from "@/pages/home/card-area.tsx";
import {Separator} from "@/components/ui/separator.tsx";

function Home() {
    return (
        <>
            <main id="containers">
                <StyleH3 className="mb-4">Hello, $user</StyleH3>
                <BannerArea />
                <CardArea />
                <Separator className="my-12"/>
                <StyleBlockquote className="mb-20">MuseDash Loader Companion $version</StyleBlockquote>
            </main>
        </>
    );
}

export default Home;
