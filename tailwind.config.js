function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  purge: ["./**/*.{vue, js, jsx}"],
  darkMode: "class", // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        175: "1.75",
      },
      screens: {
        xs: "480px",
        mm: "540px",
        dl: "820px",
        "2xl": "1440px",
      },
      inset: {
        "3/5": "60%",
        "10/12": "83.3333333%",
        "14/27": "49%",
        "6/25": "24%",
        "13/50": "26%",
        "11/40": "27.5%",
        "17/20": "85%",
        "9/10": "90%",
        "19/20": "96%",
        "3/10": "30%",
      },
      width: {
        "10/12": "83.3333333%",
      },
      colors: {
        cyan: withOpacity("--color-cyan"),
        red: withOpacity("--color-red"),
        "dark-violet": withOpacity("--color-dark-violet"),
        gray: withOpacity("--color-gray"),
        "grayish-violet": withOpacity("--color-grayish-violet"),
        "very-dark-blue": withOpacity("--color-very-dark-blue"),
        "very-dark-violet": withOpacity("--color-very-dark-violet"),
      },
    },
  },
  plugins: [],
};
