const eslintConfig = [
  ...(await import("eslint-config-next/core-web-vitals")).default,
  ...(await import("eslint-config-next/typescript")).default,
  {
    ignores: ["NOTES.mdx", "WARP.md"],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default eslintConfig;
