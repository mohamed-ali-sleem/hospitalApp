import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'creditCardMask'
})
export class CreditCardMaskPipe implements PipeTransform {
    transform(plainCreditCard: string): string { 
        let creditCard = plainCreditCard.match(/.{1,4}/g) || [];
        return creditCard.join(' ');
    }
}