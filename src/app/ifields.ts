export class Ifields   {
    key?:string  ;
    order:number;
    label?:string;
    value?:string;
    placeHolder?:string;
    controlType?:string;
    type?:string;
    required?:boolean;
    options?:{key:string;value:string}[]


     constructor( fields:{
        key?:string  ;
        order:number;
        label?:string;
        value?:string;
        placeHolder?:string;
        controlType?:string;
        type?:string;
        required?:boolean;
        options?:{key:string;value:string}[]
    })
    {
     this.key = fields.key
     this.label = fields.label ||''
     this.order= fields.order===undefined ? 1 : fields.order
     this.value = fields.value || ''
     this.placeHolder = fields.placeHolder ||''
     this.required = !!fields.required
     this.type = fields.type ||''
     this.controlType = fields.controlType ||''
     this.options = fields.options  ||[]

     }
}
