import { Company } from './Company';

export class IPO{
   ipoId:number;
   closeTime:string;
   openTime:string;
   remarks:string;
   sharePrice:DoubleRange;
   totalShares:number;
   companyId:number;
   company:Company;
   constructor(){
      this.company = new Company();
   }
}