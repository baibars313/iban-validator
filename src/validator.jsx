

export const Validate=(input)=>{
  const CODE_LENGTHS = {
      AD: 24, AE: 23, AF: 24, AG: 28, AL: 28, AM: 21, AO: 25, AR: 22, AT: 20, AU: 21,
      AZ: 28, BA: 20, BB: 28, BD: 27, BE: 16, BF: 28, BG: 22, BH: 22, BI: 16, BJ: 28,
      BL: 27, BM: 27, BN: 19, BO: 25, BR: 29, BS: 28, BT: 27, BW: 28, BY: 28, BZ: 24,
      CA: 24, CD: 24, CF: 27, CG: 27, CH: 21, CI: 28, CL: 27, CM: 27, CN: 21, CO: 28,
      CR: 22, CU: 28, CV: 25, CY: 28, CZ: 24, DE: 22, DJ: 27, DK: 18, DM: 28, DO: 28,
      DZ: 24, EC: 28, EE: 20, EG: 29, ER: 27, ES: 24, ET: 27, FI: 18, FJ: 21, FK: 22,
      FM: 22, FO: 18, FR: 27, GA: 27, GB: 22, GD: 28, GE: 22, GH: 27, GI: 23, GL: 18,
      GM: 25, GN: 28, GQ: 27, GR: 27, GT: 28, GW: 25, GY: 28, HK: 19, HN: 28, HR: 21,
      HT: 28, HU: 28, ID: 29, IE: 22, IL: 23, IN: 22, IQ: 23, IR: 26, IS: 26, IT: 27,
      JM: 24, JO: 30, JP: 23, KE: 29, KG: 20, KH: 29, KI: 26, KM: 27, KN: 28, KP: 24,
      KR: 23, KW: 30, KY: 28, KZ: 20, LA: 27, LB: 28, LC: 32, LI: 21, LK: 22, LR: 28,
      LS: 28, LT: 20, LU: 20, LV: 21, LY: 25, MA: 28, MC: 27, MD: 24, ME: 22, MG: 27,
      MH: 21, MK: 19, ML: 28, MM: 25, MN: 24, MO: 23, MR: 27, MT: 31, MU: 30, MV: 26,
      MW: 29, MX: 28, MY: 24, MZ: 25, NA: 28, NE: 28, NG: 24, NI: 28, NL: 18, NO: 15,
      NP: 23, NR: 25, NZ: 23, OM: 30, PA: 28, PE: 27, PG: 28, PH: 24, PK: 24, PL: 28,
      PS: 29, PT: 25, PW: 21, PY: 27, QA: 29, RO: 24, RS: 22, RU: 22, RW: 29, SA: 24,
      SB: 21, SC: 31, SD: 27, SE: 24, SG: 19, SH: 27, SI: 19, SK: 24, SL: 28, SM: 27,
      SN: 28, SO: 27, SR: 28, SS: 27, ST: 25, SV: 28, SY: 26, SZ: 28, TD: 27, TG: 28,
      TH: 25, TJ: 28, TK: 26, TL: 23, TM: 21, TN: 24, TO: 26, TR: 26, TT: 28, TV: 26,
      TW: 26, TZ: 27, UA: 29, UG: 29, US: 29, UY: 29, UZ: 24, VA: 22, VC: 32, VE: 29,
      VN: 29, VU: 23, WS: 29, XK: 20, YE: 30, ZA: 24, ZM: 29, ZW: 24
  };

  const iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''); // keep only alphanumeric characters

  const code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/); // match and capture (1) the country code, (2) the check digits, and (3) the rest

  if (!code || iban.length !== CODE_LENGTHS[code[1]]) {
      return false; // check syntax and length
  }

  const digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, letter => letter.charCodeAt(0) - 55); // rearrange country code and check digits, and convert chars to ints

  return mod97(digits) === 1; // final check
}

function mod97(string) {
  let checksum = string.slice(0, 2);
  let fragment;

  for (let offset = 2; offset < string.length; offset += 7) {
      fragment = `${checksum}${string.substring(offset, offset + 7)}`;
      checksum = parseInt(fragment, 10) % 97;
  }

  return checksum;
}
