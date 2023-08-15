const { generateTemplateFiles } = require("generate-template-files")
const config = require("../../package.json")

generateTemplateFiles([
	{
		option: "create project element",
		defaultCase: "(nocase)",
		entry: {
			folderPath: "./src/assets/project-template.md",
		},
		stringReplacers: [
			{ question: "Insert project title", slot: "{{title}}" },
			{ question: "Insert project artist", slot: "{{artist}}" },
			{ question: "Insert project description", slot: "{{description}}" },
		],
		output: {
			path: "./src/projects/{{title}}(kebabCase).md",
			pathAndFileNameDefaultCase: "(kebabCase)",
			overwrite: true,
		},
		onComplete: (results) => {
			console.log(`results`, results)
		},
	},
])
