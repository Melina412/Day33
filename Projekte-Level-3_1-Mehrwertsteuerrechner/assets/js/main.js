function berechnen() {
  let betrag = document.getElementById("betragInput").value;
  console.log({ betrag });

  //   Auwahl netto/brutto
  function steuer() {
    if (netto.checked) {
      return "netto";
    } else if (brutto.checked) {
      return "brutto";
    }
  }
  const steuerAuswahl = steuer();
  console.log(steuerAuswahl);

  //   Auwahl 19/7
  function steuersatz() {
    if (satz19.checked) {
      return "19%";
    } else if (satz7.checked) {
      return "7%";
    }
  }
  const steuersatzAuswahl = steuersatz();
  console.log(steuersatzAuswahl);

  let patternBetrag = document
    .getElementById("betragInput")
    .getAttribute("pattern");
  console.log(patternBetrag);

  if (!isNaN(betrag)) {
    if (steuerAuswahl === "netto") {
      if (steuersatzAuswahl === "19%") {
        console.log("mehrwertsteuerbetrag", betrag * 0.19);
        console.log("bruttobetrag", betrag * 1.19);
      } else if (steuersatzAuswahl === "7%") {
        console.log("mehrwertsteuerbetrag", betrag * 0.07);
        console.log("bruttobetrag", betrag * 1.07);
      } else {
        console.log("bitte Steuersatz auswählen");
      }
    } else if (steuerAuswahl === "brutto") {
      if (steuersatzAuswahl === "19%") {
        console.log("mehrwertsteuerbetrag", betrag * 0.19);
        console.log("bruttobetrag", betrag * 0.81);
      } else if (steuersatzAuswahl === "7%") {
        console.log("mehrwertsteuerbetrag", betrag * 0.07);
        console.log("nettobetrag", betrag * 0.93);
      } else {
        console.log("bitte Steuersatz auswählen");
      }
    } else {
      console.log("bitte korrekten Betrag eingeben");
    }
  }
}

// && RegExp(patternBetrag).test(betragInput.value)
