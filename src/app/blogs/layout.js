import Container from "@/components/Container";

export default function BlogLayout({ children }) {
    return (
        <Container>
            <h1>This is a blog</h1>
            {children}
        </Container>
    );
}
