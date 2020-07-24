module.exports = {
  // 내가 어떤 파일을 가져와 정의된 것을 테스트 할 때마다 넣어준다.
  setupFilesAfterEnv: [
    'given2/setup',
    'jest-plugin-context/setup',
    './jest.setup',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },

};
