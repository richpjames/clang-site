import PercyScript from "@percy/script";

PercyScript.run(async (page, percySnapshot) => {
  await page.goto("http://localhost:3000/", {
    waitUntil: "networkidle0",
  });
  await percySnapshot("homepage");
});
