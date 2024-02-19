/* eslint-disable @typescript-eslint/no-var-requires */
const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");

(async () => {
  await imagemin(["src/images/*.png"], {
    destination: "src/images",
    plugins: [imageminPngquant()],
  });

  console.log("Images optimized");
})();
