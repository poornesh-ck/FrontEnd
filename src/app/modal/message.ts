export class MessageUtil{
    constructor( public mobileno:number, public date:Date,
       public time:string,
       public messageBody:string,
       
        public messageSent:boolean,
        public recieverno:number )
    {

    }
}