export namespace LayerValidation {
    
    export class Field {
        
        EmailRegex: RegExp       = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        PasswordRegexp: RegExp   = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        LettersRegexp: RegExp    = /^[A-Za-z]+$/;
        NumberRegexp: RegExp     = /^[0-9]+$/;
        PercentageRegexp: RegExp = /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/;
        
        constructor() {
        }
        
        passwordValidation(_Input: string): boolean {
            return this.PasswordRegexp.test(_Input);
        }
        
        lettersValidation(_Input: string): boolean {
            return this.LettersRegexp.test(_Input);
        }
        
        numbersValidation(_Input: number): boolean {
            return this.LettersRegexp.test(String(_Input));
        }
        
        percentageValidation(_Input: number): boolean {
            return this.PercentageRegexp.test(String(_Input));
        }
        
        emailValidation(_Input: string): boolean {
            return this.EmailRegex.test(String(_Input));
        }
        
        messageValidation(_Input: string): boolean {
            let lassie = false;
            if (typeof _Input === 'string') {
                lassie = _Input.length > 30;
            }
            return lassie;
        }
        
        
    } // class Field
    
    export class ObjectValidation {
        
        invalidMembersFinder(_Object: any, ..._PropertiesForValidation: any): string[] {
            const invalidPropertyList: string[] = [];
            Object.keys(_Object).forEach(key => {
                if (_Object[key] === null) {
                    if (_PropertiesForValidation.includes(_Object[key])) {
                        invalidPropertyList.push(key);
                    }
                }
            });
            return invalidPropertyList;
        }
       
        
    } // class Object
    
}



