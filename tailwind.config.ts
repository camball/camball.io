// from https://github.com/tailwindlabs/tailwindcss-typography/blob/7b43b3b33bb74c57a68852330105bb34d11a806a/src/styles.js#L3C1-L7C25
const round = (num: number) =>
    num
        .toFixed(7)
        .replace(/(\.[0-9]+?)0+$/, "$1")
        .replace(/\.0$/, "");

/**
 * Convert px to rem. 16px <=> 1rem
 */
const rem = (px: number) => `${round(px / 16)}rem`;

const BODY_FONT_SIZE_PX = 17; // default 16

export default {
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        p: {
                            fontSize: rem(BODY_FONT_SIZE_PX),
                        },
                        li: {
                            fontSize: rem(BODY_FONT_SIZE_PX),
                        },
                        h2: {
                            fontSize: rem(25), // default 24
                            fontWeight: "500", // default '600'
                        },
                        h3: {
                            fontSize: rem(21), // default 20
                            fontWeight: "500", // default '600'
                        },
                        "code::before": {
                            content: '""', // override default of '"`"'
                        },
                        "code::after": {
                            content: '""', // override default of '"`"'
                        },
                    },
                },
            },
        },
    },
};
