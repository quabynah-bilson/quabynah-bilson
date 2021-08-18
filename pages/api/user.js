// 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;

export default async (req, res) => {
  var response = await fetch("https://api.github.com/users/quabynah-bilson");
  var json = await response.json();
  res.status(200).json({
    avatar: json.avatar_url,
    username: json.login,
    url: json.url,
    followers: json.followers,
    following: json.following,
    repos: json.public_repos,
  });
};
