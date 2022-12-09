timedLoop(1000, function() {
  setNumber("money", getNumber("money") + getNumber("y"));
  setNumber("money1", getNumber("money1") + getNumber("y"));
  setNumber("money2", getNumber("money2") + getNumber("y"));
  setNumber("money3", getNumber("money3") + getNumber("y"));
  setNumber("money4", getNumber("money4") + getNumber("y"));
  setNumber("money5", getNumber("money5") + getNumber("y"));
  setNumber("money6", getNumber("money6") + getNumber("y"));
});
setText("go", "+" + getNumber("x"));
onEvent("Settings", "click", function(event) {
  setScreen("Setting");
});
onEvent("shop", "click", function(event) {
  setScreen("store");
});
onEvent("store1", "click", function(event) {
  setScreen("store");
});
onEvent("store2", "click", function(event) {
  setScreen("store");
});
onEvent("go", "click", function(event) {
  playSound("assets/16930_1461335337.mp3", false);
});
onEvent("store3", "click", function(event) {
  setScreen("store");
});
onEvent("upgrade", "click", function(event) {
  setScreen("upgrades");
});
onEvent("upgrade1", "click", function(event) {
  setScreen("upgrades");
});
onEvent("button19", "click", function( ) {
  setScreen("reset");
});
onEvent("upgrade2", "click", function(event) {
  setScreen("upgrades");
});
onEvent("button18", "click", function( ) {
  setScreen("bonuses");
});
onEvent("button25", "click", function( ) {
  setScreen("upgrades");
});
onEvent("button29", "click", function( ) {
  setScreen("reset");
});
onEvent("button28", "click", function( ) {
  setScreen("bonuses");
});
onEvent("button27", "click", function( ) {
  setScreen("store");
});
onEvent("button35", "click", function( ) {
  setScreen("upgradeTwo");
});
onEvent("button15", "click", function( ) {
  setScreen("upgrades");
});
onEvent("bonuses1", "click", function(event) {
  setScreen("bonuses");
});
onEvent("bonuses2", "click", function(event) {
  setScreen("bonuses");
});
onEvent("bonuses3", "click", function(event) {
  setScreen("bonuses");
});
onEvent("reset1", "click", function(event) {
  setScreen("reset");
});
onEvent("reset2", "click", function(event) {
  setScreen("reset");
});
onEvent("mod", "click", function(evnet) {
  setScreen("MOD");
});
onEvent("bta", "click", function(event) {
  setScreen("Ascend2");
});
onEvent("reset3", "click", function(event) {
  setScreen("reset");
});
onEvent("back", "click", function(event) {
  setScreen("home");
});
onEvent("button10", "click", function(event ) {
  setScreen("Ascend2");
});
onEvent("button11", "click", function(event ) {
  setScreen("home");
});
onEvent("button12", "click", function(event) {
  setScreen("Ascend");
});
onEvent("button13", "click", function( ) {
  setScreen("home");
});
onEvent("button9", "click", function(event ) {
  setScreen("home");
});
onEvent("button7", "click", function( event) {
  setScreen("Ascend");
});
onEvent("Back", "click", function( ) {
  setScreen("store");
});
onEvent("button8", "click", function(event ) {
  setScreen("Ascend");
});
onEvent("ms", "click", function( ) {
  setScreen("storeTwo");
});
onEvent("button20", "click", function(event ) {
  if (getNumber("money") >= getNumber("500QD")) {
    setNumber("fag", getNumber("fag") + 1);
    setNumber("money", getNumber("money") - getNumber("500QD"));
    setNumber("money1", getNumber("money1") - getNumber("500QD"));
    setNumber("money2", getNumber("money2") - getNumber("500QD"));
    setNumber("money3", getNumber("money3") - getNumber("500QD"));
    setNumber("money4", getNumber("money4") - getNumber("500QD"));
    setNumber("money5", getNumber("money5") - getNumber("500QD"));
    setNumber("money6", getNumber("money6") - getNumber("500QD"));
  }
});
onEvent("button6", "click", function(event ) {
  if (getNumber("money") >= getNumber("500QD")) {
    setNumber("fag", getNumber("fag") + 1);
    setNumber("money", getNumber("money") - getNumber("500QD"));
    setNumber("money1", getNumber("money1") - getNumber("500QD"));
    setNumber("money2", getNumber("money2") - getNumber("500QD"));
    setNumber("money3", getNumber("money3") - getNumber("500QD"));
    setNumber("money4", getNumber("money4") - getNumber("500QD"));
    setNumber("money5", getNumber("money5") - getNumber("500QD"));
    setNumber("money6", getNumber("money6") - getNumber("500QD"));
  }
});
onEvent("button7", "click", function(event ) {
  if (getNumber("money") >= getNumber("500QD")) {
    setNumber("fag", getNumber("fag") + 1);
    setNumber("money", getNumber("money") - getNumber("500QD"));
    setNumber("money1", getNumber("money1") - getNumber("500QD"));
    setNumber("money2", getNumber("money2") - getNumber("500QD"));
    setNumber("money3", getNumber("money3") - getNumber("500QD"));
    setNumber("money4", getNumber("money4") - getNumber("500QD"));
    setNumber("money5", getNumber("money5") - getNumber("500QD"));
    setNumber("money6", getNumber("money6") - getNumber("500QD"));
  }
});
onEvent("button8", "click", function(event ) {
  if (getNumber("money") >= getNumber("500QD")) {
    setNumber("fag", getNumber("fag") + 1);
    setNumber("money", getNumber("money") - getNumber("500QD"));
    setNumber("money1", getNumber("money1") - getNumber("500QD"));
    setNumber("money2", getNumber("money2") - getNumber("500QD"));
    setNumber("money3", getNumber("money3") - getNumber("500QD"));
    setNumber("money4", getNumber("money4") - getNumber("500QD"));
    setNumber("money5", getNumber("money5") - getNumber("500QD"));
    setNumber("money6", getNumber("money6") - getNumber("500QD"));
  }
});
onEvent("button30", "click", function(event ) {
  if (getNumber("money") >= getNumber("500QD")) {
    setNumber("fag", getNumber("fag") + 1);
    setNumber("money", getNumber("money") - getNumber("500QD"));
    setNumber("money1", getNumber("money1") - getNumber("500QD"));
    setNumber("money2", getNumber("money2") - getNumber("500QD"));
    setNumber("money3", getNumber("money3") - getNumber("500QD"));
    setNumber("money4", getNumber("money4") - getNumber("500QD"));
    setNumber("money5", getNumber("money5") - getNumber("500QD"));
    setNumber("money6", getNumber("money6") - getNumber("500QD"));
  }
});
onEvent("back1", "click", function(event) {
  setScreen("home");
});
onEvent("back2", "click", function(event) {
  setScreen("home");
});
onEvent("back3", "click", function(event) {
  setScreen("home");
});
onEvent("go", "click", function(event) {
  setNumber("money", getNumber("money") + getNumber("x"));
  setNumber("money1", getNumber("money1") + getNumber("x"));
  setNumber("money2", getNumber("money2") + getNumber("x"));
  setNumber("money3", getNumber("money3") + getNumber("x"));
  setNumber("money4", getNumber("money4") + getNumber("x"));
  setNumber("money5", getNumber("money5") + getNumber("x"));
  setNumber("money6", getNumber("money6") + getNumber("x"));
  while ((getNumber("money") > getNumber("b"))) {
    setNumber("b", getNumber("money"));
  }
  if (getNumber("bab") >= 1) {
    setNumber("e", randomNumber(1, getNumber("f")));
    if (getNumber("e") == 1) {
      setNumber("money", Math.round(getNumber("money") + getNumber("x") * 10));
      setNumber("money1", Math.round(getNumber("money1") + getNumber("x") * 10));
      setNumber("money2", Math.round(getNumber("money2") + getNumber("x") * 10));
      setNumber("money3", Math.round(getNumber("money3") + getNumber("x") * 10));
      setNumber("money4", Math.round(getNumber("money4") + getNumber("x") * 10));
      setNumber("money5", Math.round(getNumber("money5") + getNumber("x") * 10));
      setNumber("money6", Math.round(getNumber("money6") + getNumber("x") * 10));
      setPosition("crit", 105, 140);
      showElement("crit");
      timedLoop(40, function() {
        setPosition("crit", getXPosition("crit"), getYPosition("crit") - 1);
      });
      setTimeout(function() {
        hideElement("crit");
        stopTimedLoop();
      }, 1000);
    }
  }
  if (getNumber("money") == 100) {
  showElement("label3");
  timedLoop(100, function() {
    setPosition("label3", getXPosition("label3"), getYPosition("label3") - 1);
  });
  setTimeout(function() {
    hideElement("label3");
    stopTimedLoop();
  }, 2000);
}
});
onEvent("reset4", "click", function(event) {
  showElement("yes");
  showElement("no");
  showElement("warning");
  if (getNumber("b") < getNumber("money")) {
    setText("warning", "You'll only get a boost if you haven't had this much money before!");
  } else {
    setText("warning", "Are you sure?");
  }
  hideElement("reset4");
  hideElement("money4");
  hideElement("back3");
  hideElement("store3");
  hideElement("upgrade2");
  hideElement("bonuses3");
  hideElement("resetinfo");
  hideElement("button5");
  onEvent("yes", "click", function(event) {
    setText("warning", "");
    hideElement("yes");
    hideElement("no");
    hideElement("warning");
    showElement("reset4");
    showElement("money4");
    showElement("back3");
    showElement("store3");
    showElement("upgrade2");
    showElement("bonuses3");
    showElement("resetinfo");
    showElement("button5");
    setNumber("x", 1);
    setText("go", "+" + getNumber("x"));
    if (getNumber("money") >= getNumber("b")) {
      setNumber("b", getNumber("money"));
      setNumber("a", 0);
    }
    if (getNumber("money") >= getNumber("b")) {
    while ((getNumber("money") >= 10)) {
      setNumber("money", getNumber("money") / 10);
      setNumber("a", getNumber("a") + 1);
      }
    setNumber("a", getNumber("a") + 1);
    setNumber("z", (getNumber("z") - 1.5) * (getNumber("a") / 100) + 1.5);
    setNumber("c", getNumber("c") * (1 + getNumber("a") / 100));
    }
    setNumber("money", 0);
    setNumber("money1", 0);
    setNumber("money2", 0);
    setNumber("money3", 0);
    setNumber("money4", 0);
    setNumber("money5", 0);
    setNumber("money6", 0);
    setNumber("y", 0);
    setNumber("settingcount", 0);
    setNumber("sca", 15);
    setNumber("scb", 100);
    setNumber("scc", 1100);
    setNumber("scd", 12000);
    setNumber("sce", 130000);
    setNumber("scf", 1400000);
    setNumber("scg", 20000000);
    setNumber("sch", 330000000);
    setNumber("sci", 50000000000000);
    setNumber("saa", 0);
    setNumber("sab", 0);
    setNumber("sac", 0);
    setNumber("sad", 0);
    setNumber("sae", 0);
    setNumber("saf", 0);
    setNumber("sag", 0);
    setNumber("sah", 0);
    setNumber("sai", 0);
    setNumber("uca", 100000);
    setNumber("ucb", 1000000);
    setNumber("ucc", 10000000);
    setNumber("ucd", 100000000);
    setNumber("uce", 1000000000);
    setNumber("ucf", 10000000000);
    setNumber("ucg", 100000000000);
    setNumber("uch", 10000000000000000);
    setNumber("uci", 10000000000000000000);
    setNumber("uaa", 0);
    setNumber("uab", 0);
    setNumber("uac", 0);
    setNumber("uad", 0);
    setNumber("uae", 0);
    setNumber("uaf", 0);
    setNumber("uag", 0);
    setNumber("uah", 0);
    setNumber("uai", 0);
    setNumber("bca", 10000);
    setNumber("bcb", 10000);
    setNumber("bcc", 10000);
    setNumber("baa", 0);
    setNumber("bab", 0);
    setNumber("bac", 0);
    setNumber("aaa", 0);
    setNumber("aab", 100);
    setNumber("abbb", 1000);
    setNumber("accc", 10000);
    setNumber("addd", 100000);
    setNumber("500QD", 5000000000000000000000000000000000000);
    setNumber("fag", 0);
    setNumber("Modprice", 0);
    setNumber("ics111", 100);
    setNumber("ics222", 1000);
    setNumber("ics333", 10000);
    setNumber("ics444", 100000);
    setNumber("ics555", 1000000);
    setNumber("staaa", 70000000000000000000000);
    setNumber("stbbb", 10000000000000000000000000);
    setNumber("stccc", 40000000000000000000000000000);
    setNumber("stddd", 3000000000000000000000000000000);
    setNumber("staa", 0);
    setNumber("stbb", 0);
    setNumber("stcc", 0);
    setNumber("stdd", 0);
    setNumber("utaa", 0);
    setNumber("utbb", 0);
    setNumber("utcc", 0);
    setNumber("utdd", 0);
    setNumber("utaaa", 7000000000000000);
setNumber("utbbb", 1000000000000000000);
setNumber("utccc", 4000000000000000000000);
setNumber("utddd", 300000000000000000000000);
  });
  onEvent("no", "click", function(event) {
    setText("warning", "");
    hideElement("yes");
    hideElement("no");
    hideElement("warning");
    showElement("reset4");
    showElement("money4");
    showElement("back3");
    showElement("store3");
    showElement("upgrade2");
    showElement("bonuses3");
    showElement("resetinfo");
  });
});
onEvent("sa", "click", function(event) {
  if (getNumber("money") >= getNumber("sca")) {
    plus("sca", "saa", "sa");
  }
});
onEvent("sb", "click", function(event) {
  if (getNumber("money") >= getNumber("scb")) {
    plus("scb", "sab", "sb");
  }
});
onEvent("sc", "click", function(event) {
  if (getNumber("money") >= getNumber("scc")) {
    plus("scc", "sac", "sc");
  }
});
onEvent("sd", "click", function(event) {
  if (getNumber("money") >= getNumber("scd")) {
    plus("scd", "sad", "sd");
  }
});
onEvent("se", "click", function(event) {
  if (getNumber("money") >= getNumber("sce")) {
    plus("sce", "sae", "se");
  }
});
onEvent("sf", "click", function(event) {
  if (getNumber("money") >= getNumber("scf")) {
    plus("scf", "saf", "sf");
  }
});
onEvent("sg", "click", function(event) {
  if (getNumber("money") >= getNumber("scg")) {
    plus("scg", "sag", "sg");
  }
});
onEvent("sh", "click", function(event) {
  if (getNumber("money") >= getNumber("sch")) {
    plus("sch", "sah", "sh");
  }
});
onEvent("si", "click", function(event) {
  if (getNumber("money") >= getNumber("sci")) {
    plus("sci", "sai", "si");
  }
});
onEvent("ua", "click", function(event) {
  if (getNumber("money") >= getNumber("uca")) {
    change("uca", "uaa", "ua");
  }
});
onEvent("ub", "click", function(event) {
  if (getNumber("money") >= getNumber("ucb")) {
    change("ucb", "uab", "ub");
  }
});
onEvent("uc", "click", function(event) {
  if (getNumber("money") >= getNumber("ucc")) {
    change("ucc", "uac", "uc");
  }
});
onEvent("ud", "click", function(event) {
  if (getNumber("money") >= getNumber("ucd")) {
    change("ucd", "uad", "ud");
  }
});
onEvent("ue", "click", function(event) {
  if (getNumber("money") >= getNumber("uce")) {
    change("uce", "uae", "ue");
  }
});
onEvent("uf", "click", function(event) {
  if (getNumber("money") >= getNumber("ucf")) {
    change("ucf", "uaf", "uf");
  }
});
onEvent("ug", "click", function(event) {
  if (getNumber("money") >= getNumber("ucg")) {
    change("ucg", "uag", "ug");
  }
});
onEvent("uh", "click", function(event) {
  if (getNumber("money") >= getNumber("uch")) {
    change("uch", "uah", "uh");
  }
});
onEvent("ui", "click", function(event) {
  if (getNumber("money") >= getNumber("uci")) {
    change("uci", "uai", "ui");
  }
});
onEvent("ba", "click", function(event) {
  if (getNumber("money") >= getNumber("bca")) {
    setNumber("money", getNumber("money") - getNumber("bca"));
    setNumber("money1", getNumber("money1") - getNumber("bca"));
    setNumber("money2", getNumber("money2") - getNumber("bca"));
    setNumber("money3", getNumber("money3") - getNumber("bca"));
    setNumber("money4", getNumber("money4") - getNumber("bca"));
    setNumber("money5", getNumber("money5") - getNumber("bca"));
    setNumber("money6", getNumber("money6") - getNumber("bca"));
    setNumber("bca", getNumber("bca") * 10);
    setNumber("baa", getNumber("baa") + 1);
    setNumber("sca", Math.round(getNumber("sca") * 0.99));
    setNumber("scb", Math.round(getNumber("scb") * 0.99));
    setNumber("scc", Math.round(getNumber("scc") * 0.99));
    setNumber("scd", Math.round(getNumber("scd") * 0.99));
    setNumber("sce", Math.round(getNumber("sce") * 0.99));
    setNumber("scf", Math.round(getNumber("scf") * 0.99));
    setNumber("scg", Math.round(getNumber("scg") * 0.99));
    setNumber("sch", Math.round(getNumber("sch") * 0.99));
    setNumber("sci", Math.round(getNumber("sci") * 0.99));
    setNumber("uca", Math.round(getNumber("uca") * 0.99));
    setNumber("ucb", Math.round(getNumber("ucb") * 0.99));
    setNumber("ucc", Math.round(getNumber("ucc") * 0.99));
    setNumber("ucd", Math.round(getNumber("ucd") * 0.99));
    setNumber("uce", Math.round(getNumber("uce") * 0.99));
    setNumber("ucf", Math.round(getNumber("ucf") * 0.99));
    setNumber("ucg", Math.round(getNumber("ucg") * 0.99));
    setNumber("uch", Math.round(getNumber("uch") * 0.99));
    setNumber("uci", Math.round(getNumber("uci") * 0.99));
    setNumber("bca", Math.round(getNumber("bca") * 0.99));
    setNumber("bcb", Math.round(getNumber("bcb") * 0.99));
    setNumber("bcc", Math.round(getNumber("bcc") * 0.99));
  }
});
onEvent("aa", "click", function(event) {
  if (getNumber("money") >= getNumber("bca")) {
    setNumber("money", getNumber("money") - getNumber("aab"));
    setNumber("money1", getNumber("money1") - getNumber("aab"));
    setNumber("money2", getNumber("money2") - getNumber("aab"));
    setNumber("money3", getNumber("money3") - getNumber("aab"));
    setNumber("money4", getNumber("money4") - getNumber("aab"));
    setNumber("money5", getNumber("money5") - getNumber("aab"));
    setNumber("money6", getNumber("money6") - getNumber("aab"));
    setNumber("aab", getNumber("aab") * 200000000000000000);
    setNumber("aaa", getNumber("aaa") + 1);
    setNumber("sca", Math.round(getNumber("sca") * 0.88));
    setNumber("scb", Math.round(getNumber("scb") * 0.88));
    setNumber("scc", Math.round(getNumber("scc") * 0.88));
    setNumber("scd", Math.round(getNumber("scd") * 0.88));
    setNumber("sce", Math.round(getNumber("sce") * 0.88));
    setNumber("scf", Math.round(getNumber("scf") * 0.88));
    setNumber("scg", Math.round(getNumber("scg") * 0.88));
    setNumber("sch", Math.round(getNumber("sch") * 0.88));
    setNumber("sci", Math.round(getNumber("sci") * 0.88));
    setNumber("uca", Math.round(getNumber("uca") * 0.88));
    setNumber("ucb", Math.round(getNumber("ucb") * 0.88));
    setNumber("ucc", Math.round(getNumber("ucc") * 0.88));
    setNumber("ucd", Math.round(getNumber("ucd") * 0.88));
    setNumber("uce", Math.round(getNumber("uce") * 0.88));
    setNumber("ucf", Math.round(getNumber("ucf") * 0.88));
    setNumber("ucg", Math.round(getNumber("ucg") * 0.88));
    setNumber("uch", Math.round(getNumber("uch") * 0.88));
    setNumber("uci", Math.round(getNumber("uci") * 0.88));
    setNumber("bca", Math.round(getNumber("bca") * 0.88));
    setNumber("bcb", Math.round(getNumber("bcb") * 0.88));
    setNumber("bcc", Math.round(getNumber("bcc") * 0.88));
  }
});
onEvent("ab", "click", function(event) {
  if (getNumber("money") >= getNumber("abbb")) {
    setNumber("money", getNumber("money") - getNumber("abbb"));
    setNumber("money1", getNumber("money1") - getNumber("abbb"));
    setNumber("money2", getNumber("money2") - getNumber("abbb"));
    setNumber("money3", getNumber("money3") - getNumber("abbb"));
    setNumber("money4", getNumber("money4") - getNumber("abbb"));
    setNumber("money5", getNumber("money5") - getNumber("abbb"));
    setNumber("money6", getNumber("money6") - getNumber("abbb"));
    setNumber("abbb", getNumber("bca") * 300000000000000000000000);
    setNumber("abb", getNumber("abb") + 1);
    setNumber("sca", Math.round(getNumber("sca") * 0.77));
    setNumber("scb", Math.round(getNumber("scb") * 0.77));
    setNumber("scc", Math.round(getNumber("scc") * 0.77));
    setNumber("scd", Math.round(getNumber("scd") * 0.77));
    setNumber("sce", Math.round(getNumber("sce") * 0.77));
    setNumber("scf", Math.round(getNumber("scf") * 0.77));
    setNumber("scg", Math.round(getNumber("scg") * 0.77));
    setNumber("sch", Math.round(getNumber("sch") * 0.77));
    setNumber("sci", Math.round(getNumber("sci") * 0.77));
    setNumber("uca", Math.round(getNumber("uca") * 0.77));
    setNumber("ucb", Math.round(getNumber("ucb") * 0.77));
    setNumber("ucc", Math.round(getNumber("ucc") * 0.77));
    setNumber("ucd", Math.round(getNumber("ucd") * 0.77));
    setNumber("uce", Math.round(getNumber("uce") * 0.77));
    setNumber("ucf", Math.round(getNumber("ucf") * 0.77));
    setNumber("ucg", Math.round(getNumber("ucg") * 0.77));
    setNumber("uch", Math.round(getNumber("uch") * 0.77));
    setNumber("uci", Math.round(getNumber("uci") * 0.77));
    setNumber("bca", Math.round(getNumber("bca") * 0.77));
    setNumber("bcb", Math.round(getNumber("bcb") * 0.77));
    setNumber("bcc", Math.round(getNumber("bcc") * 0.77));
  }
});
onEvent("ac", "click", function(event) {
  if (getNumber("money") >= getNumber("accc")) {
    setNumber("money", getNumber("money") - getNumber("accc"));
    setNumber("money1", getNumber("money1") - getNumber("accc"));
    setNumber("money2", getNumber("money2") - getNumber("accc"));
    setNumber("money3", getNumber("money3") - getNumber("accc"));
    setNumber("money4", getNumber("money4") - getNumber("accc"));
    setNumber("money5", getNumber("money5") - getNumber("accc"));
    setNumber("money6", getNumber("money6") - getNumber("accc"));
    setNumber("accc", getNumber("accc") * 4000000000000000000000000000000);
    setNumber("acc", getNumber("acc") + 1);
    setNumber("sca", Math.round(getNumber("sca") * 0.66));
    setNumber("scb", Math.round(getNumber("scb") * 0.66));
    setNumber("scc", Math.round(getNumber("scc") * 0.66));
    setNumber("scd", Math.round(getNumber("scd") * 0.66));
    setNumber("sce", Math.round(getNumber("sce") * 0.66));
    setNumber("scf", Math.round(getNumber("scf") * 0.66));
    setNumber("scg", Math.round(getNumber("scg") * 0.66));
    setNumber("sch", Math.round(getNumber("sch") * 0.66));
    setNumber("sci", Math.round(getNumber("sci") * 0.66));
    setNumber("uca", Math.round(getNumber("uca") * 0.66));
    setNumber("ucb", Math.round(getNumber("ucb") * 0.66));
    setNumber("ucc", Math.round(getNumber("ucc") * 0.66));
    setNumber("ucd", Math.round(getNumber("ucd") * 0.66));
    setNumber("uce", Math.round(getNumber("uce") * 0.66));
    setNumber("ucf", Math.round(getNumber("ucf") * 0.66));
    setNumber("ucg", Math.round(getNumber("ucg") * 0.66));
    setNumber("uch", Math.round(getNumber("uch") * 0.66));
    setNumber("uci", Math.round(getNumber("uci") * 0.66));
    setNumber("bca", Math.round(getNumber("bca") * 0.66));
    setNumber("bcb", Math.round(getNumber("bcb") * 0.66));
    setNumber("bcc", Math.round(getNumber("bcc") * 0.66));
  }
});
onEvent("ad", "click", function(event) {
  if (getNumber("money") >= getNumber("addd")) {
    setNumber("money", getNumber("money") - getNumber("addd"));
    setNumber("money1", getNumber("money1") - getNumber("addd"));
    setNumber("money2", getNumber("money2") - getNumber("addd"));
    setNumber("money3", getNumber("money3") - getNumber("addd"));
    setNumber("money4", getNumber("money4") - getNumber("addd"));
    setNumber("money5", getNumber("money5") - getNumber("addd"));
    setNumber("money6", getNumber("money6") - getNumber("addd"));
    setNumber("addd", getNumber("addd") * 50000000000000);
    setNumber("add", getNumber("add") + 1);
    setNumber("sca", Math.round(getNumber("sca") * 0.55));
    setNumber("scb", Math.round(getNumber("scb") * 0.55));
    setNumber("scc", Math.round(getNumber("scc") * 0.55));
    setNumber("scd", Math.round(getNumber("scd") * 0.55));
    setNumber("sce", Math.round(getNumber("sce") * 0.55));
    setNumber("scf", Math.round(getNumber("scf") * 0.55));
    setNumber("scg", Math.round(getNumber("scg") * 0.55));
    setNumber("sch", Math.round(getNumber("sch") * 0.55));
    setNumber("sci", Math.round(getNumber("sci") * 0.55));
    setNumber("uca", Math.round(getNumber("uca") * 0.55));
    setNumber("ucb", Math.round(getNumber("ucb") * 0.55));
    setNumber("ucc", Math.round(getNumber("ucc") * 0.55));
    setNumber("ucd", Math.round(getNumber("ucd") * 0.55));
    setNumber("uce", Math.round(getNumber("uce") * 0.55));
    setNumber("ucf", Math.round(getNumber("ucf") * 0.55));
    setNumber("ucg", Math.round(getNumber("ucg") * 0.55));
    setNumber("uch", Math.round(getNumber("uch") * 0.55));
    setNumber("uci", Math.round(getNumber("uci") * 0.55));
    setNumber("bca", Math.round(getNumber("bca") * 0.55));
    setNumber("bcb", Math.round(getNumber("bcb") * 0.55));
    setNumber("bcc", Math.round(getNumber("bcc") * 0.55));
  }
});
onEvent("ae", "click", function(event) {
  if (getNumber("money") >= getNumber("aeee")) {
    setNumber("money", getNumber("money") - getNumber("aeee"));
    setNumber("money1", getNumber("money1") - getNumber("aeee"));
    setNumber("money2", getNumber("money2") - getNumber("aeee"));
    setNumber("money3", getNumber("money3") - getNumber("aeee"));
    setNumber("money4", getNumber("money4") - getNumber("aeee"));
    setNumber("money5", getNumber("money5") - getNumber("aeee"));
    setNumber("money6", getNumber("money6") - getNumber("aeee"));
    setNumber("aeee", getNumber("aeee") * 1000000000000000000000000000000000);
    setNumber("aee", getNumber("aee") + 1);
    setNumber("sca", Math.round(getNumber("sca") * 0.11));
    setNumber("scb", Math.round(getNumber("scb") * 0.11));
    setNumber("scc", Math.round(getNumber("scc") * 0.11));
    setNumber("scd", Math.round(getNumber("scd") * 0.11));
    setNumber("sce", Math.round(getNumber("sce") * 0.11));
    setNumber("scf", Math.round(getNumber("scf") * 0.11));
    setNumber("scg", Math.round(getNumber("scg") * 0.11));
    setNumber("sch", Math.round(getNumber("sch") * 0.11));
    setNumber("sci", Math.round(getNumber("sci") * 0.11));
    setNumber("uca", Math.round(getNumber("uca") * 0.11));
    setNumber("ucb", Math.round(getNumber("ucb") * 0.11));
    setNumber("ucc", Math.round(getNumber("ucc") * 0.11));
    setNumber("ucd", Math.round(getNumber("ucd") * 0.11));
    setNumber("uce", Math.round(getNumber("uce") * 0.11));
    setNumber("ucf", Math.round(getNumber("ucf") * 0.11));
    setNumber("ucg", Math.round(getNumber("ucg") * 0.11));
    setNumber("uch", Math.round(getNumber("uch") * 0.11));
    setNumber("uci", Math.round(getNumber("uci") * 0.11));
    setNumber("bca", Math.round(getNumber("bca") * 0.11));
    setNumber("bcb", Math.round(getNumber("bcb") * 0.11));
    setNumber("bcc", Math.round(getNumber("bcc") * 0.11));
  }
});
onEvent("bb", "click", function(event ) {
  if (getNumber("money") >= getNumber("bcb")) {
    if (getNumber("bab") < 100) {
      buy("bcb", "bab");
      setNumber("bab", getNumber("bab") + 1);
      setNumber("bcb", Math.round(getNumber("bcb") * 10));
      setNumber("f", getNumber("f") - 1);
    } else {
      setText("bab", "Max");
    }
  }
});
function plus(cost, amount, button) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
  setNumber(cost, Math.round(getNumber(cost) * getNumber("z")));
  setNumber(amount, getNumber(amount) + 1);
  setNumber("x", getNumber("x") + getNumber(button));
  setNumber("go", getNumber("y") + getNumber("x"));
}
function change(cost, amount, button) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
  setNumber(cost, Math.round(getNumber(cost) * getNumber("z")));
  setNumber(amount, getNumber(amount) + 1);
  setNumber("y", getNumber("y") + getNumber(button));
}
function buy(cost, amount) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
}
onEvent("button2", "click", function(event ) {
  if (getNumber("money") >= getNumber("500QD")) {
    setNumber("fag", getNumber("fag") + 1);
    setNumber("money", getNumber("money") - getNumber("500QD"));
    setNumber("money1", getNumber("money1") - getNumber("500QD"));
    setNumber("money2", getNumber("money2") - getNumber("500QD"));
    setNumber("money3", getNumber("money3") - getNumber("500QD"));
    setNumber("money4", getNumber("money4") - getNumber("500QD"));
    setNumber("money5", getNumber("money5") - getNumber("500QD"));
    setNumber("money6", getNumber("money6") - getNumber("500QD"));
  }
});
onEvent("sau", "click", function(event) {
  if (getNumber("money") >= getNumber("bca")) {
    setNumber("money", getNumber("money") - getNumber("Modprice"));
    setNumber("money1", getNumber("money1") - getNumber("Modprice"));
    setNumber("money2", getNumber("money2") - getNumber("Modprice"));
    setNumber("money3", getNumber("money3") - getNumber("Modprice"));
    setNumber("money4", getNumber("money4") - getNumber("Modprice"));
    setNumber("money5", getNumber("money5") - getNumber("Modprice"));
    setNumber("money6", getNumber("money6") - getNumber("Modprice"));
    setNumber("Modprice", getNumber("Modprice") * 1);
    setNumber("Modcount", getNumber("Modcount") + 1);
    setNumber("sca", Math.round(getNumber("sca") * 0.01));
    setNumber("scb", Math.round(getNumber("scb") * 0.01));
    setNumber("scc", Math.round(getNumber("scc") * 0.01));
    setNumber("scd", Math.round(getNumber("scd") * 0.01));
    setNumber("sce", Math.round(getNumber("sce") * 0.01));
    setNumber("scf", Math.round(getNumber("scf") * 0.01));
    setNumber("scg", Math.round(getNumber("scg") * 0.01));
    setNumber("sch", Math.round(getNumber("sch") * 0.01));
    setNumber("sci", Math.round(getNumber("sci") * 0.01));
    setNumber("uca", Math.round(getNumber("uca") * 0.01));
    setNumber("ucb", Math.round(getNumber("ucb") * 0.01));
    setNumber("ucc", Math.round(getNumber("ucc") * 0.01));
    setNumber("ucd", Math.round(getNumber("ucd") * 0.01));
    setNumber("uce", Math.round(getNumber("uce") * 0.01));
    setNumber("ucf", Math.round(getNumber("ucf") * 0.01));
    setNumber("ucg", Math.round(getNumber("ucg") * 0.01));
    setNumber("uch", Math.round(getNumber("uch") * 0.01));
    setNumber("uci", Math.round(getNumber("uci") * 0.01));
    setNumber("bca", Math.round(getNumber("bca") * 0.01));
    setNumber("bcb", Math.round(getNumber("bcb") * 0.01));
    setNumber("bcc", Math.round(getNumber("bcc") * 0.01));
  }
});
onEvent("ics1", "click", function(event ) {
  if (getNumber("money") >= getNumber("ics111")) {
    if (getNumber("ics11") < 100) {
      buy("ics111", "ics11");
      setNumber("ics11", getNumber("ics11") + 1);
      setNumber("ics111", Math.round(getNumber("ics111") * 200000000000000000));
      setNumber("f", getNumber("f") - 1);
    } else {
      setText("ics11", "Max");
    }
  }
});
function plus(cost, amount, button) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
  setNumber("id", getNumber("money5") - getNumber(cost));
  setNumber("id", getNumber("money6") - getNumber(cost));
  setNumber(cost, Math.round(getNumber(cost) * getNumber("z")));
  setNumber(amount, getNumber(amount) + 1);
  setNumber("x", getNumber("x") + getNumber(button));
  setNumber("go", getNumber("y") + getNumber("x"));
}
function change(cost, amount, button) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
  setNumber(cost, Math.round(getNumber(cost) * getNumber("z")));
  setNumber(amount, getNumber(amount) + 1);
  setNumber("y", getNumber("y") + getNumber(button));
}
function buy(cost, amount) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
}
onEvent("button2", "click", function(event ) {
  if (getNumber("money") >= getNumber("500QD")) {
    setNumber("fag", getNumber("fag") + 1);
    setNumber("money", getNumber("money") - getNumber("500QD"));
    setNumber("money1", getNumber("money1") - getNumber("500QD"));
    setNumber("money2", getNumber("money2") - getNumber("500QD"));
    setNumber("money3", getNumber("money3") - getNumber("500QD"));
    setNumber("money4", getNumber("money4") - getNumber("500QD"));
    setNumber("money5", getNumber("money5") - getNumber("500QD"));
    setNumber("money6", getNumber("money6") - getNumber("500QD"));
  }
});
onEvent("ics2", "click", function(event ) {
  if (getNumber("money") >= getNumber("ics222")) {
    if (getNumber("ics22") < 100) {
      buy("ics222", "ics22");
      setNumber("ics22", getNumber("ics22") + 1);
      setNumber("ics222", Math.round(getNumber("ics222") * 800000000000000000000));
      setNumber("f", getNumber("f") - 1);
    } else {
      setText("ics22", "Max");
    }
  }
});
function plus(cost, amount, button) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
  setNumber(cost, Math.round(getNumber(cost) * getNumber("z")));
  setNumber(amount, getNumber(amount) + 1);
  setNumber("x", getNumber("x") + getNumber(button));
  setNumber("go", getNumber("y") + getNumber("x"));
}
function change(cost, amount, button) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
  setNumber(cost, Math.round(getNumber(cost) * getNumber("z")));
  setNumber(amount, getNumber(amount) + 1);
  setNumber("y", getNumber("y") + getNumber(button));
}
function buy(cost, amount) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
}
onEvent("button2", "click", function(event ) {
  if (getNumber("money") >= getNumber("500QD")) {
    setNumber("fag", getNumber("fag") + 1);
    setNumber("money", getNumber("money") - getNumber("500QD"));
    setNumber("money1", getNumber("money1") - getNumber("500QD"));
    setNumber("money2", getNumber("money2") - getNumber("500QD"));
    setNumber("money3", getNumber("money3") - getNumber("500QD"));
    setNumber("money4", getNumber("money4") - getNumber("500QD"));
    setNumber("money5", getNumber("money5") - getNumber("500QD"));
    setNumber("money6", getNumber("money6") - getNumber("500QD"));
  }
});
onEvent("ics3", "click", function(event ) {
  if (getNumber("money") >= getNumber("ics333")) {
    if (getNumber("ics33") < 100) {
      buy("ics333", "ics33");
      setNumber("ics33", getNumber("ics33") + 1);
      setNumber("ics333", Math.round(getNumber("ics333") * 300000000000000000000000));
      setNumber("f", getNumber("f") - 1);
    } else {
      setText("ics33", "Max");
    }
  }
});
function plus(cost, amount, button) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
  setNumber(cost, Math.round(getNumber(cost) * getNumber("z")));
  setNumber(amount, getNumber(amount) + 1);
  setNumber("x", getNumber("x") + getNumber(button));
  setNumber("go", getNumber("y") + getNumber("x"));
}
function change(cost, amount, button) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
  setNumber(cost, Math.round(getNumber(cost) * getNumber("z")));
  setNumber(amount, getNumber(amount) + 1);
  setNumber("y", getNumber("y") + getNumber(button));
}
function buy(cost, amount) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
}
onEvent("button2", "click", function(event ) {
  if (getNumber("money") >= getNumber("500QD")) {
    setNumber("fag", getNumber("fag") + 1);
    setNumber("money", getNumber("money") - getNumber("500QD"));
    setNumber("money1", getNumber("money1") - getNumber("500QD"));
    setNumber("money2", getNumber("money2") - getNumber("500QD"));
    setNumber("money3", getNumber("money3") - getNumber("500QD"));
    setNumber("money4", getNumber("money4") - getNumber("500QD"));
    setNumber("money5", getNumber("money5") - getNumber("500QD"));
  setNumber("money6", getNumber("money6") - getNumber("500QD"));
  }
});
onEvent("ics4", "click", function(event ) {
  if (getNumber("money") >= getNumber("ics444")) {
    if (getNumber("ics44") < 100) {
      buy("ics444", "ics44");
      setNumber("ics44", getNumber("ics44") + 1);
      setNumber("ics444", Math.round(getNumber("ics444") * 4000000000000000000000000000000));
      setNumber("f", getNumber("f") - 1);
    } else {
      setText("ics44", "Max");
    }
  }
});
function plus(cost, amount, button) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
  setNumber(cost, Math.round(getNumber(cost) * getNumber("z")));
  setNumber(amount, getNumber(amount) + 1);
  setNumber("x", getNumber("x") + getNumber(button));
  setNumber("go", getNumber("y") + getNumber("x"));
}
function change(cost, amount, button) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
  setNumber(cost, Math.round(getNumber(cost) * getNumber("z")));
  setNumber(amount, getNumber(amount) + 1);
  setNumber("y", getNumber("y") + getNumber(button));
}
function buy(cost, amount) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
}
onEvent("button2", "click", function(event ) {
  if (getNumber("money") >= getNumber("500QD")) {
    setNumber("fag", getNumber("fag") + 1);
    setNumber("money", getNumber("money") - getNumber("500QD"));
    setNumber("money1", getNumber("money1") - getNumber("500QD"));
    setNumber("money2", getNumber("money2") - getNumber("500QD"));
    setNumber("money3", getNumber("money3") - getNumber("500QD"));
    setNumber("money4", getNumber("money4") - getNumber("500QD"));
    setNumber("money5", getNumber("money5") - getNumber("500QD"));
  setNumber("money6", getNumber("money6") - getNumber("500QD"));
  }
});
onEvent("ics5", "click", function(event ) {
  if (getNumber("money") >= getNumber("ics555")) {
    if (getNumber("ics55") < 100) {
      buy("ics555", "ics55");
    } else {
      setText("ics55", "Max");
    }
  }
});
function plus(cost, amount, button) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
  setNumber(cost, Math.round(getNumber(cost) * getNumber("z")));
  setNumber(amount, getNumber(amount) + 1);
  setNumber("x", getNumber("x") + getNumber(button));
  setNumber("go", getNumber("y") + getNumber("x"));
}
function change(cost, amount, button) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
  setNumber(cost, Math.round(getNumber(cost) * getNumber("z")));
  setNumber(amount, getNumber(amount) + 1);
  setNumber("y", getNumber("y") + getNumber(button));
}
function buy(cost, amount) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber("money5", getNumber("money5") - getNumber(cost));
  setNumber("money6", getNumber("money6") - getNumber(cost));
}
onEvent("button2", "click", function(event ) {
  if (getNumber("money") >= getNumber("500QD")) {
    setNumber("fag", getNumber("fag") + 1);
    setNumber("money", getNumber("money") - getNumber("500QD"));
    setNumber("money1", getNumber("money1") - getNumber("500QD"));
    setNumber("money2", getNumber("money2") - getNumber("500QD"));
    setNumber("money3", getNumber("money3") - getNumber("500QD"));
    setNumber("money4", getNumber("money4") - getNumber("500QD"));
    setNumber("money5", getNumber("money5") - getNumber("500QD"));
    setNumber("money6", getNumber("money6") - getNumber("500QD"));
  }
});
onEvent("sta", "click", function(event) {
  if (getNumber("money") >= getNumber("staaa")) {
    plus("staaa", "staa", "sta");
  }
});
onEvent("stb", "click", function(event) {
  if (getNumber("money") >= getNumber("stbbb")) {
    plus("stbbb", "stbb", "stb");
  }
});
onEvent("stc", "click", function(event) {
  if (getNumber("money") >= getNumber("stccc")) {
    plus("stccc", "stcc", "stc");
  }
});
onEvent("std", "click", function(event) {
  if (getNumber("money") >= getNumber("stddd")) {
    plus("stddd", "stdd", "std");
  }
});
onEvent("uta", "click", function(event) {
  if (getNumber("money") >= getNumber("utaaa")) {
    change("utaaa", "utaa", "uta");
  }
});
onEvent("utb", "click", function(event) {
  if (getNumber("money") >= getNumber("utbbb")) {
    change("utbbb", "utbb", "utb");
  }
});
onEvent("utc", "click", function(event) {
  if (getNumber("money") >= getNumber("utccc")) {
    change("utccc", "utcc", "utc");
  }
});
onEvent("utd", "click", function(event) {
  if (getNumber("money") >= getNumber("utddd")) {
    change("utddd", "utdd", "utd");
  }
});
if (getNumber("money") == 100) {
  showElement("label3");
  timedLoop(40, function() {
    setPosition("label3", getXPosition("label3"), getYPosition("label3") - 1);
  });
  setTimeout(function() {
    hideElement("label3");
    stopTimedLoop();
  }, 1000);
}
button("id", "text");
