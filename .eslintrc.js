module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: ['error', 2], // 기본 들여쓰기는 2칸
    'no-trailing-spaces': 'error', // 줄 끝에서 후행 공백을 허용하지 않음.
    curly: 'error', // 블록 문을 중괄호로 묶어 버그를 방지하고 코드 선명도를 높인다.
    'brace-style': 'error', // 블록에 일관된 스타일 적용.
    'no-multi-spaces': 'error', // 여러 공백을 허용하지 않음.
    'space-infix-ops': 'error', // 삽입 연산자 주위에 공백이 있는지 확인.
    'space-unary-ops': 'error', // 단항 연산자 뒤 공백에 대한 일관성을 강제함.
    'no-whitespace-before-property': 'error', // 객체와 속성이 별도의 줄에있을 때 공백을 허용
    'func-call-spacing': 'error', // 함수 이름과 이를 호출하는 여는 괄호 사이에 공백을 요구하거나 허용하지 않습니다.
    'space-before-blocks': 'error', // 블록 전에 간격의 일관성을 강제합니다.
    'keyword-spacing': ['error', { before: true, after: true }], // 키워드 앞, 뒤에 공백이 하나 이상 있다.
    'comma-spacing': ['error', { before: false, after: true }], // 쉼표 앞에 공백을 허용하지 않고 뒤에 허용한다.
    'comma-style': ['error', 'last'], // 배열 요소, 객체 속성 또는 변수 선언과 같은 줄 뒤에 쉼표 표시.
    'comma-dangle': ['error', 'always-multiline'], // multiline인 경우에 한해 후행 쉼표를 표시한다.
    'space-in-parens': ['error', 'never'], // '(' 의 오른쪽, ')'의 왼쪽에 공백을 허용하지 않음. 다른 괄호도 포함.
    'block-spacing': 'error', // 블록을 연 후 및 블록을 닫기 전 (블록 간격)에서 블록 내부의 공간을 허용 또는 금지
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { mode: 'strict' }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'react/prop-types': 'off',
    'linebreak-style': 'off',
  },
};
