/* ═══════════════════════════════════════════════════════════════
   ⚙️  CONFIGURAÇÕES — edite somente este bloco
═══════════════════════════════════════════════════════════════ */
const CONFIG = {
  whatsapp: '5571981664170',
  pix: 'Peça a chave Pix ao Atendente e aguarde confirmação do pedido',
  pixTipo: 'Telefone',
  linkCartaoDebito:  'Peça o link de pagamento ao Atendente e aguarde confirmação do pedido',
  linkCartaoCredito: 'Peça o link de pagamento ao Atendente e aguarde confirmação do pedido',
  nomeEstabelecimento: 'Hambrugueria BarraVento',
  enderecoEstabelecimento: 'Avenida Centenário, 2992 - Chame-Chame, Salvador - BA',
  funcionamento: { abertura: 11, fechamento: 23, fechamentoMin: 0 },
};

/* ═══════════════════════════════════════════════════════════════
   🗺️  BAIRROS E TAXAS DE ENTREGA
   Edite as taxas (taxa) conforme necessário.
   Use null para indicar "fora da área de entrega".
═══════════════════════════════════════════════════════════════ */
const BAIRROS = [
  { nome: 'Acupe', taxa: 18.00 },
  { nome: 'Aeroporto', taxa: 15.00 },
  { nome: 'Águas Claras', taxa: 12.00 },
  { nome: 'Alto da Terezinha', taxa: 10.00 },
  { nome: 'Alto das Pombas', taxa: 10.00 },
  { nome: 'Alto do Cabrito', taxa: 12.00 },
  { nome: 'Alto do Coqueirinho', taxa: 12.00 },
  { nome: 'Amaralina', taxa: 8.00 },
  { nome: 'Areia Branca', taxa: 13.00 },
  { nome: 'Arenoso', taxa: 14.00 },
  { nome: 'Arraial do Retiro', taxa: 13.00 },
  { nome: 'Bairro da Paz', taxa: 10.00 },
  { nome: 'Baixa de Quintas', taxa: 7.00 },
  { nome: 'Barbalho', taxa: 7.00 },
  { nome: 'Barra', taxa: 9.00 },
  { nome: 'Barreiras', taxa: null },
  { nome: 'Barris', taxa: 7.00 },
  { nome: 'Beiru/Tancredo Neves', taxa: 11.00 },
  { nome: 'Boa Viagem', taxa: 8.00 },
  { nome: 'Boa Vista de Brotas', taxa: 9.00 },
  { nome: 'Boa Vista de São Caetano', taxa: 11.00 },
  { nome: 'Boca da Mata', taxa: 14.00 },
  { nome: 'Boca do Rio', taxa: 10.00 },
  { nome: 'Bom Juá', taxa: 12.00 },
  { nome: 'Bonfim', taxa: 8.00 },
  { nome: 'Brotas', taxa: 8.00 },
  { nome: 'Cabula', taxa: 10.00 },
  { nome: 'Cabula VI', taxa: 11.00 },
  { nome: 'Caixa D\'Água', taxa: 9.00 },
  { nome: 'Cajazeiras II', taxa: 14.00 },
  { nome: 'Cajazeiras IV', taxa: 14.00 },
  { nome: 'Cajazeiras V', taxa: 15.00 },
  { nome: 'Cajazeiras VI', taxa: 15.00 },
  { nome: 'Cajazeiras VII', taxa: 15.00 },
  { nome: 'Cajazeiras VIII', taxa: 16.00 },
  { nome: 'Cajazeiras X', taxa: 16.00 },
  { nome: 'Cajazeiras XI', taxa: 16.00 },
  { nome: 'Calabar', taxa: 9.00 },
  { nome: 'Calabetão', taxa: 11.00 },
  { nome: 'Calçada', taxa: 8.00 },
  { nome: 'Caminho das Árvores', taxa: 9.00 },
  { nome: 'Caminho de Areia', taxa: 10.00 },
  { nome: 'Campinas de Pirajá', taxa: 13.00 },
  { nome: 'Canabrava', taxa: 14.00 },
  { nome: 'Candeal', taxa: 9.00 },
  { nome: 'Canela', taxa: 7.00 },
  { nome: 'Capelinha', taxa: 12.00 },
  { nome: 'Cassange', taxa: 12.00 },
  { nome: 'Castelo Branco', taxa: 11.00 },
  { nome: 'Centro', taxa: 7.00 },
  { nome: 'Centro Administrativo da Bahia', taxa: 10.00 },
  { nome: 'Centro Histórico', taxa: 7.00 },
  { nome: 'Chapada do Rio Vermelho', taxa: 9.00 },
  { nome: 'Cidade Nova', taxa: 8.00 },
  { nome: 'Comércio', taxa: 7.00 },
  { nome: 'Cosme de Farias', taxa: 9.00 },
  { nome: 'Costa Azul', taxa: 9.00 },
  { nome: 'Coutos', taxa: 16.00 },
  { nome: 'Curuzu', taxa: 8.00 },
  { nome: 'Dom Avelar', taxa: 13.00 },
  { nome: 'Doron', taxa: 11.00 },
  { nome: 'Engenho Velho da Federação', taxa: 8.00 },
  { nome: 'Engenho Velho de Brotas', taxa: 9.00 },
  { nome: 'Engomadeira', taxa: 11.00 },
  { nome: 'Fazenda Coutos', taxa: 17.00 },
  { nome: 'Fazenda Grande do Retiro', taxa: 12.00 },
  { nome: 'Fazenda Grande I', taxa: 14.00 },
  { nome: 'Fazenda Grande II', taxa: 14.00 },
  { nome: 'Fazenda Grande III', taxa: 15.00 },
  { nome: 'Fazenda Grande IV', taxa: 15.00 },
  { nome: 'Federação', taxa: 8.00 },
  { nome: 'Garcia', taxa: 8.00 },
  { nome: 'Graça', taxa: 8.00 },
  { nome: 'Granjas Rurais Presidente Vargas', taxa: 16.00 },
  { nome: 'IAPI', taxa: 10.00 },
  { nome: 'Ilha de Bom Jesus dos Passos', taxa: null },
  { nome: 'Ilha de Maré', taxa: null },
  { nome: 'Ilha dos Frades', taxa: null },
  { nome: 'Imbuí', taxa: 11.00 },
  { nome: 'Itacaranha', taxa: 16.00 },
  { nome: 'Itaigara', taxa: 9.00 },
  { nome: 'Itapuã', taxa: 15.00 },
  { nome: 'Itinga', taxa: 16.00 },
  { nome: 'Jaguaripe I', taxa: null },
  { nome: 'Jardim Armação', taxa: 11.00 },
  { nome: 'Jardim Cajazeiras', taxa: 15.00 },
  { nome: 'Jardim das Margaridas', taxa: 16.00 },
  { nome: 'Jardim Nova Esperança', taxa: 13.00 },
  { nome: 'Jardim Santo Inácio', taxa: 11.00 },
  { nome: 'Lapinha', taxa: 8.00 },
  { nome: 'Liberdade', taxa: 8.00 },
  { nome: 'Lobato', taxa: 14.00 },
  { nome: 'Luiz Anselmo', taxa: 9.00 },
  { nome: 'Macaúbas', taxa: 12.00 },
  { nome: 'Mangueira', taxa: 10.00 },
  { nome: 'Marechal Rondon', taxa: 12.00 },
  { nome: 'Mares', taxa: 8.00 },
  { nome: 'Massaranduba', taxa: 8.00 },
  { nome: 'Mata Escura', taxa: 12.00 },
  { nome: 'Matatu', taxa: 9.00 },
  { nome: 'Monte Serrat', taxa: 8.00 },
  { nome: 'Moradas da Lagoa', taxa: 12.00 },
  { nome: 'Mussurunga', taxa: 15.00 },
  { nome: 'Narandiba', taxa: 11.00 },
  { nome: 'Nazaré', taxa: 7.00 },
  { nome: 'Nordeste de Amaralina', taxa: 9.00 },
  { nome: 'Nova Brasília', taxa: 14.00 },
  { nome: 'Nova Constituinte', taxa: 15.00 },
  { nome: 'Nova Esperança', taxa: 13.00 },
  { nome: 'Nova Sussuarana', taxa: 13.00 },
  { nome: 'Novo Horizonte', taxa: 13.00 },
  { nome: 'Novo Marotinho', taxa: 14.00 },
  { nome: 'Ondina', taxa: 8.00 },
  { nome: 'Palestina', taxa: 13.00 },
  { nome: 'Paripe', taxa: 16.00 },
  { nome: 'Patamares', taxa: 13.00 },
  { nome: 'Pau da Lima', taxa: 14.00 },
  { nome: 'Pau Miúdo', taxa: 9.00 },
  { nome: 'Periperi', taxa: 15.00 },
  { nome: 'Pernambués', taxa: 10.00 },
  { nome: 'Pero Vaz', taxa: 10.00 },
  { nome: 'Piatã', taxa: 14.00 },
  { nome: 'Pirajá', taxa: 14.00 },
  { nome: 'Pituaçu', taxa: 12.00 },
  { nome: 'Pituba', taxa: 9.00 },
  { nome: 'Plataforma', taxa: 14.00 },
  { nome: 'Porto Seco Pirajá', taxa: 13.00 },
  { nome: 'Praia Grande', taxa: 8.00 },
  { nome: 'Resgate', taxa: 11.00 },
  { nome: 'Retiro', taxa: 11.00 },
  { nome: 'Ribeira', taxa: 9.00 },
  { nome: 'Rio Sena', taxa: 12.00 },
  { nome: 'Rio Vermelho', taxa: 9.00 },
  { nome: 'Roma', taxa: 8.00 },
  { nome: 'Saboeiro', taxa: 10.00 },
  { nome: 'Santa Cruz', taxa: 13.00 },
  { nome: 'Santa Luzia', taxa: 11.00 },
  { nome: 'Santa Mônica', taxa: 12.00 },
  { nome: 'Santo Agostinho', taxa: 7.00 },
  { nome: 'Santo Antônio', taxa: 7.00 },
  { nome: 'São Caetano', taxa: 10.00 },
  { nome: 'São Cristóvão', taxa: 11.00 },
  { nome: 'São Gonçalo', taxa: 9.00 },
  { nome: 'São João do Cabrito', taxa: 15.00 },
  { nome: 'São Marcos', taxa: 13.00 },
  { nome: 'São Rafael', taxa: 14.00 },
  { nome: 'São Tomé', taxa: 11.00 },
  { nome: 'Saramandaia', taxa: 9.00 },
  { nome: 'Saúde', taxa: 8.00 },
  { nome: 'Sete de Abril', taxa: 13.00 },
  { nome: 'Stella Maris', taxa: 15.00 },
  { nome: 'STIEP', taxa: 10.00 },
  { nome: 'Sussuarana', taxa: 12.00 },
  { nome: 'Tororó', taxa: 7.00 },
  { nome: 'Trobogy', taxa: 14.00 },
  { nome: 'Uruguai', taxa: 9.00 },
  { nome: 'Vale das Pedrinhas', taxa: 11.00 },
  { nome: 'Vale dos Lagos', taxa: 13.00 },
  { nome: 'Valéria', taxa: 16.00 },
  { nome: 'Vila Canária', taxa: 13.00 },
  { nome: 'Vila Laura', taxa: 9.00 },
  { nome: 'Vila Ruy Barbosa/Jardim Cruzeiro', taxa: 11.00 },
  { nome: 'Vitória', taxa: 8.00 },
];

