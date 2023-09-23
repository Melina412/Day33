// * Text für Betrag inputLabel
function steuerText() {
  let steuer = document.querySelector('input[name="steuer"]:checked');
  // let steuer_value = steuer.value;
  let input_label = document.getElementById("inputLabel");
  let output_art = document.getElementById("outputArt");

  // if (steuer_value === "netto") { //  html value="netto" // - STRING
  if (steuer === netto) {
    //  html id netto // - OBJECT
    input_label.innerHTML = `Nettobetrag (Preis ohne Mehrwersteuer) in Euro<span>*</span>`;
    output_art.innerHTML = "Bruttobetrag (Endpreis)";

    return "netto"; // nur als test
    //
    // } else if (steuer_value === "brutto") { //  html value="brutto" // - STRING
  } else if (steuer === brutto) {
    //  html id brutto // - OBJECT
    input_label.innerHTML =
      "Bruttobetrag (Preis inklusive Mehrwersteuer) in Euro<span>*</span>";
    output_art.innerHTML = "Nettobetrag";

    return "brutto"; // nur als test
    //
  } else {
    return "bitte Steuerart auswählen"; // nur als test
  }
}
steuerText();

// * Beim klick auf Submit-Button
function berechnen() {
  // * Werte lesen
  let betrag = Number(document.getElementById("betragInput").value);
  let steuer = document.querySelector('input[name="steuer"]:checked');
  let steuer_value = steuer.value;
  let steuersatz = document.querySelector('input[name="steuersatz"]:checked');
  let steuersatz_value = Number(steuersatz.value);

  // * Entscheidung Addition/Subtraktion der Steuer
  let operation = "";
  if (steuer === netto) {
    operation = 1 + steuersatz_value;
  } else if (steuer === brutto) {
    operation = 1 - steuersatz_value;
  }
  // * Berechnung
  let result_steuer = betrag * steuersatz_value;
  let result_betrag = betrag * operation;

  //  * Output
  let output_steuer = document.getElementById("outputSteuer");
  let output_betrag = document.getElementById("outputBetrag");

  output_steuer.innerHTML = result_steuer.toFixed(2);
  output_betrag.innerHTML = result_betrag.toFixed(2);

  let return_value_steuertext = steuerText(); // nur als test
  console.log({ return_value_steuertext });
}

// - steuerText(): die variablen steuer bzw. steuer_value müssen innerhalb der function
// - definiert sein, weil der wert sonst nur einmal beim laden der seite gesetzt und beim
// - aufrufen dernfunction durch klick auf die radio buttons nicht aktualisiert wird
//
// - (steuer_value === "netto")
// - steuer_value: im html zugewiesener wert des value attributs -> STRING
//
// - (steuer === netto)
// - steuer:  welcher radio button mit name attribut 'steuer' ist ausgewählt
// - netto: id des ausgewählten radio buttons -> OBJECT
//
// todo betrag eingabe pattern check & fehlermeldung
