import Container from "@/components/Container";

export default function Blog({ params }) {
    const { blogSlug } = params;

    return (
        <Container>
            <h1>Welcome to {blogSlug}</h1>
        </Container>
    );
}
