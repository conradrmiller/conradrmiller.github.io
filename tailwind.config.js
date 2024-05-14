/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        backgroundColor: (theme) => ({
            ...theme('colors'),
            lime: '#6cae30',
        }),
        textColor: (theme) => ({
            ...theme('colors'),
            lime: '#6cae30',
        }),
    },
    plugins: [],
};
