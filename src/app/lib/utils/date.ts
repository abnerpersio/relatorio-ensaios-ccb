import { t } from "i18next";

type DateType = string | Date | null | undefined;

export class DateUtils {
  static formatLongDate(date: DateType) {
    if (!date) return null;
    return Intl.DateTimeFormat("pt-BR", {
      dateStyle: "long",
      timeZone: "UTC",
    }).format(new Date(date).getTime());
  }

  static formatFullDate(date: DateType) {
    if (!date) return null;

    const time = new Date(date).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Sao_Paulo",
    });

    return t("generic.date_time_format", {
      date: this.formatLongDate(date),
      hours: time.slice(0, -3),
    });
  }
}
