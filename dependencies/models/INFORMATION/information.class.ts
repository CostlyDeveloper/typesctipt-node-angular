import { INFORMATIONInterface } from './information.interface';
import { LayerValidation } from '../../layers/validation/validation';


export namespace INFORMATIONClass {
    
    export class Email implements INFORMATIONInterface.IEmail {
        
        // region *** Properties ***
        public Email: string   = null;
        public Message: string = null;
        // endregion // Properties //
        
        // region *** Layers ***
        private validationField: LayerValidation.Field = new LayerValidation.Field();
        private validationObject: LayerValidation.ObjectValidation = new LayerValidation.ObjectValidation();
        // endregion // Layers //
        
        
        isValid(): boolean {
            return this.validationObject.invalidMembersFinder(this, this.Email, this.Message).length === 0;
        }
        
        getInvalidFields(): string [] {
            return this.validationObject.invalidMembersFinder(this, this.Email, this.Message);
        }
        
        valueSetter(_Data: INFORMATIONInterface.IEmail): this {
            this.Email   = this.validationField.emailValidation(_Data.Email) ? _Data.Email : this.Email;
            this.Message = this.validationField.messageValidation(_Data.Message) ? _Data.Message : this.Message;
            return this;
        }
        
    } // IEmail
    
}
