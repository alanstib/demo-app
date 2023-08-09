module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-line-length": [2, "always", 250],
    "type-enum": [
      2,
      "always",
      [
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "refactor",
        "revert",
        "style",
        "test",
        "improvement",
      ],
    ],
  },
};
