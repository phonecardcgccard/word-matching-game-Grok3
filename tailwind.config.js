/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // 扫描index.html中的类名
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans SC', 'sans-serif'], // 支持中文字体
      },
    },
  },
  plugins: [],
}
