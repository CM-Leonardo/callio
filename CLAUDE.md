# Callio — regras de layout mobile (obrigatórias)

Base das telas: `index.html` (mesmo conteúdo de `Callio (original).dc.html`). Ao editar um, replicar no outro.

- Nunca usar 100vh. A raiz usa class="cal-root" (height:100%; height:100dvh).
- Toda tela nova precisa rolar quando o conteúdo não couber: a div raiz da tela usa class="cal-screen" (flex:1, overflow-y:auto) e não pode ter overflow:hidden.
- Conteúdo centralizado verticalmente usa class="cal-center" (safe center), nunca justify-content:center direto num container que pode estourar.
- Não posicionar botões de ação com position:absolute no rodapé; deixar no fluxo (flex-shrink:0) para não cobrir o conteúdo em telas baixas.
- Larguras fixas grandes (cards, círculos) devem ter max-width:100%.
- Testar em 320×568, 360×640 e 412×915: nada pode ficar cortado sem rolagem.
- Não remover nem alterar as classes cal-root, cal-screen, cal-center e cal-nav-label nem o <style> que as define.
- Tamanhos de fonte só em números pares (12, 14, 16…). Nunca usar valores ímpares.
- Botões: primário = roxo (Button primary). Secundário = ghost (fundo transparente, sem contorno), texto branco em fundo escuro e preto (#111111) em fundo claro. Vale também para Pular, Cancelar, Ver todas.
- Sem estados de hover em nenhum elemento (não usar style-hover).