/* ─── CARDÁPIO ─────────────────────────────────────────────────
   Campos: id, nome, desc, preco, tag, img
═══════════════════════════════════════════════════════════════ */
const PIZZAS = [
  {
    id: 1, nome: 'Classic Smash',
    desc: 'Blend 180g smashado, cheddar americano, alface, tomate e maionese da casa',
    preco: 32.00, tag: 'Clássico',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600'
  },
  {
    id: 2, nome: 'Double Bacon',
    desc: 'Dois blends 120g, bacon crocante, cheddar duplo, cebola caramelizada',
    preco: 42.00, tag: 'Especial',
    img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600'
  },
  {
    id: 3, nome: 'Chicken Crispy',
    desc: 'Frango empanado crocante, coleslaw, picles e molho honey mustard',
    preco: 35.00, tag: 'Frango',
    img: 'https://i.pinimg.com/originals/f0/83/12/f08312b5b45b888622e24921df51cb4d.png'
  },
  {
    id: 4, nome: 'BBQ Monster',
    desc: 'Blend 200g, barbecue defumado, onion rings, jalapeño e cheddar',
    preco: 48.00, tag: 'Premium',
    img: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=600'
  },
  {
    id: 5, nome: 'Veggie Burger',
    desc: 'Blend de grão-de-bico, rúcula, tomate seco e maionese de ervas',
    preco: 34.00, tag: 'Veggie',
    img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600'
  },
  {
    id: 6, nome: 'Batata Frita (P)',
    desc: 'Porção individual crocante com sal e tempero especial da casa',
    preco: 16.00, tag: 'Acompanhamento',
    img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600'
  },
  {
    id: 7, nome: 'Batata Frita (G)',
    desc: 'Porção grande para compartilhar com molho cheddar à parte',
    preco: 26.00, tag: 'Acompanhamento',
    img: 'https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=600'
  },
  {
    id: 8, nome: 'Milk Shake',
    desc: 'Baunilha, chocolate ou morango — 400ml com chantilly',
    preco: 22.00, tag: 'Bebida',
    img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600'
  },
{
  id: 9, nome: 'Refrigerante (350ml)',
  desc: 'Coca-Cola, Guaraná ou Sprite — gelado',
  preco: 8.00, tag: 'Bebida',
  img: 'https://cardapio.nomadasushi.com.br/wp-content/uploads/2024/08/Design-sem-nome-768x768.png'
},
];
/* ══════════════════════════════════════════════════════════════
   A PARTIR DAQUI NÃO É NECESSÁRIO EDITAR
══════════════════════════════════════════════════════════════ */

