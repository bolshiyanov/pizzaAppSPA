export interface SettingsInterface {
  name: String;
  type: String;
  area: String;
  provincia: String;
  country: String;
  timeZone: String;
  descritions: String;
  logo: String;
  backGroundLogo: String;
  geoParking: String;
  geoLocal: String;
  reservation: Boolean;
  mail: String;
  phone: String;
  linkReview: String;
  linkTripAdvisor: String;
  linkInstagram: String;
  linkFacebook: String;
  linkWhatsapp: String;
  linkTelegram: String;
  youSelfLink:  string[];
}

export interface CurrencyInterface {
  curency: string;
}
