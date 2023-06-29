import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://34.117.67.205/graphql',
  documents: ['./src/modules/usersList/queries/**/*.{ts,tsx}'],
  ignoreNoDocuments: true,
  generates: {
    './src/helpers/gql/': {
      preset: 'client',
    },
  },
}

export default config
