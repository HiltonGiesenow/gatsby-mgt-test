/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === "build-html") {
	  actions.setWebpackConfig({
		module: {
		  rules: [
			{
				test: /lit-html/,
				use: loaders.null(),
			},
			{
				test: /lit-element/,
				use: loaders.null(),
			},
			// {
			// 	test: /@microsoft\/mgt/,
			// 	use: loaders.null(),
			// },
			// {
			// 	test: /@microsoft\/mgt-react/,
			// 	use: loaders.null(),
			// },
			// {
			// 	test: /@microsoft\/mgt-element/,
			// 	use: loaders.null(),
			// },
			{
				test: /microsoft/,
				use: loaders.null(),
			},
		  ],
		},
	  })
	}
  }