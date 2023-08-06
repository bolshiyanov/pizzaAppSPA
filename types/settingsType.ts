export interface SettingsInterface {
  name: String;
  type: String;
  area: String;
  provincia: String;
  country: String;
  titleSeo: String;
  descriotionsSeo: String;
  keyPhrases: String;
  timeZone: String;
  descritionsText: String;
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
