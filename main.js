
//#region consts
const susMax = 7;
const hintsBatMax = 5;
const hintsSwingMax = 2;
const pitchMax = 3;

const pitchBatterMatrix = {
    'Fast': 'Fastball',
    'Medium': 'Curve Ball',
    'Slow': 'Eephus'
}
//#endregion

//#region default values
let hintsGiven = [];
let hintPerBat = 0;
let hintPerSwing = 0;

let susCounter = 0;
let pitchCount = 0;

let astrosHits = 0;
let astrosStrikeouts = 0;
let astrosThrownout = 0;
//#endregion

//#region dom elements
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

const $resultMsg = $('#resultMsg');
const $pitchCount = $('#pitchCount');
const $hitCount = $('#hitCount');
const $strikeoutCount = $('#strikeoutCount');
const $thrownoutCount = $('#thrownoutCount');
const $susCount = $('#susCount');

const $battersBoxPage = $('#battersBoxPage');
const $playAgainBoxBtn = $('#playAgainBoxBtn');
const $quitBoxBtn = $('#quitBoxBtn');
//#endregion

//#region event listners
$startBtn.click(function(){$startPage.fadeToggle(); $pitcherPage.fadeToggle();})

$pitcherTypeBtns.click(function(evt) {$pitcherTypeBtns.css('opacity','50%');$pitcherSelected.html(evt.target.innerHTML);evt.target.style = `opacity: 100%`})
$pitcherTTTDivs.click(function(evt) {$pitcherCol.html(evt.target.className);$pitcherRow.html(evt.target.id);$pitcherTTTDivs.css('backgroundImage','none');evt.target.style = `background-image: url("https://img.freepik.com/premium-photo/baseball-ball-white-background-isolated_702196-15.jpg");
background-repeat: no-repeat;
background-size: contain;`})
$pitcherBtn.click(function(){if ($pitcherSelected.html() === '' || $pitcherCol.html() === '' || $pitcherRow.html() === '') {$pitcherMsg.html('Please click all categories')} else {pitchCount++;$pitcherPage.fadeToggle(); $batterPage.fadeToggle()}})

$batterTypeBtns.click(function(evt) {$batterTypeBtns.css('opacity','50%');$batterSelected.html(evt.target.innerHTML);evt.target.style = `opacity: 100%`})
$batterTTTDivs.click(function(evt) {$batterCol.html(evt.target.className);$batterRow.html(evt.target.id);$batterTTTDivs.css('backgroundImage','none');evt.target.style = `background-image: url("https://img.freepik.com/premium-photo/baseball-ball-white-background-isolated_702196-15.jpg");
background-repeat: no-repeat;
background-size: contain;`})
$batterBtn.click(function(){if ($batterSelected.html() === '' || $batterCol.html() === '' || $batterRow.html() === '') {$batterMsg.html('Please click all categories')} else {$batterPage.fadeToggle(); $battersBoxPage.fadeToggle(); calculateResult()}})

$hint.click(function() {getNextHint()})

$playAgainBoxBtn.click(function(){$battersBoxPage.fadeToggle(); $pitcherPage.fadeToggle();nextSwingSettings()})
$quitBoxBtn.click(function(){$battersBoxPage.fadeToggle(); $startPage.fadeToggle();defaultSettings()})
//#endregion

//#region functions
function nextSwingSettings() {
    // reset batter and pitcher but keep suspicion and atBat hints
    $pitcherSelected.html(''); $pitcherCol.html(''); $pitcherRow.html('');$pitcherMsg.html('');$pitcherTTTDivs.css('backgroundImage','none');$pitcherTypeBtns.css('opacity','50%');

    $batterSelected.html(''); $batterCol.html(''); $batterRow.html('');$batterMsg.html('');$batterTTTDivs.css('backgroundImage','none');$batterTypeBtns.css('opacity','50%');

    $hintMsg.html('');hintsGiven = [];hintPerSwing = 0;

    $resultMsg.html('');
}

function defaultSettings() {
    nextSwingSettings();
    hintAtBatCounter = 0;susCounter = 0;hintCounter = 0;pitchCount = 0;astrosHits = 0;astrosStrikeouts = 0;astrosThrownout = 0;
}

function getNextHint() {
    // If not caught, get hint
    if (susCounter < susMax){
        // check hints per swing
        if (hintPerSwing < hintsSwingMax){
            // check hints per bat
            if (hintPerBat < hintsBatMax) {
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
        $battersBoxPage.fadeToggle();
        calculateResult(true);
    }
}

function generateHint() {
    const randHintInd = Math.floor(Math.random()*3 + 1);
    let msg = '';
    if (hintsGiven.includes(randHintInd)) {
        // if we've already given the hint, generate a different one
        generateHint();
    }
    else {
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
        hintsGiven.push(randHintInd);
        $hintMsg.html(msg)
    }
}

//#region function calculateResult
// if checks
//      Astros Thrownout
// else if
//      HIT
// else if
//      Strikeout
// else
//      Swing and miss
// after if
// render count()
//#endregion
function calculateResult(caught) {    
    if (caught) {
        // Astros Thrownout
        astrosThrownout++;
        pitchCount = 0;
        susCounter = 0;
        hintPerBat = 0;
        $resultMsg.html('HIT THE SHOWAAAAAAHHHHS!');
    } else if ($pitcherCol.html() === $batterCol.html() && $pitcherRow.html() === $batterRow.html() && $pitcherSelected.html() === pitchBatterMatrix[$batterSelected.html()]) {
        // HIT! generate hit screen and update counters
        astrosHits++;
        pitchCount = 0;
        hintPerBat = 0;
        $resultMsg.html('HIT!!!');
        // TODO: hit screen
    } else if (pitchCount === pitchMax) { // check if pitcher threw 3 strikes
        // Astro Strikeout
        astrosStrikeouts++;
        pitchCount = 0;
        hintPerBat = 0;
        $resultMsg.html('YERRRRR OUTTTTT!!!');
        // TODO: strikeout screen;
    }  else {
        $resultMsg.html('SWING BATTA BATTA BATTAAA...AND A MISS!');
    }
    renderCount();
}

function renderCount() {
    $pitchCount.html(`Pitch Count: ${pitchCount}`);
    $hitCount.html(`# of Hits: ${astrosHits}`);
    $strikeoutCount.html(`# of Strikeouts: ${astrosStrikeouts}`);
    $thrownoutCount.html(`# of Thrownouts: ${astrosThrownout}`);
    $susCount.html(`Suspicion Counter: ${susCounter}`);

    pitchCount === 0 ? $pitchCount.hide() : $pitchCount.show();
    astrosHits === 0 ? $hitCount.hide() : $hitCount.show();
    astrosStrikeouts === 0 ? $strikeoutCount.hide() : $strikeoutCount.show();
    astrosThrownout === 0 ? $thrownoutCount.hide() : $thrownoutCount.show();
    susCounter === 0 ? $susCount.hide() : $susCount.show();
}

// Setting default settings for the game
$('document').ready(() => {
    $batterPage.fadeToggle();
    $pitcherPage.fadeToggle();
    $battersBoxPage.fadeToggle();
})

//#endregion