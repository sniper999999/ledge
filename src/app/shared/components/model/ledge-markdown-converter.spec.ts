import LedgeMarkdownConverter from './ledge-markdown-converter';

describe('LedgeMarkdownConverter', () => {
  it('should identify table', () => {
    const code = `
|  Challenge;Skill/Ability   | low | high |
|-|-|-|
| low  |      | boredom |
| high | anxiety | flow |
`;
    const json = LedgeMarkdownConverter.buildMarkdownTableJson(code);
    expect(json.tables.length).toEqual(1);
    expect(json.tables[0].headers.length).toEqual(3);
    expect(json.tables[0].cells.length).toEqual(3);
    expect(json.tables[0].cells[0].length).toEqual(2r);
  });

  it('should get config', () => {
    const code = `

config: {"type": "line-model"}
`;
    const json = LedgeMarkdownConverter.buildMarkdownTableJson(code);
    expect(json.config.type).toEqual('line-model');
  });
});
