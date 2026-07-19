:root{
  --ink:#0B1329;
  --ink - 2:#101C3D;
  --ink - 3:#172A52;
  --marble: #F8F5F0;
  --marble - 2: #E9DFC8;
  --gold: #D4AF37;
  --gold - light: #E8CE7A;
  --gold - deep: #C5A880;
  --rose: #b9836f;
  --woody:#7a5c3e;
  --aquatic:#7f9c94;
  --ink - text:#020617;
  --cream - text: #F8F5F0;
  --muted - cream: rgba(248, 245, 240, 0.62);
  --muted - ink: rgba(2, 6, 23, 0.6);
  --radius: 2px;
  --maxw: 1180px;
}
  * { box- sizing: border - box;}
  html{ scroll - behavior: smooth; }
@media(prefers - reduced - motion: reduce) {
    html{ scroll - behavior: auto; }
    * { animation- duration: 0.001ms!important; animation - iteration - count: 1!important; transition - duration: 0.001ms!important;
}
  }
  body{
  margin: 0;
  background: var(--marble);
  color: var(--ink - text);
  font - family: 'Jost', sans - serif;
  font - weight: 400;
  -webkit - font - smoothing: antialiased;
}
h1, h2, h3,.display{
  font - family: 'Cormorant Garamond', serif;
  font - weight: 500;
  margin: 0;
}
  a{ color: inherit; }
  .wrap{ max - width: var(--maxw); margin: 0 auto; padding: 0 28px; }
  .eyebrow{
  font - family: 'Jost', sans - serif;
  text - transform: uppercase;
  letter - spacing: 0.28em;
  font - size: 11px;
  font - weight: 500;
  color: var(--gold - deep);
}
  .eyebrow.on - ink{ color: var(--gold - light); }
  button{ font - family: inherit; }

/* ===== NAV ===== */
header.site{
  position: fixed; top: 0; left: 0; right: 0; z - index: 50;
  background: rgba(14, 21, 18, 0.86);
  backdrop - filter: blur(10px);
  border - bottom: 1px solid rgba(201, 162, 75, 0.25);
}
  .nav{
  max - width: var(--maxw); margin: 0 auto; padding: 16px 28px;
  display: flex; align - items: center; justify - content: space - between;
}
  .logo{
  font - family: 'Cormorant Garamond', serif;
  font - size: 20px; letter - spacing: 0.14em;
  color: var(--cream - text);
  text - transform: uppercase;
  display: flex; align - items: center; gap: 10px;
}
  .logo.mark{ color: var(--gold); font - size: 18px; }
nav.links{ display: flex; gap: 30px; }
nav.links a{
  color: var(--muted - cream);
  text - decoration: none;
  font - size: 13px;
  letter - spacing: 0.06em;
  text - transform: uppercase;
  transition:color .25s ease;
}
nav.links a: hover, nav.links a: focus - visible{ color: var(--gold - light); }
  .nav - cta{
  display: inline - block;
  padding: 10px 20px;
  border: 1px solid var(--gold);
  color: var(--gold - light);
  text - decoration: none;
  font - size: 12px;
  letter - spacing: 0.14em;
  text - transform: uppercase;
  transition:background .25s ease, color .25s ease;
}
  .nav - cta: hover, .nav - cta: focus - visible{ background: var(--gold); color: var(--ink); }
  .menu - toggle{ display: none; background: none; border: none; color: var(--cream - text); cursor: pointer; }

