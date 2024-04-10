/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'desktop-shop-header': "url('/desktop-shop-header.jpg')",
                'mobile-shop-header': "url('mobile-shop-header.jpg')"
            },
            screens: {
                '2xl': '1440px'

            }
        },
    },
    plugins: [],
}
