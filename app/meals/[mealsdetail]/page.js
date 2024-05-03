import React from 'react';
import Link from 'next/link';

export default function MealsDetailPage({ params }) {
    return (
        <>
            <h1>MealsDetailPage</h1>
            <p>
                {params.mealsdetail}

            </p>
            <p>
                <Link href="/">Home</Link>
            </p>
        </>

    )
}