let cart = {};
let taxaAtual = 0;
let bairroSelecionado = null;

function brl(v) { return 'R$ ' + v.toFixed(2).replace('.', ','); }

function gerarIdPedido() {
  const ts  = Date.now().toString(36).toUpperCase();
  const rnd = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `PED-${ts}-${rnd}`;
}

function statusPedido() {
  const { abertura, fechamento, fechamentoMin } = CONFIG.funcionamento;
  const agora = new Date();
  const hhmm  = agora.getHours() * 60 + agora.getMinutes();
  return (hhmm >= abertura * 60 && hhmm <= fechamento * 60 + fechamentoMin)
    ? '🟢 Feito durante o horário de funcionamento'
    : '🕐 Fora do horário — será confirmado ao abrirmos';
}

function formatarTelefone(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 11);
  if      (v.length >= 11) v = v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  else if (v.length >= 7)  v = v.replace(/(\d{2})(\d{4,5})(\d{0,4})/, '($1) $2-$3');
  else if (v.length >= 3)  v = v.replace(/(\d{2})(\d{0,5})/, '($1) $2');
  input.value = v;
}

function limparErro(id) { document.getElementById(id)?.classList.remove('has-error'); }

/* ─── AUTOCOMPLETE DE BAIRRO ──────────────────────────────── */
function normalizarTexto(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function iniciarAutocompleteBairro() {
  const input    = document.getElementById('f-bairro');
  const dropdown = document.getElementById('bairro-dropdown');
  if (!input || !dropdown) return;

  // Digita → filtra
  input.addEventListener('input', () => {
    limparErro('fg-bairro');
    const q = normalizarTexto(input.value);

    // Se apagou tudo, limpa seleção
    if (!q) { selecionarBairro(null); fecharDropdown(); return; }

    // Se o que está escrito não bate mais com o bairro selecionado, invalida
    if (bairroSelecionado && normalizarTexto(bairroSelecionado.nome) !== q) {
      selecionarBairro(null);
    }

    const resultados = BAIRROS.filter(b =>
      normalizarTexto(b.nome).includes(q)
    );
    renderDropdown(resultados, q);
  });

  // Clique fora fecha
  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) fecharDropdown();
  });

  // Teclado: ↑ ↓ Enter Escape
  input.addEventListener('keydown', e => {
    const items = dropdown.querySelectorAll('.bairro-option:not(.fora-area)');
    const active = dropdown.querySelector('.bairro-option.highlighted');
    let idx = [...items].indexOf(active);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      idx = Math.min(idx + 1, items.length - 1);
      setHighlight(items, idx);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      idx = Math.max(idx - 1, 0);
      setHighlight(items, idx);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (active) active.click();
    } else if (e.key === 'Escape') {
      fecharDropdown();
      input.blur();
    }
  });
}

