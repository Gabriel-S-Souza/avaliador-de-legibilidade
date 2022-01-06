function readabilityChecker(text) {
	let letters = 0;
	let words = 1;
	let phrases = 1;
	if (text.length > 0) {
		for (let i = 0; i < text.length; i++) {
			if (isAlpha(text[i])) {
				letters++;
			}
			if (isAlpha(text[i]) && text[i - 1] == " ") {
				words++;
			}
			if ((isAlpha(text[i]) || text[i] == " ") && (text[i - 1] == "." || text[i - 1] == "!" || text[i - 1] == "?")) {
				phrases++;
			}
		}
		console.log("Words", words);
		console.log("Phrases", phrases);
		const averageLetters = (letters / words) * 100;
		const averagePhrases = (phrases / words) * 100;
		const colemanLiauIndex =
			0.0588 * averageLetters - 0.296 * averagePhrases - 15.8;
		return converterToSeries(colemanLiauIndex);
	} else return "";
}

function isAlpha(char) {
	return char.length === 1 && /[a-zA-Zà-úÀ-ÚçÇ]/g.test(char);
}

function converterToSeries(colemanLiauIndex) {
	let i = 0;
	if (Math.round(colemanLiauIndex) < 0.5) {
		return `Pré-escola`;
	} else {
		for (i = 0; ; i++) {
			if (Math.round(colemanLiauIndex) == i && i <= 9) {
				return `${i}° ano do Ensino Fundamental`;
			} else if (Math.round(colemanLiauIndex) == i && i <= 12) {
				return `${i - 9}° ano do Ensino Médio`;
			} else if (Math.round(colemanLiauIndex) == i && i <= 16) {
				return `${i - 12}° ano da Faculdade`;
			} else if (Math.round(colemanLiauIndex) == i && i > 16) {
				return `Pós-graduação`;
			}
		}
	}
}
