import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-billsummary',
  templateUrl: './billsummary.component.html',
  styleUrls: ['./billsummary.component.css']
})
export class BillsummaryComponent implements OnInit{

  constructor(private userve:UserServiceService,public router:Router){
  
    console.log(window.paypal)
    this.user=userve.getFromSession()
    this.mobNo=this.user.mobileno
    this.paymentStatus=this.user.paymentstatus
    userve.getBillDetails(this.mobNo).subscribe((data) => {
      this.bill = data;
      console.log(this.bill)
      console.log(this.user)
  
    });
    userve.getbillHistory(this.mobNo).subscribe((data) =>{
      this.billhistory=data
      console.log(this.billhistory); 


    })
    this.invoiceNo=this.generateBillNumber(this.todaydate)
    console.log(this.bill)
    if(this.paymentStatus=='paid'){
  
      this.value=true
      console.log(this.value)
    }else{
      this.value=false
    }
  
   }
  //  generating invoice no
  generateBillNumber(billDate: Date): string {
    // Generate 3 random alphabets
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomAlphabets = '';
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * alphabets.length);
      randomAlphabets += alphabets.charAt(randomIndex);
    }

    // Format the bill date in YYYYMMDD format
    const year = billDate.getFullYear();
    const month = (billDate.getMonth() + 1).toString().padStart(2, '0');
    const day = billDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}${month}${day}`;

    // Generate a random 10-digit number
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();

    // Combine alphabets, date, and random number to create the 16-digit bill number
    const billNumber = randomAlphabets + formattedDate + randomNumber;

    return billNumber;
  }




   @ViewChild('paymentRef',{static:true}) paymentRef!:ElementRef;


  ngOnInit(): void {
    if(this.paymentRef){
      window.paypal.Buttons(
        {
     
                 style:{
     
                   layout: 'horizontal',
     
                   color: 'blue',
     
                   shape: 'rect',
     
                   label: 'paypal',
     
                  
     
                 },
     
                
     
                 createOrder:(data:any, actions:any)=>{
     
                   return actions.order.create({
     
                     purchase_units:[
     
                       {
     
                         amount:{
     
                           value: (this.bill.totalamount/83.19).toFixed(2),
     
                           currency_code: 'USD'
     
                         }
     
                       }
     
                     ]
     
                   })
     
                 },
     
                 onApprove:(data:any, actions:any)=>{
     
                   return actions.order.capture().then((details:any)=>{
                    console.log(details);
                    
     
                     if(details.status === 'COMPLETED'){
                      this.payNow()
     
      
     
                      //  this.uservice.payBill(this.receivedData.number).subscribe();
     
                      //  this.uservice.billHistory(this.receivedBill).subscribe();
     
                       Swal.fire("Payment successfull",'Transaction ID: '+details.id,'success')
     
                     }
                   })
                 },
                 onError:(error:any)=>{
                   console.log(error);
                 }
     
               }).render(this.paymentRef.nativeElement)
      
    }
    // throw new Error('Method not implemented.');
  }




   user:any
   mobNo:number
   bill:any
   todaydate=new Date()
   paymentStatus:any
   value:any
   billhistory:any
   invoiceNo:any

   payNow(){
    this.userve.updatePayment(this.mobNo).subscribe()
    Swal.fire(
      'Payment Sucess!',
      // 'yeahhhhhh!',
      'success'
    ).then(()=>{this.router.navigate(["/home"])})
  
   }


}
