/* declarations */

//consts
const susMax = 7;
const hintsMax = 5;

//default values
let hintsGiven = [];
let hintPerBat = 0;
let hintPerSwing = 0;
let susCounter = 0;

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

const $hint = $('#hint');
const $hintMsg = $('#hintMsg');

const $battersBoxPage = $('#battersBoxPage');
const $playAgainBoxBtn = $('#playAgainBoxBtn');
const $quitBoxBtn = $('#quitBoxBtn');

/* event listeners */
$startBtn.click(function(){$startPage.fadeToggle(); $pitcherPage.fadeToggle();})

$pitcherTypeBtns.click(function(evt) {$pitcherTypeBtns.css('opacity','50%');$pitcherSelected.html(evt.target.innerHTML);evt.target.style = `opacity: 100%`})
$pitcherTTTDivs.click(function(evt) {$pitcherCol.html(evt.target.className);$pitcherRow.html(evt.target.id);$pitcherTTTDivs.css('backgroundImage','none');evt.target.style = `background-image: url("https://img.freepik.com/premium-photo/baseball-ball-white-background-isolated_702196-15.jpg");
background-repeat: no-repeat;
background-size: contain;`})
$pitcherBtn.click(function(){if ($pitcherSelected.html() === '' || $pitcherCol.html() === '' || $pitcherRow.html() === '') {$pitcherMsg.html('Please click all categories')} else {$pitcherPage.fadeToggle(); $batterPage.fadeToggle()}})

$batterTypeBtns.click(function(evt) {$batterTypeBtns.css('opacity','50%');$batterSelected.html(evt.target.innerHTML);evt.target.style = `opacity: 100%`})
$batterTTTDivs.click(function(evt) {$batterCol.html(evt.target.id);$batterRow.html(evt.target.className);$batterTTTDivs.css('backgroundImage','none');evt.target.style = `background-image: url("https://img.freepik.com/premium-photo/baseball-ball-white-background-isolated_702196-15.jpg");
background-repeat: no-repeat;
background-size: contain;`})
$batterBtn.click(function(){if ($batterSelected.html() === '' || $batterCol.html() === '' || $batterRow.html() === '') {$batterMsg.html('Please click all categories')} else {$batterPage.fadeToggle(); $battersBoxPage.fadeToggle();}})

$hint.click(function() {getNextHint()})

$playAgainBoxBtn.click(function(){$battersBoxPage.fadeToggle(); $pitcherPage.fadeToggle();defaultSettings()})
$quitBoxBtn.click(function(){$battersBoxPage.fadeToggle(); $startPage.fadeToggle();defaultSettings()})

/* functions */
function defaultSettings() {
    $pitcherSelected.html(''); $pitcherCol.html(''); $pitcherRow.html('');$pitcherMsg.html('');$pitcherTTTDivs.css('backgroundImage','none');$pitcherTypeBtns.css('opacity','50%');
    $batterSelected.html(''); $batterCol.html(''); $batterRow.html('');$batterMsg.html('');$batterTTTDivs.css('backgroundImage','none');$batterTypeBtns.css('opacity','50%');
    hintsGiven = [];hintCounter = 0;hintAtBatCounter = 0;susCounter = 0;$hintMsg.html('');
}

function getNextHint() {
    // If not caught, get hint
    if (susCounter < susMax){
        // check hints per swing
        if (hintPerSwing <= susMax){
            // check hints per bat
            if (hintPerBat <= susMax) {
                hintPerBat++;
                hintPerSwing++;
                susCounter++;
                generateHint();
            } else {
                // total hints reached no more for youuuuuuu
                $hintMsg.html(`Oh my gosh...you don't need more help than this...`)
            }

        } else {
            // too many hints at this bat
            $hintMsg.html(`Shh...you only get 2 hints per swing`)
        }
    } else {
        // Caught!
        // Render thrown out page
        // TODO: Change this to the real page
        $batterPage.fadeToggle();
        $startPage.fadeToggle();
        defaultSettings();
    }
}

function generateHint() {
    const randHintInd = Math.floor(Math.random()*3 + 1);
    let msg = '';
    switch (randHintInd) {
        case 1: // Pitch Type
            msg += `Bang<br>`;
            switch ($pitcherSelected.html()) {
                case 'Fastball':
                    msg += `Bang`;
                    break;
                case 'Curve Ball':
                    msg += `Bang Bang`;
                    break;
                case 'Eephus':
                    msg += `Bang Bang Bang`;
                    break;
            }
            break;
        case 2: // Row
            msg += `Bang Bang<br>`;
            switch ($pitcherRow.html()) {
                case 'Top':
                    msg += `Bang`;
                    break;
                case 'Middle':
                    msg += `Bang Bang`;
                    break;
                case 'Bottom':
                    msg += `Bang Bang Bang`;
                    break;
            }
            break;
        case 3: // Col
            msg += `Bang Bang Bang<br>`;
            switch ($pitcherCol.html()) {
                case 'Left':
                    msg += `Bang`;
                    break;
                case 'Center':
                    msg += `Bang Bang`;
                    break;
                case 'Right':
                    msg += `Bang Bang Bang`;
                    break;
            }
            break;
    }
    $hintMsg.html(msg)
}

// Setting default settings for the game
$('document').ready(() => {
    $batterPage.fadeToggle();
    $startPage.fadeToggle();
    $battersBoxPage.fadeToggle();
})