a: focus - visible, button: focus - visible, input: focus - visible, select: focus - visible, textarea: focus - visible{
  outline: 2px solid var(--gold);
  outline - offset: 3px;
}

  /* ===== HERO ===== */
  .hero{
  background: radial - gradient(120 % 90 % at 80 % -10 %, #1c2b24 0 %, var(--ink) 55 %, #0a0f0c 100 %);
  color: var(--cream - text);
  padding: 168px 0 90px;
  position: relative;
  overflow: hidden;
}
  .hero.wrap{
  display: grid;
  grid - template - columns: 1.1fr 0.9fr;
  gap: 40px;
  align - items: center;
}
  .hero h1{
  font - size: clamp(42px, 6vw, 74px);
  line - height: 1.02;
  margin: 18px 0 22px;
  letter - spacing: 0.005em;
}
  .hero h1 em{ font - style: italic; color: var(--gold - light); }
  .hero p.sub{
  font - size: 17px;
  line - height: 1.65;
  color: var(--muted - cream);
  max - width: 460px;
  margin - bottom: 34px;
}
  .cta - row{ display: flex; gap: 16px; flex - wrap: wrap; align - items: center; }
  .btn - primary{
  display: inline - block;
  background: var(--gold);
  color: var(--ink);
  text - decoration: none;
  padding: 15px 30px;
  font - size: 12.5px;
  letter - spacing: 0.14em;
  text - transform: uppercase;
  font - weight: 500;
  border: 1px solid var(--gold);
  transition:transform .2s ease, background .2s ease;
}
  .btn - primary: hover, .btn - primary: focus - visible{ background: var(--gold - light); transform: translateY(-1px); }
  .btn - ghost{
  display: inline - block;
  color: var(--cream - text);
  text - decoration: none;
  padding: 15px 4px;
  font - size: 12.5px;
  letter - spacing: 0.12em;
  text - transform: uppercase;
  border - bottom: 1px solid rgba(248, 245, 240, 0.4);
}
  .btn - ghost: hover, .btn - ghost: focus - visible{ border - color: var(--gold - light); color: var(--gold - light); }

  .hero - bottle - stage{
  display: flex; align - items: center; justify - content: center;
  position: relative;
}
  .hero - bottle - stage svg{ width: 100 %; max - width: 300px; height: auto; }
  .foil - label - text{ font - family: 'Jost', sans - serif; }
  .label - shimmer{
  animation: shimmer 3.2s ease -in -out infinite;
}
@keyframes shimmer{
  0 % { opacity: 0.55; }
  50 % { opacity: 1; }
  100 % { opacity: 0.55; }
}
  .label - rise{ animation: rise 1.1s cubic - bezier(.2, .8, .2, 1) both; animation - delay: .2s; }
@keyframes rise{
    from{ opacity: 0; transform: translateY(10px); }
    to{ opacity: 1; transform: translateY(0); }
}

  /* ===== SECTION shared ===== */
  section{ padding: 96px 0; }
  .section - head{ max - width: 640px; margin - bottom: 56px; }
  .section - head h2{ font - size: clamp(30px, 4vw, 44px); margin - top: 12px; line - height: 1.08; }
  .section - head p{ color: var(--muted - ink); font - size: 15.5px; line - height: 1.6; margin - top: 16px; max - width: 520px; }
  .on - ink.section - head p{ color: var(--muted - cream); }

  /* ===== EXPERIENCE ===== */
  .experience{ background: var(--marble); }
  .counter{
  display: grid;
  grid - template - columns: repeat(4, 1fr);
  gap: 0;
  border - top: 1px solid var(--marble - 2);
}
  .counter - item{
  padding: 34px 26px;
  border - right: 1px solid var(--marble - 2);
  border - bottom: 1px solid var(--marble - 2);
  position: relative;
}
  .counter - item: last - child{ border - right: none; }
  .counter - item.glyph{ width: 34px; height: 34px; margin - bottom: 22px; }
  .counter - item h3{ font - size: 22px; margin - bottom: 10px; }
  .counter - item p{ font - size: 14px; line - height: 1.6; color: var(--muted - ink); }
  .counter - item.tag{
  position: absolute; top: 34px; right: 26px;
  font - size: 11px; letter - spacing: 0.14em; text - transform: uppercase; color: var(--gold - deep);
}

  /* ===== BOOTH AESTHETIC ===== */
  .booth{ background: var(--ink); color: var(--cream - text); }
  .swatch - grid{
  display: grid;
  grid - template - columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(201, 162, 75, 0.22);
  border: 1px solid rgba(201, 162, 75, 0.22);
}
  .swatch{
  background: var(--ink);
  padding: 30px 22px;
  min - height: 170px;
  display: flex; flex - direction: column; justify - content: space - between;
}
  .swatch.swatch - name{ font - family: 'Cormorant Garamond', serif; font - size: 20px; color: var(--gold - light); }
  .swatch p{ font - size: 13px; color: var(--muted - cream); line - height: 1.55; margin - top: 10px; }
  .swatch - chip{ width: 26px; height: 26px; border - radius: 50 %; border: 1px solid rgba(201, 162, 75, 0.5); }

  /* ===== PACKAGES ===== */
  .packages{ background: var(--marble); }
  .config - bar{
  display: flex; gap: 34px; flex - wrap: wrap; align - items: center;
  padding: 20px 26px;
  border: 1px solid var(--marble - 2);
  background: #F1EBDD;
  margin - bottom: 46px;
}
  .toggle - group{ display: flex; align - items: center; gap: 14px; }
  .toggle - group.label{ font - size: 12px; letter - spacing: 0.1em; text - transform: uppercase; color: var(--muted - ink); }
  .toggle{
  display: flex; border: 1px solid var(--ink - text); overflow: hidden;
}
  .toggle button{
  background: transparent; border: none; padding: 9px 16px; font - size: 13px; cursor: pointer;
  color: var(--ink - text); transition:background .2s ease, color .2s ease;
}
  .toggle button.active{ background: var(--ink - text); color: var(--marble); }
  .toggle button + button{ border - left: 1px solid var(--ink - text); }

  .package - grid{
  display: grid;
  grid - template - columns: repeat(3, 1fr);
  gap: 26px;
}
  .pkg - card{
  background: #FDFBF7;
  border: 1px solid var(--marble - 2);
  padding: 34px 28px 30px;
  position: relative;
  display: flex; flex - direction: column;
}
  .pkg - card.popular{ border - color: var(--gold); box - shadow: 0 0 0 1px var(--gold); }
  .popular - flag{
  position: absolute; top: 0; right: 0;
  background: var(--gold); color: var(--ink);
  font - size: 10.5px; letter - spacing: 0.12em; text - transform: uppercase;
  padding: 6px 12px;
}
  .pkg - card h3{ font - size: 26px; }
  .pkg - card.bottle - count{ font - size: 13px; color: var(--muted - ink); margin - top: 6px; letter - spacing: 0.03em; }
  .pkg - card.price{
  font - family: 'Cormorant Garamond', serif;
  font - size: 42px; margin - top: 22px; color: var(--ink - text);
}
  .pkg - card.per - guest{ font - size: 12.5px; color: var(--muted - ink); margin - top: 2px; margin - bottom: 22px; }
  .pkg - card ul{ list - style: none; padding: 0; margin: 0 0 26px; }
  .pkg - card li{
  font - size: 13.5px; line - height: 1.7; padding - left: 16px; position: relative; color: var(--ink - text);
}
  .pkg - card li::before{
  content: "—"; position: absolute; left: 0; color: var(--gold - deep);
}
  .pkg - card li.free{ color: var(--gold - deep); font - weight: 500; }
  .pkg - card.choose{
  margin - top: auto;
  text - align: center;
  padding: 13px;
  border: 1px solid var(--ink - text);
  background: none;
  font - size: 12.5px; letter - spacing: 0.1em; text - transform: uppercase;
  cursor: pointer;
  transition:background .2s ease, color .2s ease;
  text - decoration: none;
  display: block;
  color: var(--ink - text);
}
  .pkg - card.choose: hover, .pkg - card.choose: focus - visible{ background: var(--ink - text); color: var(--marble); }

  /* ===== SCENT MENU ===== */
  .menu - section{ background: var(--ink); color: var(--cream - text); }
  .menu - board{
  border: 1px solid var(--gold);
  padding: 50px;
  background: linear - gradient(180deg, rgba(201, 162, 75, 0.05), transparent 40 %);
}
  .menu - board - head{ text - align: center; margin - bottom: 40px; }
  .menu - board - head.display{ font - size: 32px; color: var(--gold - light); }
  .menu - columns{
  display: grid; grid - template - columns: repeat(3, 1fr); gap: 40px;
}
  .menu - col h4{
  font - size: 12px; letter - spacing: 0.18em; text - transform: uppercase; color: var(--gold);
  padding - bottom: 12px; border - bottom: 1px solid rgba(201, 162, 75, 0.3); margin - bottom: 16px;
}
  .menu - col.scent{
  display: flex; justify - content: space - between; align - items: baseline;
  padding: 10px 0; border - bottom: 1px dotted rgba(248, 245, 240, 0.16);
  font - family: 'Cormorant Garamond', serif; font - size: 19px;
}
  .menu - col.scent.dot{ width: 6px; height: 6px; border - radius: 50 %; display: inline - block; margin - right: 8px; }

  /* ===== PROCESS ===== */
  .process{ background: var(--marble); }
  .process - list{ border - top: 1px solid var(--marble - 2); }
  .process - item{
  display: grid; grid - template - columns: 70px 1fr; gap: 24px;
  padding: 26px 0; border - bottom: 1px solid var(--marble - 2);
  align - items: baseline;
}
  .process - item.num{ font - family: 'Cormorant Garamond', serif; font - size: 32px; color: var(--gold - deep); }
  .process - item h3{ font - size: 19px; margin - bottom: 6px; }
  .process - item p{ font - size: 14px; color: var(--muted - ink); line - height: 1.6; max - width: 560px; }

  /* ===== BOOKING ===== */
  .book{ background: #F1EBDD; }
  .book.wrap{ display: grid; grid - template - columns: 1fr 0.85fr; gap: 60px; align - items: start; }
form.booking{ display: flex; flex - direction: column; gap: 18px; }
  .field{ display: flex; flex - direction: column; gap: 7px; }
  .field - row{ display: grid; grid - template - columns: 1fr 1fr; gap: 18px; }
  label{ font - size: 11.5px; letter - spacing: 0.1em; text - transform: uppercase; color: var(--muted - ink); }
input, select, textarea{
  font - family: 'Jost', sans - serif;
  font - size: 15px;
  padding: 12px 14px;
  border: 1px solid var(--marble - 2);
  background: #fff;
  color: var(--ink - text);
}
  textarea{ resize: vertical; min - height: 80px; }
  .submit - row{ display: flex; gap: 14px; flex - wrap: wrap; margin - top: 8px; align - items: center; }
  .btn - dark{
  background: var(--ink - text); color: var(--marble); border: 1px solid var(--ink - text);
  padding: 15px 30px; font - size: 12.5px; letter - spacing: 0.12em; text - transform: uppercase; cursor: pointer;
  text - decoration: none; display: inline - block;
}
  .btn - dark: hover, .btn - dark: focus - visible{ background: transparent; color: var(--ink - text); }
  .btn - outline{
  background: none; color: var(--ink - text); border: 1px solid var(--ink - text);
  padding: 15px 24px; font - size: 12.5px; letter - spacing: 0.12em; text - transform: uppercase; cursor: pointer;
}
  .btn - outline: hover, .btn - outline: focus - visible{ background: var(--ink - text); color: var(--marble); }
  .form - note{ font - size: 12.5px; color: var(--muted - ink); line - height: 1.6; }
  .summary - box{
  margin - top: 16px; padding: 16px 18px; border: 1px dashed var(--marble - 2);
  font - size: 13px; color: var(--ink - text); line - height: 1.7; display: none;
}
  .summary - box.show{ display: block; }

  /* live preview */
  .preview - panel{
  background: var(--ink); color: var(--cream - text);
  padding: 44px 34px;
  position: sticky; top: 110px;
  display: flex; flex - direction: column; align - items: center;
}
  .preview - panel.eyebrow{ align - self: flex - start; }
  .preview - panel svg{ width: 100 %; max - width: 230px; margin: 26px 0 18px; }
  .preview - panel.hint{ font - size: 12.5px; color: var(--muted - cream); text - align: center; max - width: 230px; line - height: 1.6; }

  /* ===== FOOTER ===== */
  footer{ background: var(--ink); color: var(--muted - cream); padding: 70px 0 34px; }
  .footer - grid{ display: grid; grid - template - columns: 1.4fr 1fr 1fr; gap: 40px; margin - bottom: 50px; }
  footer h4{
  color: var(--gold - light); font - family: 'Cormorant Garamond', serif; font - size: 20px; margin - bottom: 16px;
}
  footer p, footer li{ font - size: 13.5px; line - height: 1.9; }
  footer ul{ list - style: none; padding: 0; margin: 0; }
  footer a{ text - decoration: none; color: var(--muted - cream); }
  footer a: hover, footer a: focus - visible{ color: var(--gold - light); }
  .terms - note{ font - size: 11.5px; color: rgba(248, 245, 240, 0.4); border - top: 1px solid rgba(201, 162, 75, 0.18); padding - top: 24px; line - height: 1.8; }

/* ===== RESPONSIVE ===== */
@media(max - width: 920px) {
  nav.links{ display: none; }
    .menu - toggle{ display: block; }
    .hero.wrap{ grid - template - columns: 1fr; }
    .hero - bottle - stage{ order: -1; margin - bottom: 10px; }
    .hero{ padding - top: 130px; }
    .counter{ grid - template - columns: 1fr 1fr; }
    .swatch - grid{ grid - template - columns: 1fr 1fr; }
    .package - grid{ grid - template - columns: 1fr; }
    .menu - columns{ grid - template - columns: 1fr; gap: 26px; }
    .book.wrap{ grid - template - columns: 1fr; }
    .preview - panel{ position: static; }
    .field - row{ grid - template - columns: 1fr; }
    .footer - grid{ grid - template - columns: 1fr; gap: 34px; }
    .config - bar{ flex - direction: column; align - items: flex - start; gap: 18px; }
}