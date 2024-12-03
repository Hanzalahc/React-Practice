export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Hanzalahc");
  const data = await response.json();
  // console.log("Github data", data);
  return data;
};
