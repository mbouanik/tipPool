describe('testing the tip percentage', () => {
    it('shoul return the tip percentage', () => {
        const tip = calculateTipPercent(150, 15)
        expect(tip).toEqual(10)
    })
})

describe('Test the remove button', () => {

    it ('should create a new row' , () => {
        let newTr = document.createElement('tr')

        appendTd(newTr, 'hello')

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerText).toEqual('hello');
    })
    it('should append a button', () => {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerText).toEqual('X');
    })
    
})

