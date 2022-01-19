const chalk = require('chalk')
const { yellow } = chalk

// Test current package management tools

if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    yellow(
      `[monorepo-tools]:Testing the current unused PNPM as a package management tool.\n` +
        `[monorepo-tools]:Please install PNPM as a package manager.`
    )
  )
  process.exit(1)
}

console.warn(
  yellow(
    `[monorepo-tools]:Testing the current used PNPM as a package management tool. continue...`
  )
)
