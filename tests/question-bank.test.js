const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const source = fs.readFileSync(path.join(__dirname, '..', 'dist', 'questions.js'), 'utf8');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context);

const bank = context.window.AK_QUESTION_BANK;
assert.ok(bank, 'O banco deve ser publicado em window.AK_QUESTION_BANK.');
assert.ok(bank.math.length >= 30, 'Matemática deve conter ao menos 30 questões.');
assert.ok(bank.port.length >= 30, 'Português deve conter ao menos 30 questões.');

for (const [subject, questions] of Object.entries(bank)) {
  questions.forEach((question, index) => {
    assert.equal(question.length, 5, `${subject} ${index + 1}: estrutura inválida.`);
    assert.equal(question[2].length, 5, `${subject} ${index + 1}: deve ter cinco alternativas.`);
    assert.ok(Number.isInteger(question[3]) && question[3] >= 0 && question[3] < 5, `${subject} ${index + 1}: gabarito inválido.`);
    assert.ok(question[4].length >= 10, `${subject} ${index + 1}: explicação insuficiente.`);
  });
}

console.log(`Banco validado: ${bank.math.length + bank.port.length} questões (${bank.port.length} Português + ${bank.math.length} Matemática), cinco alternativas e gabaritos válidos.`);