function setHighlight(items, idx) {
  items.forEach(el => el.classList.remove('highlighted'));
  if (items[idx]) {
    items[idx].classList.add('highlighted');
    items[idx].scrollIntoView({ block: 'nearest' });
  }
}

function renderDropdown(resultados, query) {
  const dropdown = document.getElementById('bairro-dropdown');
  if (!resultados.length) {
    dropdown.innerHTML = '<div class="bairro-empty">Nenhum bairro encontrado</div>';
    dropdown.classList.add('open');
    return;
  }

  dropdown.innerHTML = resultados.map((b, i) => {
    const foraArea = b.taxa === null;
    // destaca o trecho digitado no nome
    const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const nomeHL = b.nome.replace(re, '<mark>$1</mark>');
    return `
      <div class="bairro-option${foraArea ? ' fora-area' : ''}"
           data-idx="${BAIRROS.indexOf(b)}"
           ${foraArea ? '' : `onclick="escolherBairro(${BAIRROS.indexOf(b)})"`}>
        <span class="bairro-option-nome">${nomeHL}</span>
        <span class="bairro-option-taxa ${foraArea ? 'taxa-fora' : ''}">
          ${foraArea ? 'Fora da área' : brl(b.taxa)}
        </span>
      </div>`;
  }).join('');

  dropdown.classList.add('open');
}

