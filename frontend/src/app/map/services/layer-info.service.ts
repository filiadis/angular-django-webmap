import { Injectable } from '@angular/core';
interface LayerProperties {
  [key: string]: {
    name: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class LayerInfoService {
  layerProps: LayerProperties = {
    perifereies: { name: 'Περιφέρειες' },
    nomoi: { name: 'Περιφερειακές Ενότητες' },
    dimoi_kal: { name: 'Δήμοι (Καλλικράτης)' },
    dimEn: { name: 'Δημοτικές Ενότητες' },
    railway: { name: 'Σιδηροδρομική γραμμή' },
    natura: { name: 'Natura 2000' },
    ethn_drymoi: { name: 'Εθνικοί Δρυμοί' },
    ethn_parka: { name: 'Εθνικά Πάρκα' },
    diethneis_sinthikes: { name: 'Περ. Προστασίας από Διεθνείς Συνθήκες' },
    aisth_dasi: { name: 'Αισθητικά Δάση' },
    kat_agrias_zois: { name: 'Καταφύγια Άγριας Ζωής' },
    elegx_kin_per: { name: 'Ελεγχόμενες Κυνηγετικές Περιοχές' },
    corine_biotopes: { name: 'Βιότοποι CORINE' },
    tifk: { name: 'Τοπία Ιδιαίτερου Φυσικού Κάλλους' },
    rest_biotopes: { name: 'Λοιποί Βιότοποι' },
    loipa_topia: { name: 'Λοιπά Τοπία' },
    zoni_parnithas: { name: 'Ζώνη Προστασίας Πάρνηθας' },
    zones_prostasias_aigaleo: { name: 'Ζώνη Προστασίας Ορεινού Όγκου Αιγάλεω' },
    zoni_prostasias_lauriou: { name: 'Ζώνη Προστασίας Ορεινού Όγκου Λαυρίου' },
    gps_attikis: { name: 'Γ.Π.Σ. Αττικής' },
    xriseis_aktes_attiki: { name: 'Χρήσεις Γης Ακτές Αττικής' },
    zea_attiki_odos: { name: 'Ζ.Ε.Α. Αττικής Οδού' },
    zea_elaiona: { name: 'Ζ.Ε.Α. Ελαιώνα' },
    zoe_mesogeion: { name: 'Ζ.Ο.Ε. Μεσογείων' },
    paragog_drast: { name: 'Παραγωγικές Δραστηριότητες' },
    atipes_viom_sygk: { name: 'Άτυπες Βιομηχανικές Συγκεντρώσεις' },
  };

  getLayerProps() {
    return this.layerProps;
  }
}
