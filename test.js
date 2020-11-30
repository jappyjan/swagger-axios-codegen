const {codegen} = require('./dist/index');

const docUrl = 'http://0.0.0.0:8083/docs/v3/swagger.json';

(async () => {
  await codegen({
    methodNameMode: 'shortOperationId',
    remoteUrl: docUrl,
    useStaticMethod: false,
    useHeaderParameters: true,
    outputDir: 'api-client',
    fileName: 'services.ts',
    modelMode: 'class',
    useClassTransformer: true,
  });
})();