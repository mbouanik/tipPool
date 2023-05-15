beforeAll(()=>{
    billAmtInput.value = 150;
    tipAmtInput.value = 10;
    submitPaymentInfo()
})

describe("Input payment info(with setup and tear-down)", function() {
    it('Shoul return the sum', () => {
        expect(allPayments.payment1.billAmt).toEqual('150');
        expect(allPayments.payment1.tipAmt).toEqual('10');
        expect(allPayments.payment1.tipPercent).toEqual(7);
      
    })
});

describe("Shift summary tear-down)", function() {
    it('Shoul return the sum', () => {

        billAmtInput.value = 150;
        tipAmtInput.value = 10;
        submitPaymentInfo()
        const summaryTable = document.querySelectorAll('#summaryTable tbody tr td')
        const [billTot, tipTot, tipAvg ] = summaryTable


        expect(billTot.innerText).toEqual('$300');
        expect(tipTot.innerText).toEqual('$20');
        expect(tipAvg.innerText).toEqual('7%');

    })
});

afterAll(() => {
    allPayments = {}
    const summaryTable = document.querySelectorAll('#summaryTable tbody tr td')
    for (td of summaryTable){
        td.innerText = ''
    }
    
    const pay = document.querySelectorAll('#paymentTable tbody tr')
    
    for (tr of pay){
        tr.remove()
    }
   
 
})