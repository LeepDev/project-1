/* static */

/* dom elements */
const $startBtn = $('#startBtn');
const $startPage = $('#startPage');

const $pitcherBtn = $('#pitcherBtn');
const $pitcherPage = $('#pitcherPage');
const $pitcherTypeBtns = $('#pitcherBtns button');
const $pitcherMsg = $('#pitcherMsg');
const $pitcherCol = $('#pitcherCol');
const $pitcherRow = $('#pitcherRow');
const $pitcherSelected = $('#pitcherSelected');
const $pitcherTTTDivs = $('#pitcherTTT div');

const $batterBtn = $('#batterBtn');
const $batterPage = $('#batterPage');
const $batterTypeBtns = $('#batterBtns button');
const $batterMsg = $('#batterMsg');
const $batterCol = $('#batterCol');
const $batterRow = $('#batterRow');
const $batterSelected = $('#batterSelected');
const $batterTTTDivs = $('#batterTTT div');

const $battersBoxPage = $('#battersBoxPage');
const $playAgainBoxBtn = $('#playAgainBoxBtn');
const $quitBoxBtn = $('#quitBoxBtn');

/* event listeners */
$startBtn.click(function(){$startPage.fadeToggle(); $pitcherPage.fadeToggle();})

$pitcherTypeBtns.click(function(evt) {$pitcherTypeBtns.css('opacity','50%');$pitcherSelected.html(evt.target.innerHTML);evt.target.style = `opacity: 100%`})
$pitcherTTTDivs.click(function(evt) {$pitcherCol.html(evt.target.id);$pitcherRow.html(evt.target.className);$pitcherTTTDivs.css('backgroundImage','none');evt.target.style = `background-image: url("https://img.freepik.com/premium-photo/baseball-ball-white-background-isolated_702196-15.jpg");
background-repeat: no-repeat;
background-size: contain;`})
$pitcherBtn.click(function(){if ($pitcherSelected.html() === '' || $pitcherCol.html() === '' || $pitcherRow.html() === '') {$pitcherMsg.html('Please click all categories')} else {$pitcherPage.fadeToggle(); $batterPage.fadeToggle()}})

$batterTypeBtns.click(function(evt) {$batterTypeBtns.css('opacity','50%');$batterSelected.html(evt.target.innerHTML);evt.target.style = `opacity: 100%`})
$batterTTTDivs.click(function(evt) {$batterCol.html(evt.target.id);$batterRow.html(evt.target.className);$batterTTTDivs.css('backgroundImage','none');evt.target.style = `background-image: url("https://img.freepik.com/premium-photo/baseball-ball-white-background-isolated_702196-15.jpg");
background-repeat: no-repeat;
background-size: contain;`})
$batterBtn.click(function(){if ($batterSelected.html() === '' || $batterCol.html() === '' || $batterRow.html() === '') {$batterMsg.html('Please click all categories')} else {$batterPage.fadeToggle(); $battersBoxPage.fadeToggle();}})

$playAgainBoxBtn.click(function(){$battersBoxPage.fadeToggle(); $pitcherPage.fadeToggle();defaultSettings()})
$quitBoxBtn.click(function(){$battersBoxPage.fadeToggle(); $startPage.fadeToggle();defaultSettings()})

/* functions */
function defaultSettings() {
    $pitcherSelected.html(''); $pitcherCol.html(''); $pitcherRow.html('');$pitcherMsg.html('');$pitcherTTTDivs.css('backgroundImage','none');$pitcherTypeBtns.css('opacity','50%');
    $batterSelected.html(''); $batterCol.html(''); $batterRow.html('');$batterMsg.html('');$batterTTTDivs.css('backgroundImage','none');$batterTypeBtns.css('opacity','50%');
}

// Setting default settings for the game
$('document').ready(() => {
    $pitcherPage.fadeToggle();
    $batterPage.fadeToggle();
    $battersBoxPage.fadeToggle();
})