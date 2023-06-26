export default cachedEventHandler(
  () =>
    $fetch("https://api.curseforge.com/v1/mods/564236", {
      headers: {
        "x-api-key":
          "$2a$10$bZ3FGFk80i7ndRvc2vf97uBgxzyKk18Klg5tWDFbgpsXDE5aAee4W",
      },
    }),
  {
    swr: true,
    maxAge: 60 * 60, // 1 hour
  }
);
