const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click' , function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block'
});
const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click', function(params) {
    const depositAmount = document.getElementById("dollarDeposit").value;
    const depositNumber = parseFloat(depositAmount);

    const currentD = document.getElementById("depositD").innerText;
    const depositParse = parseFloat(currentD);
    const totalDeposit = depositParse + depositNumber;
    document.getElementById("depositD").innerText = totalDeposit;
    const currentBalance = document.getElementById('balanceD').innerText;
    const balanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + balanceNumber  ;
    document.getElementById('balanceD').innerText = totalBalance;
    
    
    document.getElementById("dollarDeposit").value = '';
})
 const withdrawMoney = document.getElementById("withdraw");
 withdrawMoney.addEventListener('click', function (){
   const withdrawAmount = document.getElementById('withdrawInput').value;
   const withdrawNumber = parseFloat(withdrawAmount);
   const spanInner = document.getElementById('withdrawD').innerText;
   const spanNumber = parseFloat(spanInner);
   const totalWithdraw = withdrawNumber + spanNumber;
   document.getElementById('withdrawD').innerText = totalWithdraw;
   const balance = document.getElementById('balanceD').innerText;
   const BalanceNumber = parseFloat(balance);
   const withdrawCalculation = BalanceNumber - withdrawNumber ;
   document.getElementById('balanceD').innerText = withdrawCalculation;
   document.getElementById('withdrawInput').value = '';

 })


