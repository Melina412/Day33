function berechnen() {
  let betrag = document.getElementById("betragInput").value;
  //   console.log({ betrag });

  //   Auwahl netto/brutto
  function steuer() {
    if (netto.checked) {
      document.getElementById("inputLabel").innerHTML =
        "Nettobetrag (Preis ohne Mehrwersteuer) in Euro<span>*</span>";
      document.getElementById("outputArt").innerHTML =
        "Bruttobetrag (Endpreis)";
      return "netto";
    } else if (brutto.checked) {
      document.getElementById("inputLabel").innerHTML =
        "Bruttobetrag (Preis inklusive Mehrwersteuer) in Euro<span>*</span>";
      document.getElementById("outputArt").innerHTML = "Nettobetrag";
      return "brutto";
    } else {
      return "bitte Steuerart auswählen";
    }
  }
  steuer();
  const steuerAuswahl = steuer();
  //   console.log(steuerAuswahl);

  //   Auwahl 19/7
  function steuersatz() {
    if (satz19.checked) {
      return "19%";
    } else if (satz7.checked) {
      return "7%";
    } else {
      return "bitte Steuersatz auswählen";
    }
  }
  const steuersatzAuswahl = steuersatz();
  //   console.log(steuersatzAuswahl);

  let patternBetrag = document
    .getElementById("betragInput")
    .getAttribute("pattern");
  //   console.log(patternBetrag);

  let outputSteuer = document.getElementById("outputSteuer");
  let outputBetrag = document.getElementById("outputBetrag");

  if (!isNaN(betrag) && betrag > 0) {
    let result = [];
    if (steuerAuswahl === "netto") {
      //   document.getElementById("inputLabel").innerHTML =
      //     "Nettobetrag (Preis ohne Mehrwersteuer) in Euro<span>*</span>";
      //   document.getElementById("outputArt").innerHTML =
      //     "Bruttobetrag (Endpreis)";
      if (steuersatzAuswahl === "19%") {
        let resultMwSt = betrag * 0.19;
        let resultBrutto = betrag * 1.19;
        //
        result.push([resultMwSt, resultBrutto]);
        // console.log(result[0].toFixed(2));
        // console.log(result[1].toFixed(2));
        console.log({ result });
        return result;
        //
        outputSteuer.innerHTML = resultMwSt.toFixed(2);
        outputBetrag.innerHTML = resultBrutto.toFixed(2);
      } else if (steuersatzAuswahl === "7%") {
        let resultMwSt = betrag * 0.07;
        let resultBrutto = betrag * 1.07;
        // let result = [resultMwSt, resultBrutto];
        // console.log(result);
        outputSteuer.innerHTML = resultMwSt.toFixed(2);
        outputBetrag.innerHTML = resultBrutto.toFixed(2);
      }
    } else if (steuerAuswahl === "brutto") {
      //   document.getElementById("inputLabel").innerHTML =
      //     "Bruttobetrag (Preis inklusive Mehrwersteuer) in Euro<span>*</span>";
      //   document.getElementById("outputArt").innerHTML = "Nettobetrag";
      if (steuersatzAuswahl === "19%") {
        let resultMwSt = betrag * 0.19;
        let resultNetto = betrag * 0.81;
        // let result = [resultMwSt, resultNetto];
        // console.log(result);
        outputSteuer.innerHTML = resultMwSt.toFixed(2);
        outputBetrag.innerHTML = resultNetto.toFixed(2);
        //
      } else if (steuersatzAuswahl === "7%") {
        let resultMwSt = betrag * 0.07;
        let resultNetto = betrag * 0.93;
        // let result = [resultMwSt, resultNetto];
        // console.log(result);
        outputSteuer.innerHTML = resultMwSt.toFixed(2);
        outputBetrag.innerHTML = resultNetto.toFixed(2);
      }
    }
  } else {
    console.log("bitte korrekten Betrag eingeben");
  }
}

// berechnen();
// const result = berechnen();
// console.log(result);
// console.log(result.length);

// && RegExp(patternBetrag).test(betragInput.value)
