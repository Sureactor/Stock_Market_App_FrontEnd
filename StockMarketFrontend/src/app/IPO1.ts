import {Company} from './Company';
export class IPO{
    public ipoId : number ;
        public closeTime : string;
         public openTime : string;
         public remarks : string;
         public sharePrice : DoubleRange;
         public totalShares: number;
         public company : Company;
         constructor(){
            this.company = new Company();
         }
}