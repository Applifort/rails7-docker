const { build } = require('esbuild');

build({
    entryPoints: ["app/javascript/application.js"],
    outdir: "app/assets/builds",
    bundle: true,
    plugins: [],
    watch: {
        onRebuild(error, result) {
          if (error) console.error('watch build failed')
          else console.log('watch build succeeded')
        },
      },
    loader: {".js": "jsx"}
})
.catch(() => process.exit(1));
