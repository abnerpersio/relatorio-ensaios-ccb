import { t } from 'i18next';

const WEEK_DAYS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

type DateType = string | Date;

export class DateUtils {
  static getWeekDay(date: DateType) {
    const index = new Date(date).getUTCDay();
    return WEEK_DAYS[index];
  }

  static getDay(date: DateType) {
    return new Date(date).getUTCDate();
  }

  static getMonth(date: DateType) {
    const index = new Date(date).getUTCMonth();
    return MONTHS[index];
  }

  static getYear(date: DateType) {
    return new Date(date).getUTCFullYear();
  }

  static formatLongDate(date: DateType) {
    return Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'long',
    }).format(new Date(date).getTime());
  }

  static formatFullDate(date: DateType) {
    const time = new Date(date).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Sao_Paulo',
    });

    return t('generic.date_time_format', {
      date: this.formatLongDate(date),
      hours: time.slice(0, -3),
    });
  }

  static diffInMs(compareDate: DateType) {
    const now = Date.now();
    const compareTime = new Date(compareDate).getTime();
    return now - compareTime;
  }
}
