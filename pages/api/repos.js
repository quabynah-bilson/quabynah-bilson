// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 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;
export default async (req, res) => {
  var response = await fetch(
    "https://api.github.com/users/quabynah-bilson/repos"
  );
  var json = await response.json();
  res.status(200).json([...json]);
};
