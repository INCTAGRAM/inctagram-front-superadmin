import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://34.118.88.29:7000/graphql',
  documents: ['./src/modules/usersList/queries/**/*.{ts,tsx}'],
  ignoreNoDocuments: true,
  generates: {
    './src/helpers/gql/': {
      preset: 'client',
    },
  },
}

export default config