function fecharDropdown() {
  const dropdown = document.getElementById('bairro-dropdown');
  if (dropdown) dropdown.classList.remove('open');
}

function escolherBairro(idx) {
  const b = BAIRROS[idx];
  if (!b || b.taxa === null) return;
  document.getElementById('f-bairro').value = b.nome;
  selecionarBairro(b);
  fecharDropdown();
  limparErro('fg-bairro');
}

function selecionarBairro(b) {
  bairroSelecionado = b;
  taxaAtual = b ? b.taxa : 0;
  atualizarTaxaDisplay();
  atualizarResumo();
}

// mantido para compatibilidade — não faz mais nada
function popularSelectBairro() {}
function onBairroChange() {}

function atualizarTaxaDisplay() {
  const taxaValor = document.getElementById('taxa-valor');
  const taxaTexto = document.getElementById('taxa-texto');
  if (!taxaValor) return;
  if (!bairroSelecionado) {
    taxaValor.textContent = '—';
    taxaTexto.textContent = 'Selecione o bairro acima';
  } else {
    taxaValor.textContent = brl(taxaAtual);
    taxaTexto.textContent = bairroSelecionado.nome;
  }
  atualizarResumo();
}

/* ─── ENTREGA ─────────────────────────────────────────────── */
function atualizarMetodo() {
  const m = document.getElementById('f-metodo').value;
  document.getElementById('bloco-endereco').style.display = m === 'delivery' ? 'block' : 'none';
  document.getElementById('bloco-retirada').style.display = m === 'retirada' ? 'block' : 'none';
  if (m === 'retirada') { taxaAtual = 0; bairroSelecionado = null; atualizarResumo(); }
  if (m === 'delivery') { atualizarTaxaDisplay(); }
}

