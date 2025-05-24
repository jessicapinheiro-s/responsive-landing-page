import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dgrey: 'var(--dgrey)',
        grey: 'var(--grey)',
        lgrey: 'var(--lfrey)',
        greyClue: 'var(--grey-clue)',
        silver: 'var(--silver)',
        white: 'var(--white)',
        black: 'var(--black)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        info: 'var(--info)',
        shade: {
          1: 'var(--shade1)',
          2: 'var(--shade2)',
          3: 'var(--shade3)',
          4: 'var(--shade4)',
          5: 'var(--shade5)',
        },
        warning: 'var(--warning)',
        error: 'var(--error)',
        success: 'var(--sucess)',
        tint: {
          1: 'var(--tint1)',
          2: 'var(--tint2)',
          3: 'var(--tint3)',
          4: 'var(--tint4)',
          5: 'var(--tint5)',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
