import {isDate} from 'lodash';
import 'moment/locale/es';

export default class DateUtilsService {
    static LOCALE = 'es-AR';
    static LOCAL_DATE_FORMAT = {
        timeZone: 'UTC', day: '2-digit', month: '2-digit', year: 'numeric'
    };

    static formatDate(input) {
        if (!input) {
            return '';
        }
        const date = isDate(input) ? input : new Date(input);
        return date.toLocaleDateString(DateUtilsService.LOCALE, DateUtilsService.LOCAL_DATE_FORMAT);
    }
}