function atualizarPagamento() {
  const pgto = document.getElementById('f-pgto').value;
  document.getElementById('fg-troco').style.display = pgto === 'dinheiro' ? 'block' : 'none';
  const pb = document.getElementById('pixBox');
  pgto === 'pix' ? (pb.classList.add('show'), document.getElementById('pixKeyDisplay').textContent = CONFIG.pix + ' (' + CONFIG.pixTipo + ')') : pb.classList.remove('show');
  const cb = document.getElementById('cardBox');
  const link = pgto === 'debito' ? CONFIG.linkCartaoDebito : pgto === 'credito' ? CONFIG.linkCartaoCredito : '';
  if (link) { cb.classList.add('show'); document.getElementById('cardLinkDisplay').textContent = link; } else { cb.classList.remove('show'); }
}

function copiarPix() { navigator.clipboard.writeText(CONFIG.pix).then(() => showToast('✓ Chave Pix copiada!')); }
function copiarLinkCartao() {
  const pgto = document.getElementById('f-pgto').value;
  const link = pgto === 'debito' ? CONFIG.linkCartaoDebito : CONFIG.linkCartaoCredito;
  if (link) navigator.clipboard.writeText(link).then(() => showToast('✓ Link copiado!'));
}

function atualizarResumo() {
  const items = Object.values(cart);
  const subtotal = items.reduce((s, i) => s + i.preco * i.qty, 0);
  const metodo = document.getElementById('f-metodo')?.value;
  const taxa = metodo === 'delivery' ? taxaAtual : 0;
  const total = subtotal + taxa;
  let html = items.map(i => `<div class="order-line"><span>${i.nome} ×${i.qty}</span><span>${brl(i.preco * i.qty)}</span></div>`).join('');
  html += `<div class="order-line separator"><span class="muted">Subtotal</span><span>${brl(subtotal)}</span></div>`;
  html += `<div class="order-line"><span class="muted">Taxa de entrega</span><span>${taxa === 0 ? 'Grátis' : brl(taxa)}</span></div>`;
  html += `<div class="order-line total-line"><span>Total</span><span>${brl(total)}</span></div>`;
  document.getElementById('orderSummary').innerHTML = html;
}

function adicionarTelefone() {
  const list = document.getElementById('phoneList');
  const row = document.createElement('div');
  row.className = 'phone-row';
  row.innerHTML = `<input type="tel" placeholder="(71) 99999-9999" oninput="formatarTelefone(this)"><button class="rm-phone-btn" onclick="this.parentElement.remove()">✕</button>`;
  list.appendChild(row);
}

function coletarTelefones() {
  return [...document.querySelectorAll('#phoneList input')].map(i => i.value.trim()).filter(Boolean).join(' / ');
}

function validarFormulario() {
  let ok = true;
  const metodo = document.getElementById('f-metodo').value;
  const chk = (gId, val) => { if (!val) { document.getElementById(gId).classList.add('has-error'); ok = false; } return !!val; };
  chk('fg-nome', document.getElementById('f-nome').value.trim());
  if (![...document.querySelectorAll('#phoneList input')].some(p => p.value.trim())) { document.getElementById('fg-tel').classList.add('has-error'); ok = false; }
  chk('fg-metodo', metodo);
  if (metodo === 'delivery') {
    if (!bairroSelecionado) { document.getElementById('fg-bairro').classList.add('has-error'); ok = false; }
  }
  chk('fg-pgto', document.getElementById('f-pgto').value);
  if (!ok) showToast('⚠️ Preencha todos os campos obrigatórios');
  return ok;
}

