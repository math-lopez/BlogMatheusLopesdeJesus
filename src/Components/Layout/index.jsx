import Header from "../Header";
import Footer from "..//Footer";

export default function Layout({ children }) {
    return (
        <>
            <Header title="Math Blog" />
            <main className="container">
                {children}
            </main>
            <Footer />
        </>
    );
}