const phoneReplacers = {
  withCountryCode: /([\d\*]{2})([\d\*]{2})([\d\*]{4,5})([\d\*]{4})/,
  default: /([\d\*]{2})([\d\*]{4,5})([\d\*]{4})/,
};

export class Formatter {
  static phone(input?: string | undefined) {
    if (!input) return '';

    const cleaned = input.replace(/[^\d\*]/g, '');
    const size = cleaned.length;

    if (size === 13 || size === 12) {
      return cleaned.replace(phoneReplacers.withCountryCode, '$1 ($2) $3-$4');
    }

    if (size === 11 || size === 10) {
      return cleaned.replace(phoneReplacers.default, '($1) $2-$3');
    }

    return cleaned;
  }

  static avatarName(name: string) {
    const firstName = name.split(' ')[0];
    const lastName = name.split(' ').at(-1);
    return `${firstName[0]}${lastName?.[0] || firstName[1]}`;
  }
}
