// components/BentoCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface BentoCardProps {
    title: string;
    description: string;
    ctaLabel: string;
    ctaLink: string;
    bgImage: string;
    width?: string;
    align?: 'left' | 'right';
}

const BentoCard: React.FC<BentoCardProps> = ({
    title,
    description,
    ctaLabel,
    ctaLink,
    bgImage,
    width = 'w-full',
    align = 'right',
}) => {
    return (
        <div
            className={`relative rounded-2xl overflow-hidden bg-orange-50 p-6 flex flex-col justify-between ${width}`}
        >
            <div
                className={`absolute inset-0 bg-cover -top-20 bg-${align} opacity-80 bg-no-repeat pointer-events-none`}
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
                <Link
                    to={ctaLink}
                    className="mt-4 self-start inline-flex items-center gap-2 text-sm font-medium bg-transparent border hover:bg-orange-400 px-5 py-2 rounded-full transition cursor-pointer"
                >
                    {ctaLabel}
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default BentoCard;
