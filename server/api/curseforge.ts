export default cachedEventHandler(
  () =>
    $fetch("https://api.curseforge.com/v1/mods/564236", {
      headers: {
        "x-api-key": process.env.CURSE_KEY || "",
      },
    }),
  {
    swr: true,
    maxAge: 60 * 60, // 1 hour
  }
);
