/** @type {import('tailwindcss').Config} */
module.exports = {
//   content: [
//     // ...
//     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
// ],
content: ["./src/**/*.{html,js}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}

