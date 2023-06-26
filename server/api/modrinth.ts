export default cachedEventHandler(
  () => $fetch("https://api.modrinth.com/v2/project/galacticraft-legacy"),
  {
    swr: true,
    maxAge: 60 * 60, // 1 hour
  }
);
