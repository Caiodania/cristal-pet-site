// Números exibidos nos contadores da seção "Sobre".
//
// TODO (confirmar com o cliente): há divergência entre os contadores e o texto
// institucional do site. O texto fala em "quase 60.000 atendimentos realizados"
// e "quase 8 anos" de atuação (desde 2017), enquanto os contadores abaixo — que
// reproduzem os valores do site original — mostram 15 K+ pets e 9 K+ clientes.
// Os valores definitivos precisam ser validados antes de ir ao ar.

export const STATS = [
  {
    id: 'pets',
    icon: '/img/contador-pets.webp',
    iconAlt: 'Ilustração de um cão feliz em sua caminha',
    target: 15,
    suffix: 'K+',
    label: 'Pets felizes',
  },
  {
    id: 'clientes',
    icon: '/img/contador-clientes.webp',
    iconAlt: 'Ilustração de um ossinho dentro de um balão de pensamento',
    target: 9,
    suffix: 'K+',
    label: 'Clientes Felizes',
  },
  {
    id: 'anos',
    icon: '/img/contador-anos.webp',
    iconAlt: 'Ilustração de um cão abraçando um coração',
    target: 8,
    suffix: '+',
    label: 'Anos de experiência',
  },
]
