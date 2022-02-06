// function build(args) {
//     require('esbuild')
//       .build({
//         entryPoints: ["app/javascript/application.js"],
//         outdir: "app/assets/builds",
//         bundle: true,
//         plugins: [],
//         watch: true,
//         loader: {".js": "jsx"},
//       })
//       .catch(() => process.exit(1))
//   }
//   build(process.argv.slice(2))



const { build } = require('esbuild')

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