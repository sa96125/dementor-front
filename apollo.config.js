module.exports = {
  client: {
    includes: ["./src/**/*.tsx"],
    service: {
      name: "de-mentor-backend",
      tagName: "gql",
      url: "https://localhost:4000/graphql",
      // optional headers
      headers: {
        authorization: "Bearer lkjfalkfjadkfjeopknavadf",
      },
      // optional disable SSL validation check
      skipSSLValidation: true,
    },
  },
};
