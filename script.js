const partidos = [
  { liga:'Champions League', local:'Real Madrid',  visita:'Bayern München', hora:'20:45', live:true  },
  { liga:'Premier League',   local:'Arsenal',      visita:'Man City',       hora:'17:30', live:false },
  { liga:'Liga BetPlay',     local:'Millonarios',  visita:'América',        hora:'18:00', live:false },
  { liga:'La Liga',          local:'Barcelona',    visita:'Atlético',       hora:'21:00', live:false },
  { liga:'Serie A',          local:'Napoli',       visita:'Juventus',       hora:'20:45', live:false },
  { liga:'Bundesliga',       local:'Dortmund',     visita:'Bayern',         hora:'17:30', live:false },
];

const canchas = [
  { id:1, nombre:'Cancha El Campín', ubicacion:'Carrera 5 No. 26-20', ciudad:'Bogotá', telefono:'3101234567', capacidad:100, tipo_superficie:'Pasto natural', precio_hora:150000, horario_apertura:'06:00', horario_cierre:'22:00', disponible:true },
  { id:2, nombre:'Futsal La Vila', ubicacion:'Calle 72 No. 11-45', ciudad:'Bogotá', telefono:'3102345678', capacidad:50, tipo_superficie:'Pasto sintético', precio_hora:80000, horario_apertura:'07:00', horario_cierre:'23:00', disponible:true },
  { id:3, nombre:'Cancha Los Andes', ubicacion:'Diagonal 45 No. 20-15', ciudad:'Medellín', telefono:'3103456789', capacidad:80, tipo_superficie:'Pasto natural', precio_hora:120000, horario_apertura:'06:30', horario_cierre:'22:30', disponible:true },
  { id:4, nombre:'Futbol 5 Central', ubicacion:'Calle 10 No. 5-30', ciudad:'Cali', telefono:'3104567890', capacidad:40, tipo_superficie:'Sintético', precio_hora:60000, horario_apertura:'07:00', horario_cierre:'23:00', disponible:false },
  { id:5, nombre:'Cancha Norte', ubicacion:'Transversal 9 No. 120-50', ciudad:'Bogotá', telefono:'3105678901', capacidad:120, tipo_superficie:'Pasto natural', precio_hora:180000, horario_apertura:'06:00', horario_cierre:'23:00', disponible:true },
];

const tabla = [
  { equipo:'Millonarios',     pj:12, g:8, e:3, p:1, gf:22, gc:9  },
  { equipo:'América de Cali', pj:12, g:7, e:3, p:2, gf:19, gc:11 },
  { equipo:'Junior',          pj:12, g:6, e:4, p:2, gf:17, gc:10 },
  { equipo:'Atlético Nal',    pj:12, g:6, e:2, p:4, gf:18, gc:14 },
  { equipo:'Santa Fe',        pj:12, g:5, e:3, p:4, gf:14, gc:13 },
  { equipo:'Once Caldas',     pj:12, g:4, e:4, p:4, gf:13, gc:15 },
  { equipo:'Deportivo Cali',  pj:12, g:3, e:5, p:4, gf:11, gc:14 },
  { equipo:'Medellín',        pj:12, g:2, e:3, p:7, gf:9,  gc:20 },
];

