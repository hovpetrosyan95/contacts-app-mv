import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

interface SearchInputProps {
    placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = "Search..." }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
        navigate({
            to: `?search=${e.target.value}`
        });
    };

    const handleClear = () => {
        setSearchQuery('');
        navigate({ to: '.' })
    };

    return (
        <div className="relative max-w-xs w-full">
            <input
                type="text"
                value={searchQuery}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full pl-10 pr-4 py-2 text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 4a7 7 0 110 14 7 7 0 010-14zM16 16l3 3"
                />
            </svg>
            {searchQuery && (
                <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={handleClear}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            )}
        </div>
    );
};

export default SearchInput;
