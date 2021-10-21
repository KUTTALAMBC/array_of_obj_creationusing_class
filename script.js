class Bank{
  constructor (name,acc_type,acc_number,balance){
    this.name = name;
    this.acc_type =acc_type;
    this.acc_number =acc_number;
    this.balance =balance;
  }
}

const KUTTALAM=new Bank("KUTTALAM","CURRENT",1234,100_00_00_000);
console.log(KUTTALAM);
const VAIRAM=new Bank("VAIRAM","SAVING",12345,200_00_00_000);
console.log(VAIRAM);
const DEVI=new Bank("DEVI","SAVING",12348,780_0_00_000);
console.log(DEVI);
function getbalance() {
  return "your balance is ₹ "+this.balance;
}
console.log(KUTTALAM.getbalance());