function enviarWhatsApp() {
  if (!validarFormulario()) return;
  const id = gerarIdPedido();
  const agora = new Date();
  const dtHora = agora.toLocaleDateString('pt-BR') + ' às ' + agora.toLocaleTimeString('pt-BR', { hour:'2-digit', minute:'2-digit' });
  const nome = document.getElementById('f-nome').value.trim();
  const tels = coletarTelefones();
  const metodo = document.getElementById('f-metodo').value;
  const pgto = document.getElementById('f-pgto').value;
  const troco = document.getElementById('f-troco').value.trim();
  const comp = document.getElementById('f-comp')?.value.trim() || '';
  const items = Object.values(cart);
  const subtotal = items.reduce((s, i) => s + i.preco * i.qty, 0);
  const taxa = metodo === 'delivery' ? taxaAtual : 0;
  const total = subtotal + taxa;
  const pgtoLabel = { dinheiro:'💵 Dinheiro', pix:'📱 Pix', debito:'💳 Débito', credito:'💳 Crédito' };

  let endTxt = 'Retirada no balcão';
  if (metodo === 'delivery') {
    endTxt = bairroSelecionado ? bairroSelecionado.nome : '—';
    if (comp) endTxt += ' — ' + comp;
  }

  const itensTxt = items.map(i => `  • ${i.nome} ×${i.qty}  →  ${brl(i.preco * i.qty)}`).join('\n');
  const pixTxt = pgto === 'pix' ? `\n📱 *Chave Pix (${CONFIG.pixTipo}):* ${CONFIG.pix}\n_Envie o comprovante nesta conversa._` : '';
  const cartaoTxt = pgto === 'debito' && CONFIG.linkCartaoDebito ? `\n🔗 *Link (Débito):*\n${CONFIG.linkCartaoDebito}` : pgto === 'credito' && CONFIG.linkCartaoCredito ? `\n🔗 *Link (Crédito):*\n${CONFIG.linkCartaoCredito}` : '';
  const trocoTxt = pgto === 'dinheiro' && troco ? `\n💰 *Troco para:* ${troco}` : '';
  const msg =
`🍔 *${CONFIG.nomeEstabelecimento}* — Novo Pedido

🔖 *Pedido #${id}*
📅 ${dtHora}
📌 *Status:* ${statusPedido()}

━━━━━━━━━━━━━━━━━━━━
👤 *CLIENTE*
━━━━━━━━━━━━━━━━━━━━
Nome:      ${nome}
Telefone:  ${tels}

━━━━━━━━━━━━━━━━━━━━
🚚 *ENTREGA*
━━━━━━━━━━━━━━━━━━━━
Método:    ${metodo === 'delivery' ? '🛵 Delivery' : '🏪 Retirada no balcão'}
Bairro:    ${endTxt}

━━━━━━━━━━━━━━━━━━━━
🍔 *ITENS DO PEDIDO*
━━━━━━━━━━━━━━━━━━━━
${itensTxt}

Subtotal:        ${brl(subtotal)}
Taxa de entrega: ${taxa === 0 ? 'Grátis' : brl(taxa)}
*TOTAL FINAL:    ${brl(total)}*

━━━━━━━━━━━━━━━━━━━━
💳 *PAGAMENTO*
━━━━━━━━━━━━━━━━━━━━
Forma: ${pgtoLabel[pgto] || pgto}${trocoTxt}${pixTxt}${cartaoTxt}

━━━━━━━━━━━━━━━━━━━━
_Pedido gerado via site._`;
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  fecharModal();
  showToast('✓ Pedido enviado! Aguarde confirmação 🍔');
}

