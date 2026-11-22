// Search in the LINA docs (22. 11. 2026). Self-contained: reads /search.json from this site, no
// third-party script, no tracking. Shown on /lina/ pages only. Words match in any order, without
// regard to case or accents; a hit in a page or section title ranks first. "/" focuses the box.
(function () {
  if (!/^\/lina(\/|$)/.test(location.pathname)) return;
  // #240 (22. 11. 2026): the Czech docs live under /lina/cs/. Search stays in the language of the page;
  // the flags switch to the same page in the other language.
  var CS = /^\/lina\/cs(\/|$)/.test(location.pathname);
  var T = CS
    ? { placeholder: 'Hledat v dokumentaci LINA (stiskněte /)', label: 'Hledat v dokumentaci LINA', none: 'Nic nenalezeno.' }
    : { placeholder: 'Search the LINA docs (press /)', label: 'Search the LINA docs', none: 'Nothing found.' };
  var inLang = function (u) { return /^\/lina\/cs\//.test(u) === CS; };
  var page = location.pathname.replace(/^\/lina\/(cs\/)?/, '');
  var fold = function (s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); };
  var esc = function (s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var index = null, loading = null;
  function load() {
    if (!loading) loading = fetch('/search.json').then(function (r) { return r.json(); }).then(function (xs) {
      index = xs.filter(function (x) { return inLang(x.u); }).map(function (x) { return { x: x, head: fold(x.t + ' ' + x.s), body: fold(x.c) }; });
    });
    return loading;
  }
  function snippet(text, words) {
    var f = fold(text), at = -1;
    for (var i = 0; i < words.length && at < 0; i++) at = f.indexOf(words[i]);
    var from = Math.max(0, at - 60);
    if (from > 0) { var sp = text.indexOf(' ', from); if (sp >= 0 && sp < at) from = sp + 1; }
    var part = text.slice(from, from + 200);
    // Mark the words where they stand, also when the query is typed without accents ("presto" → "Přesto"):
    // fold the part character by character, so positions in the folded text match the original.
    var folded = Array.prototype.map.call(part, function (ch) { return fold(ch).charAt(0) || ch; }).join('');
    var marks = [];
    words.forEach(function (w) {
      if (w.length < 2) return;
      for (var i = folded.indexOf(w); i >= 0; i = folded.indexOf(w, i + w.length)) marks.push([i, i + w.length]);
    });
    marks.sort(function (a, b) { return a[0] - b[0]; });
    var out = '', at = 0;
    marks.forEach(function (m) {
      if (m[0] < at) return;
      out += esc(part.slice(at, m[0])) + '<mark>' + esc(part.slice(m[0], m[1])) + '</mark>';
      at = m[1];
    });
    out += esc(part.slice(at));
    return (from > 0 ? '… ' : '') + out + (from + 200 < text.length ? ' …' : '');
  }
  function search(q) {
    var words = fold(q).split(/\s+/).filter(Boolean);
    if (words.length === 0 || !index) return [];
    var hits = [];
    index.forEach(function (e) {
      var score = 0;
      for (var i = 0; i < words.length; i++) {
        var inHead = e.head.indexOf(words[i]) >= 0, inBody = e.body.indexOf(words[i]) >= 0;
        if (!inHead && !inBody) return;
        score += (inHead ? 10 : 0) + (inBody ? 1 : 0);
      }
      hits.push({ e: e, score: score });
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    return hits.slice(0, 12).map(function (h) { return { x: h.e.x, words: words }; });
  }
  // The index makes anchors with Liquid's slugify; kramdown keeps a double hyphen ("left — move" →
  // "left--move"). Land on the heading anyway: compare ids with hyphens collapsed.
  function landOnHash() {
    var h = decodeURIComponent(location.hash.slice(1));
    if (!h || document.getElementById(h)) return;
    var all = document.querySelectorAll('[id]');
    for (var i = 0; i < all.length; i++) if (all[i].id.replace(/-+/g, '-') === h) { all[i].scrollIntoView(); return; }
  }
  function init() {
    landOnHash();
    var body = document.querySelector('.markdown-body');
    if (!body) return;
    var style = document.createElement('style');
    style.textContent = '.lina-search{position:relative;margin:0 0 24px}.lina-search input{width:100%;padding:8px 12px;font-size:16px;border:1px solid #d0d7de;border-radius:6px}' +
      '.lina-search ol{position:absolute;z-index:10;left:0;right:0;margin:4px 0 0;padding:0;list-style:none;background:#fff;border:1px solid #d0d7de;border-radius:6px;box-shadow:0 8px 24px rgba(140,149,159,.2);max-height:70vh;overflow:auto}' +
      '.lina-search li{margin:0;padding:8px 12px;border-bottom:1px solid #eaeef2}.lina-search li:last-child{border-bottom:0}.lina-search li.on{background:#f6f8fa}' +
      '.lina-search li a{font-weight:600}.lina-search li small{display:block;color:#57606a;margin-top:2px}.lina-search .none{color:#57606a}' +
      '.lina-lang{float:right;margin:-44px 0 0;font-size:14px}.lina-lang a,.lina-lang span{margin-left:12px;white-space:nowrap}.lina-lang span{font-weight:600}';
    document.head.appendChild(style);
    var box = document.createElement('div');
    box.className = 'lina-search';
    box.setAttribute('role', 'search');
    box.innerHTML = '<input type="search" placeholder="' + T.placeholder + '" aria-label="' + T.label + '" autocomplete="off"><ol hidden></ol>';
    var header = body.querySelector('h1');
    body.insertBefore(box, header && header.parentNode === body ? header.nextSibling : body.firstChild);
    var lang = document.createElement('nav');
    lang.className = 'lina-lang';
    lang.setAttribute('aria-label', CS ? 'Jazyk' : 'Language');
    var en = '/lina/' + page, cs = '/lina/cs/' + page; // headings differ by language, so no anchor
    lang.innerHTML = CS
      ? '<a href="' + esc(en) + '" hreflang="en" lang="en">🇬🇧 English</a><span>🇨🇿 Česky</span>'
      : '<span>🇬🇧 English</span><a href="' + esc(cs) + '" hreflang="cs" lang="cs">🇨🇿 Česky</a>';
    body.insertBefore(lang, box);
    var input = box.querySelector('input'), list = box.querySelector('ol'), active = -1, results = [];
    function render() {
      results = search(input.value);
      active = results.length > 0 ? 0 : -1;
      if (input.value.trim() === '') { list.hidden = true; return; }
      list.innerHTML = results.length === 0 ? '<li class="none">' + T.none + '</li>' : results.map(function (r, i) {
        return '<li' + (i === 0 ? ' class="on"' : '') + '><a href="' + esc(r.x.u) + '">' + esc(r.x.t) + (r.x.s ? ' › ' + esc(r.x.s) : '') + '</a><small>' + snippet(r.x.c, r.words) + '</small></li>';
      }).join('');
      list.hidden = false;
    }
    function mark() { Array.prototype.forEach.call(list.children, function (li, i) { li.className = i === active ? 'on' : ''; }); }
    input.addEventListener('focus', function () { load().then(render); });
    input.addEventListener('input', function () { load().then(render); });
    input.addEventListener('keydown', function (ev) {
      if (ev.key === 'ArrowDown' && results.length) { active = (active + 1) % results.length; mark(); ev.preventDefault(); }
      else if (ev.key === 'ArrowUp' && results.length) { active = (active - 1 + results.length) % results.length; mark(); ev.preventDefault(); }
      else if (ev.key === 'Enter' && active >= 0) { location.href = results[active].x.u; }
      else if (ev.key === 'Escape') { input.value = ''; list.hidden = true; }
    });
    document.addEventListener('click', function (ev) { if (!box.contains(ev.target)) list.hidden = true; });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === '/' && document.activeElement !== input && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) { input.focus(); ev.preventDefault(); }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
