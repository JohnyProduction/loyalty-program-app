import { TopBar } from '@/components/common/top-bar';
import { Footer } from '@/components/common/footer';
import { WelcomeFragment } from '@/app/welcome-fragment';
import { BrowseProducts } from '@/app/browse-products';

export default function MainPage() {
    return (
        <main>
            <div>
                <TopBar />
                <WelcomeFragment />
            </div>
            <BrowseProducts />
            <>TODO LINE</>
            <div>TODO 3 Products</div>
            <Footer />
        </main>
    );
}
