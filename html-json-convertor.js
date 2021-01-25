const fs = require('fs');
const variable = `
<option value="1264" >රඹුක්කන / ரம்புக்கணை / Rambukkana</option>
		<option value="1265" >මාවනැල්ල / மாவ‎ணெல்ல / Mawanella</option>
		<option value="1266" >අරනායක / அரநாயக்க / Aranayaka</option>
		<option value="1267" >කෑගල්ල / ‍கேகாலை / Kegalle</option>
		<option value="1268" >ගලිගමුව / கலிகமுவ / Galigamuwa</option>
		<option value="1269" >වරකාපොළ / வரகாப்‎பொல / Warakapola</option>
		<option value="1270" >රුවන්වැල්ල / ருவண்‎வெல்ல / Ruwanwella</option>
		<option value="1271" >බුලත්කොහුපිටිය / புலத்‎கொஹுபிட்டிய / Bulathkohupitiya</option>
		<option value="1272" >යටියන්තොට / யட்டியந்‎தொட்டை / Yatiyanthota</option>
		<option value="1273" >දෙහිඹ්විට / ‎தெஹி‍யோவிட்ட / Dehiovita</option>
		<option value="1274" >දැරණියගල / ‎தெரணியகல / Deraniyagala</option>
	
`;

(() => {
  const splitArray = variable.split('" >');
  const finalArray = [];
  for (let index = 1; index < splitArray.length; index++) {
    staringIndex = 315;
    const element = splitArray[index];
    const subSplittedArray = element.split('</option>')[0];
    const locationArray = subSplittedArray.split('/');
    const obj = {
      index: staringIndex + index,
      si_LK: locationArray[0].trim(),
      ta_IN: locationArray[1].trim(),
      en_US: locationArray[2].trim(),
    };
    finalArray.push(obj);
  }
  // convert JSON object to string
  const data = JSON.stringify(finalArray);

  // write JSON string to a file
  fs.writeFile('results.json', data, (err) => {
    if (err) {
      throw err;
    }
    console.log('JSON data is saved.');
  });
})();
