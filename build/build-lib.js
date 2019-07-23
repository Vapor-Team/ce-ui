/**
 * Build npm lib
 */
const exec = require("shelljs.exec")
const signale = require("signale")

const { Signale } = signale
const tasks = [
	"lint",
	"clean",
	"build:entry",
	"lib",
	"build:style",
	"build:locale"
]

tasks.forEach(task => {
	signale.start(task)
	const interactive = new Signale({
		interactive: true
	})
	interactive.pending(task)
	exec(`npm run ${task} --silent`, { silent: true })
	interactive.success(task)
})