function renderMenu() {
  document.getElementById('menuGrid').innerHTML = PIZZAS.map(p => `
    <div class="card">
      <div class="card-img-wrap"><img class="card-img" src="${p.img}" alt="${p.nome}" loading="lazy"></div>
      <div class="card-body">
        <p class="card-tag">${p.tag}</p>
        <h3 class="card-name">${p.nome}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-footer">
          <span class="card-price">${brl(p.preco)}</span>
          <div class="qty-control" id="ctrl-${p.id}">
            <button class="add-btn" onclick="adicionarItem(${p.id})">+ Adicionar</button>
          </div>
        </div>
      </div>
    </div>`).join('');
}

function updateCardControl(id) {
  const ctrl = document.getElementById(`ctrl-${id}`);
  if (!ctrl) return;
  const qty = cart[id]?.qty || 0;
  ctrl.innerHTML = qty === 0
    ? `<button class="add-btn" onclick="adicionarItem(${id})">+ Adicionar</button>`
    : `<button class="qty-btn" onclick="decrementarItem(${id})">−</button><span class="qty-num">${qty}</span><button class="qty-btn" onclick="adicionarItem(${id})">+</button>`;
}

function adicionarItem(id) {
  const p = PIZZAS.find(p => p.id === id); if (!p) return;
  cart[id] ? cart[id].qty++ : (cart[id] = { ...p, qty: 1 });
  updateCardControl(id); renderCart(); bumpBadge(); showToast(`✓ ${p.nome} adicionado`);
}

function decrementarItem(id) {
  if (!cart[id]) return; cart[id].qty--;
  if (cart[id].qty <= 0) delete cart[id];
  updateCardControl(id); renderCart(); bumpBadge();
}

function removerItem(id) { delete cart[id]; updateCardControl(id); renderCart(); bumpBadge(); }

function limparCarrinho() { cart = {}; PIZZAS.forEach(p => updateCardControl(p.id)); renderCart(); bumpBadge(); }

function renderCart() {
  const items = Object.values(cart);
  const subtotal = items.reduce((s, i) => s + i.preco * i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty, 0);
  const btn = document.getElementById('checkoutBtn');
  document.getElementById('totalValue').textContent = brl(subtotal);
  document.getElementById('cartBadge').textContent = total;
  btn.disabled = items.length === 0;
  const fab = document.getElementById('cartFab');
  if (fab) {
    document.getElementById('fabBadge').textContent = total;
    document.getElementById('fabLabel').textContent = total > 0 ? `Ver carrinho · ${brl(subtotal)}` : 'Carrinho';
    fab.classList.toggle('hidden', total === 0);
  }
  if (items.length === 0) { document.getElementById('sidebarItems').innerHTML = `<div class="empty-msg">Seu carrinho está vazio.<br>Escolha um burger! 🍔</div>`; return; }
  document.getElementById('sidebarItems').innerHTML = items.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.nome}">
      <div class="cart-item-info">
        <p class="cart-item-name">${item.nome}</p>
        <p class="cart-item-price">${brl(item.preco)} × ${item.qty}</p>
        <div class="cart-item-actions">
          <button class="qty-btn" onclick="decrementarItem(${item.id})" style="width:28px;height:28px;font-size:1rem;">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="adicionarItem(${item.id})" style="width:28px;height:28px;font-size:1rem;">+</button>
          <button class="remove-btn" onclick="removerItem(${item.id})">✕ remover</button>
        </div>
      </div>
    </div>`).join('');
}

function toggleCart() { document.getElementById('sidebar').classList.toggle('open'); document.getElementById('overlay').classList.toggle('open'); }
function abrirModal() { toggleCart(); atualizarResumo(); document.getElementById('modalOverlay').classList.add('open'); }
function fecharModal() { document.getElementById('modalOverlay').classList.remove('open'); }

function bumpBadge() {
  const b = document.getElementById('cartBadge');
  b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump');
  setTimeout(() => b.classList.remove('bump'), 400);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._timer); t._timer = setTimeout(() => t.classList.remove('show'), 2800);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modalOverlay').addEventListener('click', e => { if (e.target === document.getElementById('modalOverlay')) fecharModal(); });
  iniciarAutocompleteBairro();
  renderMenu();
  renderCart();
});