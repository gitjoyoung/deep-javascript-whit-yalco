function recommendForYou (me) {
  const products = [
    { sex: 'F', size: 'M' },
    { sex: 'M', size: 'L' },
    { sex: 'F', size: 'M' },
    { sex: 'U', size: 'S' },
    { sex: 'M', size: 'L' },
    { sex: 'F', size: 'S' },
  ];

  products
  .map((itm, idx) => {
    return { ...itm, idx } 
  })

  // ⚠️ 화살표 함수 대신 function 선언 함수 사용 주목
  .filter(function ({sex, size}) {
    console.log(['U' , this.sex])

    return ['U', this.sex].includes(sex)
    && size === this.size
  }, me) // 💡 thisArg

  .forEach(function ({idx}) {
    console.log(`${this.name}님, ${++idx}번은 어떠세요?`);
  }, me); // 💡 thisArg
}

const peter = {
  name: '피터',
  sex: 'M',
  size: 'L'
};

const jane = {
  name: '제인',
  sex: 'F',
  size: 'S'
};

recommendForYou(peter);
recommendForYou(jane);