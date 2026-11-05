const tsilTmLanguage = {
  $schema:
    "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
  name: "ціль",
  patterns: [
    {
      include: "#keywords",
    },
    {
      include: "#strings",
    },
    {
      include: "#constants",
    },
    {
      include: "#comments",
    },
    {
      include: "#types",
    },
    {
      include: "#attributes",
    },
  ],
  repository: {
    keywords: {
      patterns: [
        {
          name: "keyword.control.tsil",
          match:
            "\\b(дія|структура|або|і|пусто|стрибнути|вабо|не|так|ні|стала|якщо|поки|взяти означення|взяти біб|взяти|як|вернути|інакше|зовнішня|внутрішня|простір|синонім|змінна|ціль)\\b",
        },
      ],
    },
    strings: {
      name: "string.quoted.double.tsil",
      begin: '"',
      end: '"',
      patterns: [
        {
          name: "constant.character.escape.tsil",
          match: "\\\\.",
        },
      ],
    },
    constants: {
      patterns: [
        {
          name: "constant.numeric.tsil",
          match: "\\b\\d+(\\.\\d+)?\\b",
        },
      ],
    },
    types: {
      patterns: [
        {
          name: "support.type.primitive.tsil",
          match:
            "\\b(кд|ц8|ц16|ц32|ц64|ціле|п8|п16|п32|п64|природне|ю8|вміст|логічне|адреса|р32|р64|ніщо)\\b",
        },
      ],
    },
    comments: {
      patterns: [
        {
          name: "comment.line.tsil",
          match: "//.*$",
        },
        {
          name: "comment.block.tsil",
          begin: "/\\*",
          end: "\\*/",
        },
      ],
    },
    attributes: {
      name: "entity.other.attribute-name.tsil",
      match: "\\@[a-zA-Zа-яА-ЯіІїЇєЄґҐ_][a-zA-Zа-яА-ЯіІїЇєЄґҐ0-9_]*",
    },
  },
  scopeName: "source.ціль",
};

const mavkaTmLanguage = {
  $schema:
    "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
  name: "мавка",
  patterns: [
    {
      include: "#keywords",
    },
    {
      include: "#strings",
    },
    {
      include: "#constants",
    },
    {
      include: "#comments",
    },
  ],
  repository: {
    keywords: {
      patterns: [
        {
          name: "keyword.control.mavka",
          match:
            "\\b(дія|клас|перебрати|передати|перестрибнути|перервати|якщо|чекати|взяти модуль|взяти пак|взяти біб|взяти|дати|як|є|вернути|тривала|і|або|спробувати|зловити|інакше|впасти|поки|модуль|кінець|не|я|дійсне|недійсне|взаємо)\\b",
        },
      ],
    },
    strings: {
      name: "string.quoted.double.mavka",
      begin: '"',
      end: '"',
      patterns: [
        {
          name: "constant.character.escape.mavka",
          match: "\\\\.",
        },
      ],
    },
    constants: {
      patterns: [
        {
          name: "constant.numeric.mavka",
          match: "\\b\\d+(\\.\\d+)?\\b",
        },
      ],
    },
    comments: {
      patterns: [
        {
          name: "comment.line.mavka",
          match: ";;.*$",
        },
        {
          name: "comment.block.mavka",
          begin: ";\\*.*",
          end: "\\*;",
        },
      ],
    },
  },
  scopeName: "source.мавка",
};

global.extendAsync = async () => {
  let highlighter = await global.shikiCreateHighlighter({
    themes: ["github-dark"],
    langs: ["cpp", "shell", tsilTmLanguage, mavkaTmLanguage],
  });
  md.options.highlight = (str, lang) => {
    const wrap = (content) => {
      return `<pre><div class="XDocsCodeWrapper">${content}</div></pre>`;
    };
    const code = highlighter.codeToHtml(str, {
      theme: "github-dark",
      lang: lang,
      transformers: [
        {
          code(node) {
            this.addClassToHast(node, "shikicode");
          },
        },
      ],
    });
    return wrap(code);
  };
};