const noticias = [
  { cat:'Champions',      emoji:'🏆', titulo:'Real Madrid clasifica a semis con un golazo en el 90\'', fecha:'Hace 2 horas' },
  { cat:'Selección',      emoji:'🇨🇴', titulo:'Colombia sube al puesto 12 del ranking FIFA tras victoria', fecha:'Hace 5 horas' },
  { cat:'Transferencias', emoji:'💰', titulo:'Mbappé renovará contrato con Madrid hasta 2029', fecha:'Hace 8 horas' },
  { cat:'Liga BetPlay',   emoji:'⚽', titulo:'Millonarios sigue líder tras vencer 3-0 al Pasto', fecha:'Ayer' },
  { cat:'Mundial 2026',   emoji:'🌎', titulo:'FIFA confirma el calendario completo del Mundial de Norteamérica', fecha:'Ayer' },
  { cat:'Premier',        emoji:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', titulo:'Arsenal remonta y sigue en la pelea por el título inglés', fecha:'Hace 2 días' },
];

/* Goleadores históricos colombianos — datos reales verificados 2026 */
const goleadores = [
  {
    nombre:'Dayro Moreno', emoji:'🔥', goles:381, activo:true,
    periodo:'2003–presente', equipo:'Once Caldas',
    detalle:'245 goles en la Liga BetPlay (récord). Máximo goleador colombiano de todos los tiempos. 40 años y sigue goleando.',
  },
  {
    nombre:'Radamel Falcao García', emoji:'🦁', goles:356, activo:false,
    periodo:'2001–2024', equipo:'Rayo Vallecano (último)',
    detalle:'El Tigre. Goleador histórico del Porto, Atlético Madrid y Mónaco. 36 goles con la Selección Colombia.',
  },
  {
    nombre:'Víctor Hugo Aristizábal', emoji:'⭐', goles:346, activo:false,
    periodo:'1990–2008', equipo:'Dep. Independiente (último)',
    detalle:'Ídolo del Atlético Nacional. Goleador histórico del fútbol colombiano de su generación.',
  },
  {
    nombre:'Carlos Bacca', emoji:'🎯', goles:343, activo:true,
    periodo:'2007–presente', equipo:'Junior de Barranquilla',
    detalle:'16 goles con la Selección. Brilló en Sevilla (Europa League) y el AC Milan.',
  },
  {
    nombre:'Iván René Valenciano', emoji:'⚡', goles:217, activo:false,
    periodo:'1990–2008', equipo:'Junior (último)',
    detalle:'El Bombardero. Ídolo absoluto del Junior. Uno de los más queridos del fútbol colombiano.',
  },
  {
    nombre:'Sergio Galván Rey', emoji:'🏅', goles:224, activo:false,
    periodo:'1994–2012', equipo:'Dep. Cali (último)',
    detalle:'Fue el máximo goleador histórico de la Liga colombiana hasta que Dayro lo superó en 2024.',
  },
  {
    nombre:'Arnoldo Iguarán', emoji:'🎖️', goles:25, activo:false,
    periodo:'1979–1995', equipo:'Millonarios (último)',
    detalle:'25 goles con la Selección Colombia, récord histórico de la Tricolor por muchos años.',
  },
  {
    nombre:'James Rodríguez', emoji:'👑', goles:28, activo:true,
    periodo:'2008–presente', equipo:'Rionegro Águilas',
    detalle:'28 goles con Colombia. Bota de Oro Mundial 2014. Referente de su generación.',
  },
];

const maxGoles = Math.max(...goleadores.map(g => g.goles));

/* RENDER PARTIDOS */
const pg = document.getElementById('partidos-grid');
partidos.forEach(p => {
  pg.innerHTML += `<div class="partido-card">
    <div class="partido-liga">${p.liga} ${p.live ? '<span class="badge-live">EN VIVO</span>' : ''}</div>
    <div class="partido-equipos"><span>${p.local}</span><span class="vs">vs</span><span>${p.visita}</span></div>
    <div class="partido-hora">⏰ ${p.hora}</div>
  </div>`;
});

/* RENDER TABLA */
const tb = document.getElementById('tabla-body');
tabla.forEach((t, i) => {
  const pts = t.g * 3 + t.e;
  tb.innerHTML += `<tr>
    <td class="pos-num ${i < 4 ? 'top' : ''}">${i + 1}</td>
    <td class="team-name">${t.equipo}</td>
    <td>${t.pj}</td><td>${t.g}</td><td>${t.e}</td><td>${t.p}</td>
    <td>${t.gf}</td><td>${t.gc}</td>
    <td class="pts">${pts}</td>
  </tr>`;
});

/* RENDER CANCHAS */
const cg = document.getElementById('canchas-grid');
canchas.forEach(c => {
  const estado = c.disponible ? '✅ Disponible' : '❌ No disponible';
  const badgeClass = c.disponible ? 'badge-disponible' : 'badge-nodisponible';
  cg.innerHTML += `<div class="cancha-card">
    <div class="cancha-header">
      <div class="cancha-nombre">${c.nombre}</div>
      <span class="badge ${badgeClass}">${estado}</span>
    </div>
    <div class="cancha-info">
      <div class="cancha-item">📍 ${c.ubicacion}</div>
      <div class="cancha-item">🏙️ ${c.ciudad}</div>
      <div class="cancha-item">👥 Capacidad: ${c.capacidad} personas</div>
      <div class="cancha-item">🌱 ${c.tipo_superficie}</div>
      <div class="cancha-item">⏰ ${c.horario_apertura} - ${c.horario_cierre}</div>
      <div class="cancha-precio">💰 $${c.precio_hora.toLocaleString('es-CO')}/hora</div>
    </div>
    <div class="cancha-footer">
      <a href="tel:${c.telefono}" class="btn-small">📞 Reservar</a>
    </div>
  </div>`;
});

/* RENDER NOTICIAS */
const ng = document.getElementById('noticias-grid');
noticias.forEach(n => {
  ng.innerHTML += `<div class="noticia-card">
    <div class="noticia-img">${n.emoji}</div>
    <div class="noticia-body">
      <div class="noticia-cat">${n.cat}</div>
      <div class="noticia-titulo">${n.titulo}</div>
      <div class="noticia-fecha">${n.fecha}</div>
    </div>
  </div>`;
});

/* RENDER GOLEADORES */
const gg = document.getElementById('goleadores-grid');
const medallas = ['oro','plata','bronce'];
goleadores.forEach((g, i) => {
  const tipo = i < 3 ? medallas[i] : 'resto';
  const rankIcon = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1);
  const pct = Math.round((g.goles / maxGoles) * 100);
  const badge = g.activo
    ? '<span class="badge-activo">ACTIVO</span>'
    : '<span class="badge-retirado">RETIRADO</span>';
  gg.innerHTML += `<div class="goleador-card ${tipo}">
    <div class="gol-rank ${tipo}">${rankIcon}</div>
    <div class="gol-emoji">${g.emoji}</div>
    <div class="gol-info">
      <div class="gol-nombre">${g.nombre}${badge}</div>
      <div class="gol-detalle">📅 <span>${g.periodo}</span> · ${g.equipo}</div>
      <div class="gol-detalle">📝 <span>${g.detalle}</span></div>
      <div class="gol-bar-wrap"><div class="gol-bar" style="width:${pct}%"></div></div>
    </div>
    <div class="gol-stats">
      <div class="gol-num">${g.goles}</div>
      <div class="gol-label">goles</div>
    </div>
  </div>`;
});

/* RELOJ EN VIVO */
let min = 67;
setInterval(() => {
  if (min < 90) { min++; document.getElementById('minuto').textContent = min + "'"; }
}, 8000);
