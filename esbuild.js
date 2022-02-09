const { build } = require('esbuild');

build({
    entryPoints: ["app/javascript/application.js"],
    outdir: "app/assets/builds",
    bundle: true,
    plugins: [],
    watch: {
        onRebuild(error) {
          if (error) console.log('\x1b[31m', 'Build failed')
          else console.log('\x1b[32m', 'Build succeeded')
        },
      },
    loader: {".js": "jsx"}
})
.catch(() => process.exit(1));
