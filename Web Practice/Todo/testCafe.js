import { Selector } from 'testcafe'

fixture('Testing the ToDo list')
    .page('file:///C:/Users/YAN/Desktop/Todo/index.html');

test("Adding items", async t => {
    await t 
         .typeText('#input', 'Do the laundry')
         .click('#add')
         .typeText('#input', 'Go to the Supermarket')
         .click('#add')
         .typeText('#input', 'Visit the doctor')
         .click('#add')
         .expect(Selector('#ul > li').exists).ok()
})

test("Delete items", async t => {
    await t 
         .typeText('#input', 'Do the laundry')
         .click('#add')
         .click('.close')
         .expect(Selector('#ul > li').count).eql(0);
})    

test("Mark items", async t => {
    await t 
         .typeText('#input', 'Do the laundry')
         .click('#add')
         .click('#ul > li')
         .expect(Selector('#ul > li').checked).notOk();
})    