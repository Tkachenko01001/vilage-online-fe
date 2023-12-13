import Link from "next/link";

const Footer = () => {
    return (
        <footer style={{ marginTop: '1000px' }}>FOOTER
            <Link href="/public-contract">
                Публічний договір
            </Link>
        </footer>
    )
};

export default Footer;