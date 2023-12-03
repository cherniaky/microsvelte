import * as fs from 'fs';
import * as acorn from 'acorn';
import * as periscopic from 'periscopic';
import * as estreewalker from 'estree-walker';
import * as escodegen from 'escodegen';

const content = fs.readFileSync('./app.svelte', 'utf-8');
const ast = parse(content);
const analysis = analyse(ast);
const js = generate(ast, analysis);

fs.writeFileSync('./app.js', js, 'utf-8');

function parse(content) {
    let i = 0;
    const ast = {};
    ast.html = parseFragments(() => i < content.length);

    return ast;

    function parseFragments(condition) {
        const fragments = [];
        while (condition()) {
            const fragment = parseFragment();
            if (fragment) {
                fragments.push(fragment);
            }
        }
        return fragments;
    }

    function parseFragment() {
        return parseScript() ?? parseElement() ?? parseExpression() ?? parseText();
    }

    function parseScript() {
        if (match('<script>')) {
            eat('<script>');
            const startIndex = i;
            const endIndex = content.indexOf('</script>', i);
            const code = content.slice(startIndex, endIndex);
            ast.script = acorn.parse(code, { ecmaVersion: 2022 });
            i = endIndex;
            eat('</script>');
        }
    }
    function parseElement() {
        if (match('<')) {
            eat('<');
            const tagName = readWhileMatching(/[a-z]/);
            const attributes = parseAttributeList();
            eat('>');
            const endTag = `</${tagName}>`;

            const element = {
                type: 'Element',
                name: tagName,
                attributes,
                children: parseFragments(() => !match(endTag)),
            };
            eat(endTag);
            return element;
        }
    }
    function parseAttributeList() {
        const attributes = [];
        skipWhitespace();
        while (!match('>')) {
            attributes.push(parseAttribute());
            skipWhitespace();
        }
        return attributes;
    }
    function parseAttribute() {
        const name = readWhileMatching(/[^=]/);
        eat('={');
        const value = parseJavaScript();
        eat('}');
        return {
            type: 'Attribute',
            name,
            value,
        };
    }
    function parseExpression() {
        if (match('{')) {
            eat('{');
            const expression = parseJavaScript();
            eat('}');
            return {
                type: 'Expression',
                expression,
            };
        }
    }
    function parseText() {
        const text = readWhileMatching(/[^<{]/);
        if (text.trim() !== '') {
            return {
                type: 'Text',
                value: text,
            };
        }
    }
    function parseJavaScript() {
        const js = acorn.parseExpressionAt(content, i, { ecmaVersion: 2022 });
        i = js.end;
        return js;
    }

    // return `true` or `false` if the character pointing by `i` matches the string
    function match(str) {
        return content.slice(i, i + str.length) === str;
    }

    function eat(str) {
        if (match(str)) {
            i += str.length;
        } else {
            throw new Error(`Parse error: expecting "${str}"`);
        }
    }

    function readWhileMatching(regex) {
        let startIndex = i;
        while (regex.test(content[i])) {
            i++;
        }
        return content.slice(startIndex, i);
    }

    function skipWhitespace() {
        readWhileMatching(/[\s\n]/);
    }
}
