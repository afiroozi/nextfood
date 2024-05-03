import Link from 'next/link';

export default function MealsDetailPage({ params }) {
    return (
        <>
            <h1>MealsDetailPage</h1>
            <p>
                {params.mealSlug}

            </p>
            <p>
                <Link href="/">Home</Link>
            </p>
        </>

    )
}
